import { Button } from "@my-better-t-app/ui/components/button";
import { Check, ChevronRight } from "lucide-react";

export default function Header() {
    return (
        <section className="relative flex flex-col items-center pt-20 pb-16 text-center lg:pt-20 lg:pb-24">
            {/* Top Pill / Badge */}
            <div className="mb-8 flex cursor-pointer items-center rounded-full border border-white/10 bg-white/5 py-1 pl-1 pr-3 shadow-md backdrop-blur-md transition-all hover:bg-white/10">
                <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    New
                </span>
                <span className="ml-3 text-sm font-medium text-gray-300">
                    Generate your first thumbnail for free
                </span>
                <ChevronRight className="ml-1 h-4 w-4 text-gray-500" />
            </div>

            {/* Main Headline */}
            <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                AI Thumbnail Generator <br className="hidden sm:block" />
                for your{" "}
                <span className="relative inline-block whitespace-nowrap rounded-xl bg-violet-600 px-4 py-1 pb-2 leading-tight text-white mt-2 sm:mt-0">
                    Videos.
                </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
                Stop wasting hours on design. Get high-converting thumbnails in seconds with our advanced AI.
            </p>

            {/* Actions / Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row w-full sm:w-auto px-4">
                <Button size={"lg"}>
                    Generate now
                </Button>
                <Button
                    variant="glass"
                    size={"lg"}
                >
                    See how it works
                </Button>
            </div>

            {/* Benefits List */}
            <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8 text-sm font-medium text-gray-400">
                <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-violet-500" />
                    <span>No design skills needed</span>
                </div>
                <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-violet-500" />
                    <span>Fast generation</span>
                </div>
                <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-violet-500" />
                    <span>High CTR templates</span>
                </div>
            </div>
        </section>
    );
}
