import * as React from "react"
import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import z from "zod"
import { RectangleHorizontal, Square, RectangleVertical } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@my-better-t-app/ui/components/select"
import { Button } from "@my-better-t-app/ui/components/button"
import { Textarea } from "@my-better-t-app/ui/components/textarea"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@my-better-t-app/ui/components/card"
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@my-better-t-app/ui/components/field"
import { Input } from "@my-better-t-app/ui/components/input"
import { RadioGroup, RadioGroupItem } from "@my-better-t-app/ui/components/radio-group"
import { Label } from "@my-better-t-app/ui/components/label"

const formSchema = z.object({
    title: z
        .string()
        .min(5, "Title must be greater then 5 characters"),
    AspectRatio: z
        .enum(['16:9', '1:1', "9:16"]),
    thumbNailStyle: z
        .enum(["Bold and Graphic", "black and white"]),
    themes: z
        .enum(["sunset", "cool", "forest", "neon"]),
    optional: z
        .string()
})

const themes = [
    {
        id: "sunset",
        colors: ["#ff6b6b", "#feca57", "#ff9ff3"],
    },
    {
        id: "cool",
        colors: ["#48dbfb", "#1dd1a1", "#5f27cd"],
    },
    {
        id: "forest",
        colors: ["#10ac84", "#576574", "#1e272e"],
    },
    {
        id: "neon",
        colors: ["#f368e0", "#00d2d3", "#ff9f43"],
    },
]

