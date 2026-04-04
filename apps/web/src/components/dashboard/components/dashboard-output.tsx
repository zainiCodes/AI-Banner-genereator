import { Card, CardHeader, CardTitle, CardContent } from "@my-better-t-app/ui/components/card";
import { AspectRatio } from "@my-better-t-app/ui/components/aspect-ratio";

export default function DashboardOutput() {
    return (
        <Card className="w-full h-fit py-4 sm:max-w-md">
            <CardHeader>
                <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
                <AspectRatio ratio={16 / 9} className="bg-muted" >

                </AspectRatio>
            </CardContent>
        </Card>
    )
}