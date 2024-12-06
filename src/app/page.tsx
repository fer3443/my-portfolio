import { Button, Photo, Socials, Stats } from "@/components";
import { FiDownload } from "react-icons/fi";


export default function HomePage() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full Stack Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Fernando Arroyo</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            With a strong focus on front-end development and a deep interest in UX/UI design, I am passionate about transforming ideas into functional and engaging digital experiences. I work with technologies such as React, Next.js, and TypeScript. I am always eager to learn and grow, taking every project to the next level. Explore my work and get to know more about me!
            </p>
            {/*botones y sociales */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a href="/Fernando_Arroyo_Rodriguez-Cv.pdf" download="Fernando_Arroyo_CV.pdf">Download CV</a>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
          <Stats/>
      </div>
    </section>
  );
}
