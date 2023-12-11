import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="mt-auto bg-secondary p-2" >
            <div className="flex flex-col gap-6 md:gap-0 md:flex-row max-w-6xl p-2 mx-auto">
                <div className="flex-1">
                    <Link href="/" className="flex flex-col items-center">
                        <Image src="/logo.webp" width={200} height={50} alt="Gang_Koshi_Logo" className="w-32 h-8" priority />
                        <h1 className="text-xl font-bold">Ganga Koshi</h1>
                    </Link>
                    <div className="flex flex-col items-center text-xs mt-4">
                        <p>Old Boys Hostel,</p>
                        <p>Motihari College of Engineering</p>
                        <p>Motihari, (845401)</p>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center">
                    <h1 className="font-semibold mb-1 md:mb-2">Services</h1>
                    <ul className="flex flex-col text-sm text-secondary-foreground gap-1">
                        <li>
                            <Link href={'/margdarshan'}>Margdarshan</Link>
                        </li>
                        <li>
                            <Link href={'/fashal-beema'}>Fashal Beema</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex-1 flex flex-col items-center">
                    <h1 className="font-semibold mb-1 md:mb-2">Quick Links</h1>
                    <ul className="flex flex-col text-sm text-secondary-foreground gap-1">
                        <li>
                            <Link href={'/about'}>About Us</Link>
                        </li>
                        <li>
                            <Link href={'/contact'}>Contact Us</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex-1 flex flex-col items-center">
                    <h1 className="font-semibold mb-1 md:mb-2">Queries</h1>
                    <ul className="flex flex-col text-sm text-secondary-foreground gap-1">
                        <li>
                            <a href="mailto:support@gangakoshi.com" className="flex gap-1 items-center" >
                                <HiOutlineEnvelope />
                                support@gangakoshi.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:+919876543210" className="flex gap-1 items-center" >
                                <HiOutlinePhone />
                                +91 9876543210
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex max-w-6xl p-2 mx-auto justify-center">
                <p className="text-sm flex gap-1 items-center text-center">
                    &copy; Ganga Kosi Agriculture Pvt. Limited | All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer