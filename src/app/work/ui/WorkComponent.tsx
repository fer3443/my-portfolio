"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
  WorkSliderBtns,
} from "@/components";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Movil Renta",
    description:
      "Participe como desarrollador Frontend en la aplicación Movil Renta, un sitio enfacado en la renta de automoviles mediante reservas, con la integracion de Payway para el pago del servicio.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Typescript" },{ name: "Zustand"}],
    image: "/mockup-rentacar.png",
    live: "https://renta-car-ten.vercel.app/",
    github: "",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "Comic Store",
    description:
      "En este proyecto participe tanto en el desarrollo Frontend, como Backend. Para la UI utilizamos componentes provistos por shadcn junto a tailwind y la incorporacion de MercadoPago para efectuar la compra de productos. Mi tareas como backender fueron realizar el crud de autenticación del usuario, con JWT, hasheo de informacion mediante bcrypt y el uso de cookies.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Shadcn" }, {name: "MongoDb"}, {name: "Zustand"}],
    image: "/mockup-rentacar.png",
    live: "/",
    github: "",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Arroyo Shop",
    description:
      "Tienda online, creada a partir del diseño de Tesla - Shop, como practica para el aprendizaje y perfeccionamiento de Next.js, con gran cantidad de componentes generados como server side, incorporacion de PayPal y zustand como gestor de estado global. Con Next Auth para la creacion y autenticacion de usuarios. Uso de ORM Prisma y como base de datos PostgresSQL.",
    stack: [{ name: "Next.js" }, {name: "Zustand"},{name:"Prisma"},{name:"PostgresSql"}],
    image: "/mockup-rentacar.png",
    live: "/",
    github: "https://github.com/fer3443/arroyo-shop",
  },
];

export const WorkComponent = () => {
  const [project, setProject] = React.useState(projects[0]);

  const handleSlideChange = (swiper: SwiperObject) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title} - {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/*border */}
              <div className="border border-white/20" />
              {/*buttons */}
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project*/}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay*/}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10" />
                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt="image"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
