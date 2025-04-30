"use client";

import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
const services = [
  {
    num: "01",
    title: "Desarrollo Web",
    description:
      "Con más de tres años de experiencia en la creación de aplicaciones web, lading pages, ecommerce (tiendas online) y más, podemos llevar a cabo el desarrollo de tu idea, emprendimiento o marca a la web. Ya tienes tu página web y quieres un cambio? También puedo ayudarte.",
    href: "",
  },
  {
    num: "02",
    title: "UX/UI Design",
    description:
      "Con conocimientos en diseño UX/UI, mi compromiso en hacer efectivo ese mensaje que quieres transimitir con tu emprendimiento o marca, es posible. Enfocandome en soluciones adaptadas al problema planteado. 'El diseño es una forma de comunicar'",
    href: "",
  },
  // {
  //   num: "03",
  //   title: "Asistencia web.",
  //   description:
  //     "Soporte y asistencia para cada proyecto realizado. Porque el desarrollo de una aplicación web ",
  //   href: "",
  // },
  // {
  //   num: "04",
  //   title: "SEO",
  //   description:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum a quae non harum beatae dolores!",
  //   href: "",
  // },
];

export const ServicesComponent = () => {
  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col justify-center gap-6 group"
          >
            <div className="w-full flex justify-between items-center">
              <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
              <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                <BsArrowDownRight  className="text-primary text-3xl"/>
              </Link>
            </div>
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
            <p className="text-white/60">{service.description}</p>
            <div className="border-b border-white/20 w-full"/>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
