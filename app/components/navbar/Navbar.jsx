'use client'
import Link from "next/link";
import React, { useRef, useState } from "react";
import Logo from '../../../public/logo.svg'
import Hamburger from '../../../public/Hamburger.svg'
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

const Header = () => {
    const navLinks = [
        { title: "Ons werk", href: "/about" },
        { title: "Diensten", href: "/services" },
        { title: "Over ons", href: "/about" },
        { title: "Contact", href: "/contact" }

    ];
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    })

    const scale = useTransform(scrollYProgress, [0.85, 1], ['1', '0.8'])

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbarwidth">
            <div
                className="navbar">
                <div className="navbar-container">
                    <div>
                        <Link className="logo" href="/"><Image src={Logo} alt="" />
                        </Link>
                    </div>
                    <div id="navlinks">
                        <Link href="/portfolio">Ons werk</Link>
                        <Link href="/services">Diensten</Link>
                        <Link href="/about">Over ons</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                    <div id="mobilenav">
                        <a className="hamburgerIcon" onClick={toggleMenu}>
                            <Image src={Hamburger} height={50} alt="Hamburger Menu" />
                        </a>

                    </div>
                </div>
            </div>
            {menuOpen && (
                // <div class="overlay" id="overlay">
                //     <nav class="overlay-menu">
                //         <ul>
                //             <li><a href="#">Home</a></li>
                //             <li><a href="#">About</a></li>
                //             <li><a href="#">Work</a></li>
                //             <li><a href="#">Contact</a></li>
                //         </ul>
                //     </nav>
                // </div>
                <div className="mobilemenu">
                    <a onClick={toggleMenu}>
                        <Image src={Hamburger} height={50} alt="Hamburger Menu" />
                    </a>
                    <div id="hamburgerlinks">
                        <Link className="logomobile" href="/"><Image src={Logo} alt="" />
                        </Link>
                        <Link href="/about">Ons werk</Link>
                        <Link href="/services">Diensten</Link>
                        <Link href="/about">Over Ons</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header;
