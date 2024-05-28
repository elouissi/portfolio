"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Select ,SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger , SelectValue } from "@/components/ui/select"
import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from "react-icons/fa";

const info = [
    {
        icon:<FaPhoneAlt/>,
        titre: 'telephone',
        description: '(+212) 7150 29272'
    },
    {
        icon:<FaEnvelope/>,
        titre: 'Email',
        description: 'youremail@gmail.com'
    },
    {
        icon:<FaMapMarkedAlt/>,
        titre: 'adresse',
        description: 'votre adresse ,votre numéro'
    },

]

import { motion } from "framer-motion";

const Contact = () =>{
    return (<motion.section initial={{ opacity: 0 }} animate={{
        opacity: 1,
        transition:{
            delay:2.4,duration:0.4,ease:"easeIn"
        }

    }} className="py-6">
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
                <div className="xl:h-[54%] order-2 xl:order-none">
                    <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                        <h3 className="text-4xl text-accent">allez nous travaillons</h3>
                        <p className="text-white/60">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae provident facilis dolores saepe optio.</p>
                        <div className="grid grid-cols md:grid-cols-2 gap-6 ">
                            <Input type="nom" placeholder="nom" />
                            <Input type="prénom" placeholder="prénom" />
                            <Input type="email" placeholder="Email" />
                            <Input type="phone" placeholder="numéro du téléphone" />
                        </div>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Selectionner un service"/> 
                            </SelectTrigger>
                            <SelectContent>
                            <SelectGroup>
                                <SelectLabel>selectionner un service</SelectLabel>
                                <SelectItem value="est">web developpement</SelectItem>
                                <SelectItem value="cst">UI / UX</SelectItem>
                                <SelectItem value="mst">Logo Design</SelectItem>
                            </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Textarea className="h-[200px]" placeholder="si vous avez un message a laissez" />
                        <Button size="md "className="w-[200px] h-[40px]">
                            Envoyez le message
                        </Button>
                    </form>
                </div>
                <div className="flex-1 flex items-center justify-center order-1 xl:oder-none mb-8 xl:mb-0">
                    <ul className="flex flex-col gap-10">
                        {info.map((item,index)=>{
                            return <li key={index} className="flex items-center gap-6">
                                <div className=" w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                    <div className="text-[28px]">{item.icon}</div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-white/60">{item.titre}</p>
                                    <h3 className="text-xl">{item.description}</h3>
                                </div>
                            </li>

                        })}
                    </ul>
                </div>
            </div>
        </div>
    </motion.section>)
}
export default Contact