import ParticlesThemed from "@/components/particles-themed"
import moment from "moment"

export default function NextMeeting() {
    const date = "Oct 3 2024 2:40 GMT-0600";

    return (
        <div className="relative flex w-full h-screen flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
            <ParticlesThemed />
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl lg:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                Next meeting
            </span>
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-blue-400 to-purple-300 bg-clip-text text-center text-3xl lg:text-8xl font-black leading-none text-transparent dark:from-blue-200 dark:to-purple-600">
                {moment(date).format("dddd MMMM Do")} during access
            </span>
            <span className="pointer-events-none whitespace-pre-wrap font-semibold text-xl">
                {moment(date).calendar()} - {moment(date).fromNow()}
            </span>
        </div>
    )
}