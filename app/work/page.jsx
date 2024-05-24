"use client";
import { motion } from "framer-motion";
import React , { useState } from "react";
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip';
import Link from "next/link";
import Image from "next/image";
 
const projects =[
    {
        num : "01",
        category: "front-end",
        titre:"projet 1",
        description :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta nemo amet quis? Non eos, maxime tempora voluptatibus, itaque modi, reiciendis doloremque dignissimos illum vitae saepe doloribus nostrum quibusdam sit facilis. " 
    },
]
const Work = () =>{
    return (<div>Work Page</div>)
}

export default Work