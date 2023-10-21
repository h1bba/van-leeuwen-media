'use client'
import React, { useRef } from 'react'
import styles from './Showreel.module.css';
import { useScroll, useTransform, motion } from 'framer-motion'
import dynamic from 'next/dynamic';
import Arrow from '../../../public/Arrow.svg'
import Image from 'next/image';

export const Showreel = () => {

    const showreelwebm = "https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Showreel.webm"
    const showreelmp4 = "https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Showreel.mp4"


    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "start start"],
    })

    // let widthValue;
    // if (window.innerWidth < 768) {
    //     widthValue = '91%';
    // } else {
    //     widthValue = '80%';
    // }
    // const width = useTransform(scrollYProgress, [0.2, 0.8], ['50%', widthValue]);
    const width = useTransform(scrollYProgress, [0.2, 0.8], ['50%', '91%']);

    return (
        <>
            <motion.div
                animate={{
                    translateY: ['0%', '30%', '0%', '30%', '0%']
                }}
                transition={{ repeat: Infinity, duration: 5 }}
                style={{ textAlign: 'center', fill: '#FF8500' }}>
                <Image src={Arrow} width={120} alt='Scroll Arrow'></Image>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className={styles.outershowreel}
                style={{ width }}
            >

                <motion.div

                    ref={targetRef}

                    className={styles.showreelcontainer}>
                    <video autoPlay loop muted playsInline controls poster='https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Bula/bula1.jpg'>
                        <source src={showreelmp4} type="video/mp4" />
                        <source src={showreelwebm} type="video/webm" />
                    </video>
                </motion.div>
            </motion.div>
        </>
    )
}
export default Showreel;