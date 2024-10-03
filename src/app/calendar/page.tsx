"use client";

import Calendar from "@/components/calendar";
import ParticlesThemed from "@/components/particles-themed";

export default function NextMeeting() {
    return (
      <div className="relative flex w-full h-screen flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <ParticlesThemed />
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl lg:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Coding Club Calendar
        </span>
        <div className="lg:w-2/3 w-5/6">
          <Calendar googleCalendarId="c_86e75dd886ea28e579ee5d6de864f720144905b34a512b57b4ad4995c2d4576e@group.calendar.google.com" />
        </div>
      </div>
    );
}