'use client';

import { Sun, Moon } from "lucide-react";
import { Toggle } from "./ui/toggle";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function ModeToggle() {
    const [mode, setMode] = useState<"light" | "dark">("light");
    const { setTheme } = useTheme();

    function changeTheme() {
        if (mode === "light") {
            console.log("dark");
            setTheme("dark");
            setMode("dark");
        } else {
            console.log("light");
            setTheme("light");
            setMode("light");
        }
    }

    return (
        <Toggle
            aria-label="Toggle dark mode"
            className="rounded-full"
            onPressedChange={changeTheme}
        >
            {mode === "light" ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </Toggle>
    );
}