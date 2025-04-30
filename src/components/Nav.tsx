"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LocaleSwitcher } from "./LocaleSwitcher";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];
export const Nav = () => {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      <LocaleSwitcher />
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${
            link.path === pathName && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
