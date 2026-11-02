"use client";

 import Link from "next/link";
 import Nav from "@/components/Nav"
 import MobileNav from "./MobileNav";
 import {Button } from '@/components/ui/button';
import PortfolioControls from "./PortfolioControls";
import { usePortfolio } from "./PortfolioProvider";



 const Header = () =>{
    const { t } = usePortfolio();
    return <header className="py-6 xl:py-8">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Y<span className="text-accent">.</span>Elouissi
                        </h1>
                    </Link>
                    {/* navBar descktop */}

                    <div className="hidden xl:flex items-center gap-7">
                      <Nav/>
                        <Link href="/contact">
                            <Button>{t.contact}</Button>
                        </Link>
                        <PortfolioControls/>

                    </div>


                    {/* navBar mobile */}

                    <div className="xl:hidden">
                      <MobileNav/>
                    </div>

                  

                </div>
    

           </header>
}
export default Header
