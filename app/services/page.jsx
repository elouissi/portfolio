"use client";

import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";
const services = [
    {
        num: "01",
        titre: "Développement Web",
        Description: "Création de sites vitrines, blogs, sites e-commerce et applications web en utilisant des technologies modernes comme Laravel, Spring Boot, React.js et Next.js.",
        href: "https://elouissi.vercel.app/work"
    },
    {
        num: "02",
        titre: "UI/UX Design",
        Description: "Design d'interfaces utilisateur modernes et intuitives avec une attention particulière à l'expérience utilisateur, en utilisant des outils comme Figma et Bootstrap, Tailwind.",
        href: "https://elouissi.vercel.app/work"
    },
    {
        num: "03",
        titre: "Développement Back-End",
        Description: "Conception et implémentation de back-ends robustes et sécurisés avec Laravel, Spring Boot, JEE, PostgreSQL et PHP, intégrant des APIs RESTful et des fonctionnalités avancées.",
        href: "https://elouissi.vercel.app/work"
    },
    {
        num: "04",
        titre: "Développement Front-End",
        Description: "Création de front-ends dynamiques et réactifs avec React.js, Next.js, Tailwind CSS et JavaScript, offrant des expériences utilisateur engageantes.",
        href: "https://elouissi.vercel.app/work"
    }
];


import { motion } from "framer-motion"

const Services = () =>{
    return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
            <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"}}}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
            >
                {services.map((service,index)=>{
                    return (<div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                   <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover  transition-all duration-500" >
                        {service.num}
                    </div>
                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                        <BsArrowDownRight className="text-primary text-3xl"/>
                    </Link>
                   </div>
                   <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.titre}</h2>
                   <p className="text-white/60">{service.Description}</p>
                   <div className="border-b border-white/20 w-full"></div>

                    </div>)
                })}
                
            </motion.div>
        </div>
    </section>
    )
}
export default Services