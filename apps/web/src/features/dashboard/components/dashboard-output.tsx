import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@my-better-t-app/ui/components/card"
import { AspectRatio } from "@my-better-t-app/ui/components/aspect-ratio"
import { useModelData } from "@/store/useModelData"
import { Skeleton } from "@my-better-t-app/ui/components/skeleton"

export default function DashboardOutput() {
    const { modelData, isGenerating, generatedImage } = useModelData()
    const ratio =
        modelData.AspectRatio
            ?.split(":")
            .map(Number);

    const aspectRatio = ratio ? ratio[0] / ratio[1] : 1;

    return (
        <Card className="w-full h-fit max-w-md">
            <CardHeader>
                <CardTitle>Preview</CardTitle>
            </CardHeader>

            <CardContent>
                <AspectRatio
                    ratio={aspectRatio}
                    className="bg-muted overflow-hidden border transition-all duration-300"
                >
                    {isGenerating ? (
                        <div className="w-full h-full flex flex-col items-center justify-center p-4">
                            <Skeleton className="w-full h-full rounded-md" />
                            <p className="absolute text-muted-foreground animate-pulse font-medium">✨ Generating your banner...</p>
                        </div>
                    ) : generatedImage ? (
                        <img
                            src={`data:${generatedImage.mimeType};base64,${generatedImage.base64}`}
                            alt="Generated preview"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="relative w-full h-full flex items-center justify-center rounded-md overflow-hidden">
                            <div
                                className="
                                absolute inset-0
                                bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),
                                    linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
                                opacity-40
                                "
                            />
                            <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
                            <div className="relative z-10 flex flex-col items-center gap-2 text-center px-4">
                                <div className="w-10 h-10 rounded-full border border-dashed flex items-center justify-center">
                                    <span className="text-lg">🖼️</span>
                                </div>
                                <p className="text-sm font-medium text-muted-foreground">
                                    No image generated
                                </p>
                                <p className="text-xs text-muted-foreground/70">
                                    Select options and generate a preview
                                </p>
                            </div>
                        </div>
                    )}
                </AspectRatio>
            </CardContent>
        </Card>
    )
}