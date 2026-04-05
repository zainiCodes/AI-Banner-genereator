import { cn } from "@my-better-t-app/ui/lib/utils"

function AspectRatio({
  ratio,
  className,
  ...props
}: React.ComponentProps<"div"> & { ratio: number }) {
  return (
    <div
      data-slot="aspect-ratio"
      style={{ aspectRatio: ratio }}
      className={cn("relative", className)}
      {...props}
    />
  )
}

export { AspectRatio }
