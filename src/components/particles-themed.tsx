"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Particles from "./ui/particles";

export default function ParticlesThemed() {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");
    
    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);
    
    
    return (
        <Particles
            className="absolute inset-0"
            quantity={200}
            ease={80}
            color={color}
            refresh
        />
    )
}