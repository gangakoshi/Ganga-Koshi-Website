"use client"
import Link from "next/link"
import { Button } from "../ui/button"
import { GiWheat } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Navigation = () => {

    const [navMenu, setNavMenu] = useState(false)

    const toggleMenu = () => {
        setNavMenu(prev => !prev)
    }


    return (
        <>
            <ul className={`flex gap-2 md:w-auto md:bg-transparent md:border-l-0 md:p-0 md:h-auto md:flex-row md:static absolute top-[76.8px] flex-col h-[calc(100dvh-76.8px)] bg-secondary border-l text-foreground  w-full sm:w-3/4 p-2 items-center pt-9 justify-around transition-all ${navMenu ? 'right-0' : '-right-full'}`}>
                <li>
                    <Button variant={'link'} asChild>
                        <Link href={'/margdarshan'} className="text-lg md:text-sm">Margdarshan</Link>
                    </Button>
                </li>
                <li>
                    <Button variant={'link'} asChild>
                        <Link href={'/fashal-beema'} className="text-lg md:text-sm">Fashal Beema</Link>
                    </Button>
                </li>
                <li>
                    <Button variant={'link'} asChild>
                        <Link href={'/about'} className="text-lg md:text-sm">About</Link>
                    </Button>
                </li>
                <li>
                    <Button variant={'link'} asChild>
                        <Link href={'/contact'} className="text-lg md:text-sm">Contact</Link>
                    </Button>
                </li>

                <Button className="rounded-xl md:ml-4 ml-0 md:w-auto w-full" asChild>
                    <Link href={'/login'}>
                        <GiWheat className="mr-2 h-4 w-4" />
                        Join
                    </Link>
                </Button>

            </ul>
            <RxHamburgerMenu size={30} className='cursor-pointer md:hidden block text-foreground hover:text-secondary-foreground transition-all' onClick={toggleMenu} />

        </>
    )
}

export default Navigation