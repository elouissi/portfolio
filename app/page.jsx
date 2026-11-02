
"use client";

import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";

//component
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { usePortfolio } from "@/components/PortfolioProvider";

export default function Home() {
  const { t } = usePortfolio();


  return(
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none " >
              <span className="text-xl text-accent">{t.role}</span>
              <h1 className="h1 mb-6 mt-3">
                  {t.greeting} <br/> <span className="text-accent">Yassine Elouissi</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
  {t.intro}
</p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a href="/assets/PDF/cv_laravel.pdf" download className="uppercase flex items-center gap-2">
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <span>{t.cv}</span>
                <FiDownload className="text-xl" />
              </Button>
            </a>
                <div className="mb-8 xl:mb-0">
                  <Social containerStyles="flex gap-6 " iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
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
  ) 
}
