 "use client";
 import Link from "next/link";
 import { usePathname } from "next/navigation"
 import { usePortfolio } from "./PortfolioProvider";

const links =[
    {
        name:"home",
        path:"/",
    },
    {
        name:"services",
        path:"/services",
    },
   
    {
        name:"resumé",
        path:"/resume",
    },
    {
        name:"projects",
        path:"/work",
    },
  
]

const Nav = ()=>{
    const pathname = usePathname();
    const { t } = usePortfolio();
    const labels = { home: t.home, services: t.services, 'resumé': t.resume, projects: t.projects };
    return  ( <nav className="flex gap-8">
        {
            links.map((link,index)=>{
                return(
                    <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transation-all`}>
                        {labels[link.name] || link.name}
                    </Link>
                )
            })
        }
  
        </nav>)
}

export default Nav
