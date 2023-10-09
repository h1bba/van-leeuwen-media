'use client'
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import Logo from '../../../public/logo.svg'
import LogoIcon from '../../../public/logoicon.svg'
import Hamburger from '../../../public/Hamburger.svg'
import Close from '../../../public/HamburgerClose.svg'
import Image from "next/image";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";

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

    const menuVars = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.7,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        }
    };

    const mobileLinkVars = {
        initial: {
            opacity: 0,
            y: "30vh",
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1],
                staggerChildren: 0.2,
            }
        },
        open: {
            opacity: 1,

            y: "0vh",
            transition: {
                duration: 0.7,
                ease: [0, 0.55, 0.45, 1],
                staggerChildren: 0.2,

            }
        },

        exit: {
            y: "60vh",
            transition: {
                duration: 0.7,
                ease: [0, 0.55, 0.45, 1],
                staggerChildren: 0.2,

            }
        }
    }

    const containerVars = {
        initial: {
            transition: {
                staggerChildren: 0.1,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.15,
                staggerDirection: 1,

            },
        },
    };

    return (
        <div className="navbarwidth" >
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
                        <Link className="contactpadding" href="/contact">Contact</Link>
                    </div>
                    <div id="mobilenav">
                        <a className="hamburgerIcon" onClick={toggleMenu}>
                            <Image src={Hamburger} height={50} alt="Hamburger Menu" />
                        </a>

                    </div>
                </div>
            </div>
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="mobilemenu">
                        <a className="closebtn" onClick={toggleMenu}>
                            <Image src={Close} height={50} alt="Close button" />
                        </a>

                        <motion.div
                            variants={containerVars}
                            initial="initial"
                            animate="open"
                            exit="initial"
                            id="hamburgerlinks">
                            <div className="overflowhiddenlogo">

                                <motion.div
                                    variants={mobileLinkVars}>
                                    <a className="logomobile" href="/"><Image src={LogoIcon} alt="" /></a>
                                </motion.div>

                            </div>
                            <div className="overflowhidden">

                                <motion.div
                                    variants={mobileLinkVars}
                                >
                                    <Link href="/about">Ons werk</Link>
                                </motion.div>

                            </div>

                            <div className="overflowhidden">

                                <motion.div
                                    variants={mobileLinkVars}
                                >
                                    <Link className="overflowhidden" href="/services">Diensten</Link>
                                </motion.div>

                            </div>

                            <div className="overflowhidden">

                                <motion.div
                                    variants={mobileLinkVars}>
                                    <Link className="overflowhidden" href="/about">Over Ons</Link>
                                </motion.div>

                            </div>

                            <div className="overflowhidden">

                                <motion.div
                                    variants={mobileLinkVars}>
                                    <Link className="overflowhidden" href="/contact">Contact</Link>
                                </motion.div>

                            </div>



                            <div className="overflowhidden">

                                <motion.div
                                    variants={mobileLinkVars}
                                    className="mailfooter">
                                    <a>info@vanleeuwenmedia.com</a>
                                </motion.div>

                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    )
}

export default Header;
