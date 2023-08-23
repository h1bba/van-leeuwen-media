'use client'
import Link from "next/link";
import React, { useRef, useState } from "react";
import Logo from '../../../public/logo.svg'
import Hamburger from '../../../public/Hamburger.svg'
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

const Header = () => {

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
        <motion.div
            className="navbar">
            <div className="navbar-container">
                <div>
                    <Link className="logo" href="/"><Image src={Logo} alt="" />
                    </Link>
                </div>
                <div id="navlinks">
                    <Link href="/work">Ons werk</Link>
                    <Link href="/services">Diensten</Link>
                    <Link href="/about">Over ons</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div id="mobilenav">
                    <a className="hamburgerIcon" onClick={toggleMenu}>
                        <Image src={Hamburger} height={50} alt="Hamburger Menu" />
                    </a>
                    {menuOpen && (
                        <div id="hamburgerlinks">
                            <Link href="/">Home</Link>
                            <Link href="/about">Ons werk</Link>
                            <Link href="/services">Diensten</Link>
                            <Link href="/about">Over Ons</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default Header;
