"use client";

import { Description } from '@radix-ui/react-dialog';
import {FaHtml5,FaCss3,FaJs, FaReact,FaFigma,FaNodeJs,FaVuejs} from 'react-icons/fa'
import {SiTailwindcss,SiNextdotjs } from 'react-icons/si';

const about ={
    titre:'About me',
    Description:"lorem uuiiu eubeoivbce cbech e cepibcpehv ch eic eh ceouhvc euuidiuized eu",
    info:[
        {
            fieldName:"Name",
            fieldValue:"yassine elouissi"
        },
        {
            fieldName:"télèphone",
            fieldValue:"(+212) 7150 29272"
        },
        {
            fieldName:"éxperiance",
            fieldValue:"une année"
        },
        {
            fieldName:"Nationality",
            fieldValue:"marrocain"
        },
        {
            fieldName:"Email",
            fieldValue:"yassinelouissi67@gmail.com"
        },
        {
            fieldName:"Language",
            fieldValue:"arabe, francais, anglais, allemand"
        },
    ]
}
const experiance={
    icon:'assets/resume/badge.svg',
    titre:'Ma experiance',
    Description:'lorem uuiiu eubeoivbce cbech e cepibcpehv ch eic eh ceouhvc euuidiuized eu',
    items:[
        {
            company:"Havet digitale",
            position:"Full stack developer ",
            duration:"2024/05 -- present"
        },
        {
            company:"youcode",
            position:"Full stack developer ",
            duration:"2023 -- 2024"
        },
    ]

}
const education={
    icon:'assets/resume/cap.svg',
    titre:'Ma education',
    Description:'lorem uuiiu eubeoivbce cbech e cepibcpehv ch eic eh ceouhvc euuidiuized eu',
    items:[
        {
            ecole:"Abou laabass sabeti",
            degree:"baccalauréat ",
            duration:"2022-- 2023"
        },
        {
            ecole:"Youcode",
            degree:"Full stack Web Developement ",
            duration:"2023-- 2024"
        },
    ]

}
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
            icon:<FaVuejs/>,
            name:"Vue Js"
        },
        {
            icon:<SiTailwindcss/>,
            name:"TailWind css"
        },
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
                <TabsTrigger value='experiance'>Experiance</TabsTrigger>
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