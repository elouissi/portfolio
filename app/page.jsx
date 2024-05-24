
import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";

//component
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";

export default function Home() {
  return(
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none " >
              <span className="text-xl">développeur full stack</span>
              <h1 className="h1 mb-6">
                Bonjour je suis <br/> <span className="text-accent">Yassine Elouissi</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">j'excelle dans la création d'expériences numériques élégantes et je maîtrise divers langages et technologies de programmation</p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Telecharger  CV</span>
                  <FiDownload className="text-xl"/>
                </Button>
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
