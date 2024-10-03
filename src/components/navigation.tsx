import React from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, HomeIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ModeToggle from "@/components/mode-toggle";
import { Dock, DockIcon } from "@/components/ui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function NavigationDock() {
  return (
    <TooltipProvider>
      <Dock
        direction="middle"
        className="bg-background bottom-10 fixed left-1/2 transform -translate-x-1/2 z-50 opacity-90 backdrop-blur-3xl shadow-2xl"
      >
        <DockIcon key="Home">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/"
                aria-label="Home"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "size-12 rounded-full"
                )}
              >
                <HomeIcon className="size-4" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Home</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon key="Calendar">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/calendar"
                aria-label="Calendar"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "size-12 rounded-full"
                )}
              >
                <CalendarDays className="size-4" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Calendar</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon key="Next meeting">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/next"
                aria-label="Next meeting"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "size-12 rounded-full"
                )}
              >
                <ArrowRight className="size-4" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Next meeting</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon key="theme">
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Change theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </TooltipProvider>
  );
}
