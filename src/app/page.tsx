import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { AnimatedList } from "@/components/ui/animated-list";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import IconCloud from "@/components/ui/icon-cloud";
import { MagicCard } from "@/components/ui/magic-card";
import TypingAnimation from "@/components/ui/typing-animation";
import { cn } from "@/lib/utils";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];


let notifications = [
  {
    name: "Onboard",
    description: "Design your own PCB, get 100$ to manifacture them.",
    icon: "📗",
    color: "green",
  },
  {
    name: "Hackboard",
    description: "Design your own custom keyboard. Get all the parts for free",
    icon: "⌨️",
    color: "red",
  },
  {
    name: "The Bin",
    description:
      "Design cool electronics using random parts",
    icon: "🔌",
    color: "gray",
  },
  {
    name: "Blot",
    description:
      "Draw art using code, get a free drawing machine.",
    icon: "✏️",
    color: "yellow",
  },
  {
    name: "Boba Drops",
    description: "Build a website get free boba.",
    icon: "🧋",
    color: "brown",
  },
  {
    name: "Sprig",
    description: "Make a game, get a free game console.",
    icon: "🎮",
    color: "green",
  },
];


notifications = Array.from({ length: 10 }, () => notifications).flat();

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
}

const Notification = ({ name, description, icon, color }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className={`flex size-10 items-center justify-center rounded-2xl bg-${color}-500`}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function Home() {
  return (
  <div className="overflow-hidden">
      <div className="relative flex h-screen w-full items-center justify-center overflow-x-hidden bg-background p-20">
        <div className="overflow-hidden">
                <AnimatedGridPattern
        numSquares={50}
        maxOpacity={0.2}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(750px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-50%] h-[200%] skew-y-12 overflow-hidden",
        )}
    />
        </div>
    <div className="gap-6 flex flex-col w-3/4 h-fit">
          <div className="flex flex-row gap-6 flex-wrap min-[1070px]:flex-nowrap items-stretch self-stretch">
            <div className="rounded-[29px] md:min-w-[660px] self-stretch ">
              <MagicCard
                className="flex justify-between rounded-[29px] flex-col p-7 gap-4 h-80 bg-[#FFF9F9]"
                gradientColor="#FFE9E9"
              >
                <TypingAnimation
                  className="text-4xl lg:text-5xl text-[#EC3750] font-bold text-left"
                  text="We are teen coders from Arvada West High School"
                  duration={50}
                />

                <p className="py-4 mr-12 text-lg">
                  Whether you’re a beginner programmer or have years of
                  experience, there’s a place for you at the Coding Club!.
                </p>
                <div className="flex justify-end w-full items-center space-x-4 pt-8 xl:pt-0">
                  <AnimatedShinyText className="text-[#EC3750] w-full flex justify-end ">
                    <span>Are you ready?</span>
                  </AnimatedShinyText>
                  <a
                    href="https://classroom.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="px-4 py-3 bg-[#EC3750] text-white text-lg font-semibold rounded-2xl">
                      Join the Google Classroom (TBD)
                    </Button>
                  </a>
                </div>
              </MagicCard>
            </div>

            <div className="rounded-[29px] md:min-w-[300px] self-stretch flex grow ">
              <MagicCard
                className="flex justify-between rounded-[29px] flex-col p-7 gap-4 bg-[#F5F8FF] h-80"
                gradientColor="#E7EEFF"
              >
                <h1 className="text-3xl lg:text-4xl text-[#224597] font-bold text-left">
                  Benifits!
                </h1>

                <p className="py-4 xl:mr-12 text-lg">
                  As a coding club you enjoy lots of free benifits! This includes: Stickers, Servers, Brilliant premium, Figma premium, Snacks, boba, PCB&apos;s & Game consoles
                </p>
                <div className="flex justify-between w-full items-end space-x-4">

                </div>
              </MagicCard>
            </div>
          </div>

          <div className="flex flex-row gap-6 flex-wrap min-[1070px]:flex-nowrap items-stretch self-stretch">
            <div className="rounded-[29px] md:min-w-[300px] self-stretch grow flex">
              <MagicCard
                className="flex justify-between rounded-[29px] flex-col p-7 gap-4 bg-[#ffffff] h-80"
                gradientColor="#F5F5F5"
              >
                <h1 className="text-3xl lg:text-4xl text-[#000000] font-bold text-left">
                  Code in any platform
                </h1>
                <div className="w-full flex items-center justify-center">
                  <div className=" max-h-80 max-w-80 flex">
                    <IconCloud iconSlugs={slugs} />
                  </div>
                </div>
              </MagicCard>
            </div>

            <div className="rounded-[29px] md:min-w-[300px] self-stretch grow flex">
              <MagicCard
                className="flex justify-between rounded-[29px] flex-col p-7 gap-4 bg-[#ffffff] h-80"
                gradientColor="#F5F5F5"
              >
                <h1 className="text-3xl lg:text-4xl text-[#000000] font-bold text-left">
                  Coding Fun
                </h1>

                <div
                  className={cn(
                    "relative flex h-[500px] w-full flex-col pt-6 px-0.5 items-center"
                  )}
                >
                  <AnimatedList delay={2000}>
                    {notifications.map((item, idx) => (
                      <Notification {...item} key={idx} />
                    ))}
                  </AnimatedList>
                </div>
              </MagicCard>
            </div>

            <div className="rounded-[29px] md:min-w-[300px] self-stretch flex grow">
              <MagicCard
                className="flex justify-between rounded-[29px] flex-col p-7 gap-4 bg-[#FCF4FD] mb-20 md:mb-0"
                gradientColor="#FCE4FF"
              >
                <h1 className="text-3xl lg:text-4xl text-[#742294] font-bold text-left">
                  Come to our next meeting
                </h1>

                <p className="py-4 xl:mr-12 text-lg">
              August 3rd at 3:30 PM in N134
              We&apos;ll be learning to make cool websites, no expereince neccesarry! Earn free boba tea when you finish the website :)
                </p>
                

                {/* <div className="flex justify-between w-full items-end space-x-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://lu.ma/wa1983u9"
                  >
                    <Button className="px-4 py-3 bg-white hover:bg-slate-50 hover:text-black text-[#742294] border-[0.5px] border-[#D8DEEF] text-lg font-semibold rounded-2xl">
                      RSVP
                    </Button>
                  </a>
                </div> */}
              </MagicCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
