import { create } from "zustand"
import { formSchema } from "../features/dashboard/components/dashboard-form"
import z from "zod"

interface useModelData {
    modelData: z.infer<typeof formSchema>,
    setModelData: (modelData: z.infer<typeof formSchema>) => void
}

export const useModelData = create<useModelData>((set) => ({
    modelData: {
        title: "",
        AspectRatio: "16:9",
        thumbNailStyle: "Bold and Graphic",
        themes: "sunset",
        optional: ""
    },
    setModelData: (modelData) => set({ modelData }),
}))
