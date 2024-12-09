import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header, PageTransition, StairTransition, Toaster } from "@/components";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Fer A. | Full Stack Developer",
    default: "Fer A. | Full Stack Developer",
  },
  icons: {
    icon: "/favicon.png", // Ruta del favicon
    shortcut: "/favicon.png", // Para navegadores que usan el tipo "shortcut icon"
    apple: "/favicon.png", // Icono para dispositivos Apple si es necesario
  },
  description:
    "Soy Fernando Arroyo, desarrollador full stack especializado en MERN. Apasionado por crear experiencias de usuario únicas y soluciones web escalables.",
  authors: {
    name: "Fernando Arroyo Rodriguez",
  },
  keywords: [
    "Desarrollador web",
    "Web Developer",
    "Full Stack",
    "MERN",
    "React",
    "Node.js",
    "MongoDB",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Fernando Arroyo | Desarrollador Full Stack",
    description: 
      "Soy Fernando Arroyo, desarrollador full stack con experiencia en tecnologías modernas como React, Node.js, Next.js y MongoDB. Explora mi trabajo y proyectos.",
    url: "https://my-portfolio-fer-arroyo.vercel.app/",
    siteName: "Fernando Arroyo Portfolio",
    images: [
      {
        url: "https://my-portfolio-fer-arroyo.vercel.app/FALOGO.png",
        width: 1200,
        height: 630,
        alt: "Vista previa de Fernando Arroyo Portfolio",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Toaster />
      </body>
    </html>
  );
}
