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
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

export const MobileNav = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const pathname = usePathname();
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
          <LocaleSwitcher mobile={true}/>
          {links.map((link, index) => (
            <Link
              onClick={() => setToggle(false)}
              key={index}
              href={link.path}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              }text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
