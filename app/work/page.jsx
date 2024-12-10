"use client";
import { motion } from "framer-motion";
import React , { useState } from "react";
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip';
import Link from "next/link";
import Image from "next/image";
import { Item } from "@radix-ui/react-select";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Importez le fichier CSS de Swiper
import WorkSliderBtns from "@/components/WorkSliderBtns"

 
const projects =[
    {
        num : "001",
        category: "peoplePerTask",
        titre:"peoplePerTask",
        description :" 'PeoplePerTask' est un projet de commerce électronique axé sur la prestation de services entre particuliers. L'objectif principal de la plateforme est de permettre aux utilisateurs de proposer des tâches ou des services à effectuer, et aux autres utilisateurs de rechercher, réserver et payer pour ces services." ,
        stack:[{name:"Html 5"},{name:"css 3"},{name:"java script"},{name:"tailWind css"}],
        image:"/assets/work/peoplePertask.png",
        live:"",
        github:"https://github.com/elouissi/Free_lance_site_web_PeoplePerTask",
    },
    {
        num : "002",
        category: "You Wiki",
        titre:"You Wiki",
        description :"Le projet de gestion des wikis, similaire à Wikipedia, vise à créer une plateforme collaborative où les utilisateurs peuvent créer, modifier et organiser des articles sur une variété de sujets. L'objectif principal est de permettre aux utilisateurs de partager des connaissances et d'enrichir les contenus de manière collaborative " ,
        stack:[{name:"Html 5"},{name:"css 3"},{name:"java script"},{name:"laravel"},{name:"ajax"},{name:"blade"}],
        image:"/assets/work/chrih.jpg",
        live:"",
        github:"",
    },
    {
        num : "003",
        category: "Stadium Stream",
        titre:"projet 3",
        description :"StadiumStream est un projet de site web de vente de billets pour la Coupe d'Afrique des Nations 2023. Le site offre aux fans de football la possibilité d'acheter des billets pour les matchs de leur choix, en ligne Le design du site est moderne et attrayant, avec des couleurs vives et des images dynamiques des stades et des équipes participant à la compétition. L'interface utilisateur est conviviale, avec des options de recherche intuitives pour trouver facilement les matchs, les dates et les stades.Les utilisateurs peuvent créer un compte pour gérer leurs achats de billets et recevoir des notifications sur les matchs à venir. Le site propose également des informations sur les équipes, les joueurs et les stades, ainsi que des articles et des analyses sur la compétition. " ,
        stack:[{name:"laravel"},{name:"css 3"},{name:"java script"}],
        image:"/assets/work/stadiumstream.jpg",
        live:"",
        github:"",
    },
    {
        num : "004",
        category: "Caliharbor",
        titre:"projet 4",
        description :"'CALIHARBOR' offre aux fans de calisthenics la possibilité de créer un programme personnalisé, incluant les détails des exercices, les répétitions et les séries. Le site propose également un filtre permettant de personnaliser les programmes en fonction de l'âge, du nombre d'entraînements par jour, etc. De plus, il offre des programmes alimentaires adaptés aux revenus hebdomadaires des utilisateurs, ainsi que des inspirations et des sources de motivation dans ce domaine. " ,
        stack:[{name:"laravel"},{name:"Bootstrap 3"},{name:"java script"}],
        image:"/assets/work/caliharbor.png",
        live:"",
        github:"",
    },
    {
        num : "005",
        category: "Citronix",
        titre:"projet 5",
        description :"Le projet Citronix est une application de gestion conçue pour les exploitations agricoles spécialisées dans la culture des citrons. Il vise à optimiser la gestion des fermes en offrant des outils pour suivre la production, la récolte, et la vente des produits. Cette application permet également aux agriculteurs de suivre la productivité de leurs arbres en fonction de leur âge et d'assurer une meilleure rentabilité de leurs exploitations. " ,
        stack:[{name:"Spring Boot"},{name:"Java"}],
        image:"/assets/work/citronix.png",
        live:"",
        github:"",
    }
]
const Work = () =>{
    const [project, setProject] = useState(projects[0])
    const handleSlideChange = (Swiper) =>{
        const currentIndex = Swiper.activeIndex;

        setProject(projects[currentIndex])
    }
    return (
    <motion.section initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"}}} className="min-h-[88vh] flex flex-col justify-center py-12 xl:px-0">   
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px] h-[50%]">
                        <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                            {project.num}
                        </div>
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                            {project.category}  
                        </h2>
                        <p className="text-white/60">
                            {project.description}
                        </p>
                        <ul className="flex gap-4">
                            {project.stack.map((item, index)=>{
                                return(  <li class  Name="text-xl text-red text-accent" key={index}>
                                            {item.name}
                                            {index !== project.stack.length -1 && ","}
                                        </li>
                                      ) 
                            })}
                        </ul>

                        <div className="border border-white/20"></div>
                        <div className="flex items-center gap-4"> 
                            <Link href={project.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                            <Link href={project.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>github repository                                           
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                       
                        </div>

                    </div>
                    
                </div>
                <div className="w-full xl:w-[50%]">
                                <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                                    {projects.map((project, index)=>{
                                        return <SwiperSlide key={index} className="w-full">
                                            <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                                <div className="relative w-full h-full">
                                                    <Image   src={project.image} fill className="object-cover" alt="" />

                                                 
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    })}
                                     <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>

                                </Swiper>
                                 
                </div>
            </div>
        </div>
    </motion.section>
    )
}

export default Work