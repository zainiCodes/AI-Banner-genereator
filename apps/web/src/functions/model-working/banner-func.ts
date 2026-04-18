// server/banner.functions.ts
import { createServerFn } from "@tanstack/react-start";
import { GoogleGenAI } from "@google/genai";
import { generateImagePrompt } from "./prompt";
import { formSchema } from "@/features/dashboard/components/dashboard-form";
import type z from "zod";

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!
});

export const generateBanner = createServerFn({ method: "POST" })
    .inputValidator((data: z.infer<typeof formSchema>) => data)
    .handler(async ({ data }) => {
        try {
            const prompt = generateImagePrompt(data);

            const response = await ai.models.generateContent({
                model: "gemini-3.1-flash-image-preview",
                contents: [prompt],
            });

            // 1. Access the first candidate (the primary version generated)
            // 2. Access the content parts within that candidate
            // 3. Find the part containing 'inlineData' (the actual image bytes)
            const firstCandidate = response.candidates?.[0];
            const imagePart = firstCandidate?.content?.parts?.find(p => p.inlineData);

            if (!imagePart || !imagePart.inlineData || !imagePart.inlineData.data) {
                throw new Error("The AI did not return an image. Check your safety settings or prompt.");
            }

            return {
                base64: imagePart.inlineData.data,
                mimeType: imagePart.inlineData.mimeType || "image/png"
            };
        } catch (error) {
            console.error("Gemini SDK Error:", error);
            throw new Error("Failed to generate image. Ensure your API key has Image Generation enabled.");
        }
    });