export default function DashboardForm() {
    const form = useForm({
        defaultValues: {
            title: "",
            AspectRatio: "16:9",
            thumbNailStyle: "Bold and Graphic",
            themes: "sunset",
            optional: ""
        },
        validators: {
            onSubmit: formSchema,
        },

        onSubmit: async ({ value }) => {
            toast("You submitted the following values:", {
                description: (
                    <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
                        <code>{JSON.stringify(value, null, 2)}</code>
                    </pre>
                ),
                position: "bottom-right",
                classNames: {
                    content: "flex flex-col gap-2",
                },
                style: {
                    "--border-radius": "calc(var(--radius)  + 4px)",
                } as React.CSSProperties,
            })
        },
    })

    return (
        <Card className="w-full h-fit py-4 sm:max-w-md">
            <CardHeader>
                <CardTitle>Create Banner</CardTitle>
                <CardDescription>
                    Add banner details to create one.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form
                    id="bug-report-form"
                    onSubmit={(e) => {
                        e.preventDefault()
                        form.handleSubmit()
                    }}
                >
                    <FieldGroup>
                        <form.Field
                            name="title"
                            children={(field) => {
                                const isInvalid =
                                    field.state.meta.isTouched && !field.state.meta.isValid
                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>Title</FieldLabel>
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            aria-invalid={isInvalid}
                                            placeholder="Enter your banner title"
                                            autoComplete="off"
                                        />
                                        {isInvalid && (
                                            <FieldError errors={field.state.meta.errors} className="text-red-600" />
                                        )}
                                    </Field>
                                )
                            }}
                        />
                        <form.Field
                            name="AspectRatio"
                            children={(field) => {
                                return (
                                    <div>
                                        <FieldLabel className="pt-3">Aspect Ratio</FieldLabel>
                                        <RadioGroup
                                            defaultValue='16:9'
                                            name={field.name}
                                            value={field.state.value}
                                            onValueChange={(val) => field.handleChange(val as string)}
                                            className="flex flex-row w-full gap-2"
                                        >
                                            <div className="flex-1 relative">
                                                <RadioGroupItem value="16:9" id="r1" className="peer sr-only" aria-label="16:9" />
                                                <Label
                                                    htmlFor="r1"
                                                    className="flex flex-row w-full items-center justify-center gap-2 rounded-[0.5rem] border border-muted bg-transparent px-3 py-2 text-sm hover:bg-accent peer-data-checked:bg-accent peer-data-checked:border-accent peer-data-[state=checked]:bg-accent peer-data-[state=checked]:border-accent [&:has([data-state=checked])]:bg-accent [&:has([data-state=checked])]:border-accent [&:has([data-checked])]:bg-accent [&:has([data-checked])]:border-accent cursor-pointer transition-colors"
                                                >
                                                    <RectangleHorizontal className="h-4 w-4" />
                                                    <span>16:9</span>
                                                </Label>
                                            </div>
                                            <div className="flex-1 relative">
                                                <RadioGroupItem value="1:1" id="r2" className="peer sr-only" aria-label="1:1" />
                                                <Label
                                                    htmlFor="r2"
                                                    className="flex flex-row w-full items-center justify-center gap-2 rounded-[0.5rem] border border-muted bg-transparent px-3 py-2 text-sm hover:bg-accent peer-data-checked:bg-accent peer-data-checked:border-accent peer-data-[state=checked]:bg-accent peer-data-[state=checked]:border-accent [&:has([data-state=checked])]:bg-accent [&:has([data-state=checked])]:border-accent [&:has([data-checked])]:bg-accent [&:has([data-checked])]:border-accent cursor-pointer transition-colors"
                                                >
                                                    <Square className="h-4 w-4" />
                                                    <span>1:1</span>
                                                </Label>
                                            </div>
                                            <div className="flex-1 relative">
                                                <RadioGroupItem value="9:16" id="r3" className="peer sr-only" aria-label="9:16" />
                                                <Label
                                                    htmlFor="r3"
                                                    className="flex flex-row w-full items-center justify-center gap-2 rounded-[0.5rem] border border-muted bg-transparent px-3 py-2 text-sm hover:bg-accent peer-data-checked:bg-accent peer-data-checked:border-accent peer-data-[state=checked]:bg-accent peer-data-[state=checked]:border-accent [&:has([data-state=checked])]:bg-accent [&:has([data-state=checked])]:border-accent [&:has([data-checked])]:bg-accent [&:has([data-checked])]:border-accent cursor-pointer transition-colors"
                                                >
                                                    <RectangleVertical className="h-4 w-4" />
                                                    <span>9:16</span>
                                                </Label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                )
                            }}
                        />
                        <form.Field name="thumbNailStyle">
                            {(field) => (
                                <div className="space-y-3">
                                    <FieldLabel className="pt-3">Thumbnail Style</FieldLabel>

                                    <Select
                                        value={field.state.value}
                                        onValueChange={(val) => { field.handleChange(val as string) }}

                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select style" />
                                        </SelectTrigger>

                                        <SelectContent>
                                            <SelectItem value="Bold and Graphic">
                                                Bold and Graphic
                                            </SelectItem>
                                            <SelectItem value="Black and White">
                                                Black and White
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            )}
                        </form.Field>
                        <form.Field name="themes">
                            {(field) => (
                                <div>
                                    <FieldLabel>Themes</FieldLabel>

                                    <RadioGroup
                                        name={field.name}
                                        value={field.state.value}
                                        onValueChange={(val) => field.handleChange(val)}
                                        className="flex flex-wrap gap-3"
                                    >
                                        {themes.map((theme) => {
                                            const isSelected = field.state.value === theme.id
                                            return (
                                                <div key={theme.id}>
                                                    <RadioGroupItem
                                                        value={theme.id}
                                                        id={theme.id}
                                                        className="peer sr-only"
                                                    />

                                                    <Label
                                                        htmlFor={theme.id}
                                                        className={`
                                                                flex gap-1 p-1 border cursor-pointer
                                                                transition-all duration-200 hover:scale-105
                                                                ${isSelected
                                                                ? "border-primary ring-2 ring-primary/30 scale-105 shadow-sm"
                                                                : "border-muted"}
                `}
                                                    >
                                                        {theme.colors.map((color, i) => (
                                                            <span
                                                                key={i}
                                                                className="w-6 h-6"
                                                                style={{ backgroundColor: color }}
                                                            />
                                                        ))}
                                                    </Label>
                                                </div>
                                            )
                                        })}
                                    </RadioGroup>
                                </div>
                            )}
                        </form.Field>

                        <form.Field
                            name="optional"
                            children={(field) => {
                                return (
                                    <Field>
                                        <FieldLabel className="pt-3" htmlFor={field.name}>Additional Prompt (optional)</FieldLabel>
                                        <Textarea className="rounded-none p-2 h-20" placeholder="Enter your details" />

                                    </Field>
                                )
                            }}
                        />


                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter>
                <Field orientation="horizontal">
                    <Button type="submit" className={"w-full "} form={"bug-report-form"}>
                        Generate Now
                    </Button>
                </Field>
            </CardFooter>
        </Card>
    )
}
