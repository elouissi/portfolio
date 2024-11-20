"use client";

import { Description } from '@radix-ui/react-dialog';
import {FaHtml5,FaCss3,FaJs, FaReact,FaFigma,FaNodeJs,FaVuejs,FaLaravel,FaBootstrap,FaGit, FaAngular} from 'react-icons/fa'
import {SiTailwindcss,SiNextdotjs, SiSpringboot } from 'react-icons/si';


const about = {
    titre: 'À propos de moi',
    Description: "Je suis un développeur full stack passionné avec une expérience en création d'applications web et mobiles. Mes compétences couvrent le développement front-end et back-end avec des technologies modernes.",
    info: [
        {
            fieldName: "Nom",
            fieldValue: "Yassine Elouissi"
        },
        {
            fieldName: "Téléphone",
            fieldValue: "(+212) 7150 29272"
        },
        {
            fieldName: "Expérience",
            fieldValue: "2 an"
        },
        {
            fieldName: "Nationalité",
            fieldValue: "Marocain"
        },
        {
            fieldName: "Email",
            fieldValue: "yassinelouissi67@gmail.com"
        },
        {
            fieldName: "Langues",
            fieldValue: "Arabe, Français, Anglais, Allemand"
        },
    ]
};

const experiance = {
    icon: 'assets/resume/badge.svg',
    titre: 'Mon expérience',
    Description: 'Voici un aperçu de mes expériences professionnelles.',
    items: [
        {
            company: "Havet Digitale",
            position: "Développeur Full Stack",
            duration: "Mai 2024 -- Juillet 2024"
        },
        {
            company: "YouCode",
            position: "Développeur PHP/React js",
            duration: "2023 -- 2024"
        },
        {
            company: "YouCode",
            position: "Développeur Java/Angular",
            duration: "2024 -- présent"
        }
    ]
};

const education = {
    icon: 'assets/resume/cap.svg',
    titre: 'Ma formation',
    Description: 'Voici un aperçu de mon parcours académique.',
    items: [
        {
            ecole: "Abou Laabass Sabeti",
            degree: "Baccalauréat en sciences",
            duration: "2022 -- 2023"
        },
        {
            ecole: "YouCode",
            degree: "Développement Web Full Stack",
            duration: "2023 -- présent"
        },
    ]
};
    const skills={
        titre:"mes skills",
        Description:'lorem uuiiu eubeoivbce cbech e cepibcpehv ch eic eh ceouhvc euuidiuized eu',
        skillList:[
            {
                icon:<FaHtml5/>,
                name:"html 5"
            },
            {
                icon:<FaCss3/>,
                name:"css 3"
            },
            {
                icon:<FaJs/>,
                name:" javescript"
            },
            {
                icon:<FaReact/>,
                name:"Reac js"
            },
            {
                icon:<FaFigma/>,
                name:"Figma "
            },
            {
                icon:<FaNodeJs/>,
                name:"Node Js"
            },
        
            {
                icon:<SiTailwindcss/>,
                name:"TailWind css"
            },
            {
                icon:<FaLaravel/>,
                name:"laravel"
            },
            {
                icon:<FaBootstrap/>,
                name:"Bootstrap"
            },
            {
                icon:<FaGit/>,
                name:"Git"
            },
            {
                icon: <FaAngular />,
                name: "Angular"
            },
            {
                icon: <SiSpringboot />,
                name: "Spring Boot JEE"
            }
        ]
    }

import {Tabs,TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs'
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip'
import { ScrollArea} from '@/components/ui/scroll-area';
import { motion} from 'framer-motion'
const Resume = () =>{

    return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:'easeIn'}}}
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
        <div>
            <Tabs
                defaultValue='experiance'
                className='flex flex-col xl:flex-row xl:w-[1220px] gap-[60px]'
            >
            <TabsList className="flex flex-col w-full max-w-[480px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger value='experiance'>Expérience</TabsTrigger>
                <TabsTrigger value='education'>Education</TabsTrigger>
                <TabsTrigger value='skills'>Skills</TabsTrigger>
                <TabsTrigger value='à propos'>à propos moi </TabsTrigger>
            </TabsList>

            <div className='min-h-[70vh] w-full'>
                <TabsContent value="experiance" >
                <div className='flex flex-col gap-[30px] text-center xl:text-left   '>
                        <h3 className='text-4xl font-bold'>{experiance.titre}</h3>
                        <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experiance.Description}</p>
                        <ScrollArea className="h-[400px]">
                            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                {experiance.items.map((item,index)=>{
                                    return(
                                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '>
                                            <span className='text-accent'>{item.duration}</span>
                                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                            <div className='flex items-center gap-3'>
                                                <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                <p className='text-white/60'>{item.company}</p>

                                            </div>
                                            
                                        </li>
                                    )
                                })}
                            </ul>
                        </ScrollArea> 
                    </div>  
                </TabsContent>
                <TabsContent value="education" className="w-full">
                <div className='flex flex-col gap-[30px] text-center xl:text-left '>
                        <h3 className='text-4xl font-bold'>{education.titre}</h3>
                        <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.Description}</p>
                        <ScrollArea className="h-[400px]">
                            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                {education.items.map((item,index)=>{
                                    return(
                                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '>
                                            <span className='text-accent'>{item.duration}</span>
                                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                            <div className='flex items-center gap-3'>
                                                <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                <p className='text-white/60'>{item.ecole}</p>

                                            </div>
                                            
                                        </li>
                                    )
                                })}
                            </ul>
                        </ScrollArea> 
                    </div>  
                </TabsContent>
                <TabsContent value="skills" className="w-full">
                    <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                        <div>
                            <h3 className='text-4xl font-bold' >{skills.titre}</h3>
                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.Description}</p>
                        </div>
                        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 '>
                            {skills.skillList.map((skill,index)=>{
                                return <li key={index} >
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center items-center'>
                                                <div className='text-6xl   hover:text-accent   transition-all duration-300'>{skill.icon}</div>
                                            </TooltipTrigger>

                                            <TooltipContent>
                                                <p className='capitalize'>{skill.name}</p>
                                            </TooltipContent>

                                        </Tooltip>

                                    </TooltipProvider>
                                </li>
                            })}
                        </ul>
                    </div>
             
                </TabsContent>
                <TabsContent value="à propos" className="w-full text-center xl:text-left">
                    <div className='flex flex-col gap-[30px]'>
                        <h3 className='text-4xl font-bold'>{about.titre}</h3>
                        <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.Description}</p>
                        <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                            {about.info.map((item,index)=>{
                                return <li key={index}>
                                    <span className='text-white/60'>{item.fieldName}</span>
                                    <span className='text-xl'>  {item.fieldValue}</span>

                                </li>
                            })}
                        </ul>
                    </div>
             
                </TabsContent>
            </div>
            </Tabs>
        </div>
 
    </motion.div>
    )
}
export default Resume