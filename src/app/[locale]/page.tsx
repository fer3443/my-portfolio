import { Button, Photo, Socials, Stats } from "@/components";
import { getTranslations } from "next-intl/server";
import { FiDownload } from "react-icons/fi";


export default async function HomePage() {
  const t = await getTranslations("HomePage");

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{t("subtitle")}</span>
            <h1 className="h1 mb-6">
              {/* Hello I&apos;m <br /> */}
              {t("title.0")} <br/>
              <span className="text-accent">{t("title.1")}</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            {t("description")}
            </p>
            {/*botones y sociales */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a href="/Fernando_Maximiliano_Arroyo.pdf" download="Fernando_Maximiliano_Arroyo.pdf">{t("downloadCv")}</a>
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
