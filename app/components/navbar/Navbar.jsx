'use client'
import Link from "next/link";
import React, { useRef } from "react";
import Logo from '../../../public/logo.svg'
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

const Header = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    })

    const padding = useTransform(scrollYProgress, [0.85, 1], ['4em', '3em'])
    const scale = useTransform(scrollYProgress, [0.85, 1], ['1', '0.8'])


    return (
        <motion.div
            style={{ padding }}
            ref={targetRef}
            className="navbar">
            <div className="navbar-container">
                <motion.div
                    ref={targetRef}
                    style={{ scale, float: "left" }}>
                    <Link className="logo" href="/"><Image src={Logo} alt="" />
                    </Link>
                </motion.div>
                <Link href="/about">Ons werk</Link>
                <Link href="/services">Diensten</Link>
                <Link href="/about">Over Ons</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </motion.div>
    )
}

export default Header