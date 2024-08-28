/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bG0fBKl4c31
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cpu, History, Store } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-[#111827] py-6 px-4 md:px-6">
        <div className="container flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            {/* <BadgeIcon className="h-8 w-8 text-[#ff4655]" /> */}
            <span className="text-xl font-bold text-white">VALLAYF</span>
          </Link>
          <Button className="hidden md:inline-flex bg-white text-black hover:bg-zinc-500">
            Download
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-[#111827] py-12 md:py-24 lg:py-32">
          <div className="container grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Take your VALORANT experience to the next level with VALLAYF
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                See your information quickly and everywhere without entering the
                game with VALLAYF
              </p>
              <div className="flex justify-center md:justify-start">
                <Button className="hidden md:inline-flex bg-white text-black hover:bg-zinc-500 px-8">
                  COMING SOON TO PLAYSTORE AND APPSTORE
                </Button>
              </div>
            </div>
            <div className="flex items-center w-full justify-center">
              <Image
                src="/mockup1.png"
                width={400}
                height={400}
                alt="VALORANT"
                className="max-w-[400px] md:max-w-full rounded-lg"
              />
            </div>
          </div>
        </section>
        <section className="bg-[#1c2b42] py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col justify-center items-center ">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Key Features
              </h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                Discover VALLAYF&apos;s unique capabilities and features.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-8">
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-[#111827]">
                <Cpu className="h-12 w-12 text-[#ff4655]" />
                <h3 className="text-lg font-bold text-white">
                  Unique experience
                </h3>
                <p className="text-muted-foreground text-center">
                  Use quickly and securely with next generation technologies.
                </p>
              </div>

              
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-[#111827]">
                <History className="h-12 w-12 text-[#ff4655]" />
                <h3 className="text-lg font-bold text-white">
                  Your Game History
                </h3>
                <p className="text-muted-foreground text-center">
                  Quickly see your past matches played in a season.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#111827] py-12 md:py-24 lg:py-32">
          <div className="container items-center justify-center w-full">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Screenshots
              </h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                Say hello to VALLAYF&apos;s interface!
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 mt-8 items-center justify-center w-full">
              <ImageDisplay src="/Shot.png" alt="VALORANT Screenshot 1" />
              <ImageDisplay src="/Shot1.png" alt="VALORANT Screenshot 2" />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#1c2b42] py-6 px-4 md:px-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 Grkn.dev | All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://x.com/grkndev"
              target="_blank"
              className="text-muted-foreground hover:text-white"
              prefetch={false}
            >
              <TwitterIcon className="h-6 w-6" />
            </Link>

            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-white"
              prefetch={false}
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-white"
              prefetch={false}
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
function ImageDisplay({ src, alt }: { src: string; alt: string }) {
  return (
    <Dialog>
      <DialogTrigger>
        <Image
          src={src}
          width={400}
          height={225}
          alt={alt}
          className="rounded-lg w-full"
        />
      </DialogTrigger>
      <DialogContent className="flex w-full  ">
        <DialogTitle className="hidden">{alt}</DialogTitle>
        <DialogDescription className="hidden">
          VALORANT Screenshot
        </DialogDescription>
        <Image
          width={1600}
          height={1200}
          alt={alt}
          src={src}
          className="w-full"
        />
      </DialogContent>
    </Dialog>
  );
}

function TwitterIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
