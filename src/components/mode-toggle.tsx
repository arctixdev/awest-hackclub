'use client';

import { Sun } from "lucide-react";
import { Toggle } from "./ui/toggle";

export default function ModeToggle() {
    return (
        <Toggle
        aria-label="Toggle dark mode"
        className="rounded-full"
        onChange={() => {}}
        >
            <Sun className="size-4" />
        </Toggle>
    );
}