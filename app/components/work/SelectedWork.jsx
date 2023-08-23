// SelectedWork.jsx
'use client'
import React, { useRef, useState } from 'react';
import styles from './SelectedWork.module.css';
import Quote from '../quote/Quote';
import dynamic from 'next/dynamic';
import { useScroll, useTransform, motion } from 'framer-motion'
import { relative } from 'path';
import Showreel from '../showreel/Showreel'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Lkqcom from './Lkqcom/Lkqcom'
import Pegasus from './Pegasus/Pegasus'
import Bula from './Bula/Bula'
import Lkqtime from './Lkqtime/Lkqtime'
import Bikker from './Autofirst/Autofirst'
import Sweetbob from './Sweetbob/Sweetbob'

const SelectedWork = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start center", "start start"],
    })

    // const scale = useTransform(scrollYProgress, [0.65, 0.9], [1, 1.15]);
    // const backgroundColor = useTransform(scrollYProgress, [0.05, 0.25], ['#121211', '#FF8500'])



    return (
        <>

            <motion.div
                style={{ backgroundColor: 'white', zIndex: '1' }}
                className={styles.quote}
                ref={targetRef}>
                <Quote />
            </motion.div>

            <Showreel />

            <h2 className={styles.title}>Selected work</h2>
            <div className={styles.workflex}>
                <a href='/project/pegasus'><Pegasus /></a>
                <a href='/project/lkqcom'><Lkqcom /></a>
                <div
                    className={styles.phitem2}>
                    <ul className={styles.category}>
                        <li>Commercial</li>
                        <li>Corporate</li>
                        <li>Fictional</li>
                        <li>Social</li>
                    </ul>
                </div>
                <a href='/project/autofirst'><Bikker /></a>
                <a href='/project/bula'><Bula /></a>

                <a href='/project/lkqtime'><Lkqtime /></a>
                <div className={styles.banner}>
                    <p>Onze succesformule?<br></br>Een vakkundige samenwerking tussen specialisten in elke fase van het project. Zo creëren we het beste resultaat: een doeltreffend eindproduct dat de verwachtingen overstijgt.</p>
                </div>
                <a href='/project/sweetbob'><Sweetbob /></a>


            </div>


        </>
    );
};

export default SelectedWork;
