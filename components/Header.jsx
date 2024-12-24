 import Link from "next/link";
 import Nav from "@/components/Nav"
 import MobileNav from "./MobileNav";
 import {Button } from '@/components/ui/button';



 const Header = () =>{

    return <header className="py-8 xl:py-12 text-white">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Y<span className="text-accent">.</span>Elouissi
                        </h1>
                    </Link>
                    {/* navBar descktop */}

                    <div className="hidden xl:flex items-center gap-8">
                      <Nav/>
                        <Link href="/contact">
                            <Button>contacter</Button>
                        </Link>

                    </div>


                    {/* navBar mobile */}

                    <div className="xl:hidden">
                      <MobileNav/>
                    </div>

                  

                </div>
    

           </header>
}
export default Header