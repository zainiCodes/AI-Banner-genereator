
import type { formSchema } from "@/features/dashboard/components/dashboard-form";
import { z } from "zod";

export const generateImagePrompt = (data: z.infer<typeof formSchema>) => {
    const styleMap = {
        "Bold and Graphic": "flat vector art, minimalist, bold solid colors, clean lines, high contrast, professional digital branding",
        "Black and White": "monochrome photography, high-key noir aesthetic, sharp shadows, cinematic lighting, minimalist silver-gelatin style"
    };

    const themeMap = {
        "sunset": "golden hour vibes, warm orange and purple gradients, soft atmospheric glow",
        "cool": "icy blue and cyan palette, crisp clean modern corporate lighting",
        "forest": "deep emerald greens, earthy tones, dappled sunlight through leaves, organic textures",
        "neon": "cyberpunk synthwave aesthetic, vibrant pink and blue neon glow, dark reflective surfaces"
    };

    return `
    Create a high-quality website banner.
    Title to incorporate: "${data.title}"
    Primary Style: ${styleMap[data.thumbNailStyle]}
    Visual Theme: ${themeMap[data.themes]}
    ${data.optional ? `Specific requirement: ${data.optional}` : ""}
    Composition: Wide-angle, clean space for text, 4k resolution, optimized for ${data.AspectRatio} aspect ratio.
    NO distorted text, NO blurry edges.
  `.trim();
};