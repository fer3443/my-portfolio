import Link from "next/link";
import { Nav } from "./Nav";
import { Button } from "./ui/button";
import { MobileNav } from "./MobileNav";

export const Header = ({locale}:{locale:'es'|'en'}) => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Fer<span className="text-accent"> A.</span>
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav locale={locale}/>
          <Link href={`/${locale}/contact`}>
            <Button>{locale === 'es' ? 'Conctactame' :  'Contact me'}</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav locale={locale}/>
        </div>
      </div>
    </header>
  );
};
