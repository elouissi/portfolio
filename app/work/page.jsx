"use client";
import { motion } from "framer-motion";
import React , { useRef, useState } from "react";
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip';
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Importez le fichier CSS de Swiper
import WorkSliderBtns from "@/components/WorkSliderBtns"
import { usePortfolio } from '@/components/PortfolioProvider'

 
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
const projectTranslations = {
    fr: { '001': { category: 'PeoplePerTask', description: "Plateforme de services entre particuliers pour proposer, rechercher, réserver et payer des tâches." }, '002': { category: 'You Wiki', description: 'Plateforme collaborative de création, modification et organisation d’articles.' }, '003': { category: 'Stadium Stream', description: 'Site de vente de billets pour la Coupe d’Afrique des Nations 2023.' }, '004': { category: 'Caliharbor', description: 'Programmes personnalisés de calisthenics et de nutrition adaptés à chaque utilisateur.' }, '005': { category: 'Citronix', description: 'Application de gestion pour optimiser la production, la récolte et la vente des exploitations agricoles.' } },
    en: { '001': { category: 'PeoplePerTask', description: 'A peer-to-peer services platform to offer, find, book and pay for tasks.' }, '002': { category: 'You Wiki', description: 'A collaborative platform for creating, editing and organizing knowledge articles.' }, '003': { category: 'Stadium Stream', description: 'A ticketing website for the 2023 Africa Cup of Nations.' }, '004': { category: 'Caliharbor', description: 'Personalized calisthenics and nutrition programs tailored to every user.' }, '005': { category: 'Citronix', description: 'A management application that optimizes farm production, harvest and sales.' } },
    ar: { '001': { category: 'PeoplePerTask', description: 'منصة خدمات بين الأفراد لعرض المهام والبحث عنها وحجزها وأدائها.' }, '002': { category: 'You Wiki', description: 'منصة تعاونية لإنشاء المقالات وتعديلها وتنظيم المعرفة.' }, '003': { category: 'Stadium Stream', description: 'موقع لبيع تذاكر كأس أمم إفريقيا 2023.' }, '004': { category: 'Caliharbor', description: 'برامج مخصصة للكاليستينيكس والتغذية تناسب كل مستخدم.' }, '005': { category: 'Citronix', description: 'تطبيق لإدارة المزارع وتحسين الإنتاج والحصاد والمبيعات.' } }
};

const Work = () =>{
    const { t, language } = usePortfolio()
    const swiperRef = useRef(null)
    const [project, setProject] = useState(projects[0])
    const localizedProject = projectTranslations[language]?.[project.num] || projectTranslations.fr[project.num]
    const handleSlideChange = (swiper) =>{
        const currentIndex = swiper.realIndex ?? swiper.activeIndex;
        setProject(projects[currentIndex])
    }
    return (
    <motion.section initial={{opacity:0, y:18}} animate={{opacity:1, y:0, transition:{delay:0.15,duration:0.55,ease:"easeOut"}}} className="min-h-[88vh] flex flex-col justify-center py-12 xl:px-0">   
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px] h-[50%]">
                        <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                            {project.num}
                        </div>
                        <h2 className="text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                            {localizedProject.category}
                        </h2>
                        <p className="text-[15px] leading-relaxed opacity-70">
                            {localizedProject.description}
                        </p>
                        <ul className="flex gap-4">
                            {project.stack.map((item, index)=>{
                                return(  <li className="text-xl text-accent" key={index}>
                                            {item.name}
                                            {index !== project.stack.length -1 && ","}
                                        </li>
                                      ) 
                            })}
                        </ul>

                        <div className="border border-[rgb(var(--line))]"></div>
                        <div className="flex items-center gap-4"> 
                            <Link href={project.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full theme-icon-button flex justify-center items-center group">
                                                <BsArrowUpRight className="text-[rgb(var(--foreground))] text-3xl group-hover:text-accent"/>
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
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full theme-icon-button flex justify-center items-center group">
                                                <BsGithub className="text-[rgb(var(--foreground))] text-3xl group-hover:text-accent"/>
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
                                <Swiper spaceBetween={18} slidesPerView={1} loop className="xl:h-[520px] mb-5" onSwiper={(swiper) => { swiperRef.current = swiper }} onSlideChange={handleSlideChange}>
                                    {projects.map((project, index)=>{
                                        return <SwiperSlide key={index} className="w-full">
                                            <div className="h-[460px] relative group flex justify-center items-center surface-card overflow-hidden">
                                                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                                <div className="relative w-full h-full">
                                                    <Image src={project.image} fill className="w-full object-cover transition-transform duration-700 group-hover:scale-105" alt={`Aperçu du projet ${localizedProject.category}`} />

                                                 
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    })}
                                    <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50_-_22px)] xl:bottom-0 z-20 w-full justufy-between xl:w-max xl:justify-none "btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                                </Swiper>
                                <div className="grid grid-cols-5 gap-2">
                                    {projects.map((item, index) => (
                                        <button key={item.num} onClick={() => { setProject(item); swiperRef.current?.slideToLoop(index) }} type="button" className={`group relative aspect-[4/3] overflow-hidden rounded-lg border-2 transition-all ${item.num === project.num ? "border-accent opacity-100" : "border-transparent opacity-55 hover:opacity-100"}`} aria-label={`Afficher ${item.category}`}>
                                            <Image src={item.image} fill className="object-cover transition-transform duration-500 group-hover:scale-110" alt="" />
                                        </button>
                                    ))}
                                </div>
                </div>
            </div>
        </div>
    </motion.section>
    )
}

export default Work
