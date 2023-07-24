'use client'
import React, { useRef } from 'react'
import styles from './Showreel.module.css';
import { useScroll, useTransform, motion } from 'framer-motion'
import dynamic from 'next/dynamic';

export const Showreel = () => {

    const showreelwebm = "https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Showreel.webm"
    const showreelmp4 = "https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Showreel.mp4"


    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "start start"],
    })

    const opacity = useTransform(scrollYProgress, [0.6, 0.75], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.6, 0.75], [1, 0.85]);
    const borderRadius = useTransform(scrollYProgress, [0.2, 0.5], ['16px', '0px'])
    const width = useTransform(scrollYProgress, [0.4, 0.8], ['56em', '99.55vw'])
    const height = useTransform(scrollYProgress, [0.4, 0.8], ['65vh', '108vh'])


    return (
        <motion.div
            className={styles.outershowreel}>
            <motion.div
                style={{ borderRadius, width, height }}
                ref={targetRef}

                className={styles.showreelcontainer}>
                <video autoPlay muted loop >
                    <source src={showreelmp4} type="video/mp4" />
                    <source src={showreelwebm} type="video/webm" />
                </video>
            </motion.div>
        </motion.div>
    )
}
export default Showreel;