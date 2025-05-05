"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LocaleSwitcher } from "./LocaleSwitcher";

export const Nav = ({locale}:{locale:'es' |'en'}) => {
  const pathName = usePathname();
  const links = [
    { name_es: "Home" ,name_en: "home", path: `/${locale}` },
    { name_es: "Servicios" ,name_en: "services", path: `/${locale}/services` },
    { name_es: "Resumen" ,name_en: "resume", path: `/${locale}/resume` },
    { name_es: "Trabajos" ,name_en: "work", path: `/${locale}/work` },
    { name_es: "Contacto" ,name_en: "contact", path: `/${locale}/contact` },
  ];
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
          {locale === 'es' ? link.name_es : link.name_en}
        </Link>
      ))}
    </nav>
  );
};
