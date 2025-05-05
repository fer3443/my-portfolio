"use client";

import {
  LocaleSwitcher,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components";
import { RiMenu3Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";

import { useState } from "react";
import Link from "next/link";

export const MobileNav = ({locale}:{locale:'es' |'en'}) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const pathname = usePathname();
  const links = [
    { name_es: "Home" ,name_en: "home", path: `/${locale}` },
    { name_es: "Servicios" ,name_en: "services", path: `/${locale}/services` },
    { name_es: "Resumen" ,name_en: "resume", path: `/${locale}/resume` },
    { name_es: "Trabajos" ,name_en: "work", path: `/${locale}/work` },
    { name_es: "Contacto" ,name_en: "contact", path: `/${locale}/contact` },
  ];
  return (
    <Sheet open={toggle} onOpenChange={(open) => setToggle(open)}>
      <SheetTrigger className="flex justify-center items-center">
        <RiMenu3Fill className="text-[2rem] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle className="my-28 text-center text-2xl">
          <Link href="/" onClick={() => setToggle(false)}>
            <h1 className="text-4xl font-semibold text-white">
              Fer <span className="text-accent">A.</span>
            </h1>
          </Link>
        </SheetTitle>
        <SheetDescription aria-label="hidden"></SheetDescription>
        <nav className="flex flex-col items-center gap-4 h-sreen">
          <LocaleSwitcher mobile={true} />
          {links.map((link, index) => (
            <Link
              onClick={() => setToggle(false)}
              key={index}
              href={link.path}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              }text-xl capitalize hover:text-accent transition-all`}
            >
              {locale === "es" ? link.name_es : link.name_en}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
