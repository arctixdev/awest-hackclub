"use client";

import ParticlesThemed from "@/components/particles-themed";

export default function NextMeeting() {
    return (
        <div className="relative flex w-full h-screen flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
            <ParticlesThemed />
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                To be done.
            </span>
        </div>
    )
}