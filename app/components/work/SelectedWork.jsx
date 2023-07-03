// SelectedWork.jsx
'use client'
import React, { useRef, useState } from 'react';
import styles from './SelectedWork.module.css';
import Quote from '../quote/Quote';
import dynamic from 'next/dynamic';
import { useScroll, useTransform, motion } from 'framer-motion'
import { relative } from 'path';
import Showreel from '../showreel/Showreel'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Lkqcom from './Lkqcom/Lkqcom'
import Pegasus from './Pegasus/Pegasus'
import Bula from './Bula/Bula'
import Lkqtime from './Lkqtime/Lkqtime'
import Bikker from './Bikker/Bikker'
import Sweetbob from './Sweetbob/Sweetbob'

const SelectedWork = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0.65, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.65, 0.8], [1, 1.15]);
    const translateY = useTransform(scrollYProgress, [0.85, 1], [1, 1]);
    const backgroundColor = useTransform(scrollYProgress, [0.1, 0.25], ['#121211', '#FF8500'])



    return (
        <>

            <motion.div
                style={{ opacity, scale, backgroundColor: 'white', zIndex: '1' }}
                className={styles.quote}
                ref={targetRef}>
                <Quote />
            </motion.div>

            <Showreel />

            <motion.div

                className={styles.title}>
                <h2 className={styles.title}>Selected work</h2>
            </motion.div>

            <div className={styles.wrapperwork}>
                <div className={styles.sworkcontainer}>
                    <div className={styles.leftcolumn}>
                        <Pegasus />

                        <motion.div
                            ref={targetRef}
                            style={{ backgroundColor }}
                            className={styles.phitem2}>
                            <ul className={styles.category}>
                                <li>Commercial</li>
                                <li>Corporate</li>
                                <li>Fictional</li>
                                <li>Social</li>
                            </ul>
                        </motion.div>

                        <Bikker />
                        <Sweetbob />
                    </div>
                    <div className={styles.rightcolumn}>
                        <Lkqcom />
                        <Bula />
                        <Lkqtime />
                        <motion.div
                        ref={targetRef}
                        style={{ backgroundColor}}
                        className={styles.banner}><p>Onze succesformule?<br></br>Een vakkundige samenwerking tussen specialisten in elke fase van het project. Zo creëren we het beste resultaat: een doeltreffend eindproduct dat de verwachtingen overstijgt.</p>
                        </motion.div>
                    </div>

                </div>
            </div>


        </>
    );
};

export default SelectedWork;
