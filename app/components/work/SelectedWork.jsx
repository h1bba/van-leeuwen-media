// SelectedWork.jsx
'use client'
import React, { useRef } from 'react';
import styles from './SelectedWork.module.css';
import Quote from '../quote/Quote';
import dynamic from 'next/dynamic';
import { useScroll, useTransform, motion } from 'framer-motion'
import { relative } from 'path';
import Showreel from '../showreel/Showreel'
import BackgroundSlider from 'react-background-slider'


const SelectedWork = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0.65, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.65, 0.8], [1, 1.15]);
    const translateY = useTransform(scrollYProgress, [0.85, 1], [1, 1])

    const sweetbob1 = "https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Pegasus2.jpg"


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
                        <div className={styles.phitem1}>
                            <h3 className={styles.credstitle}>Pegasus</h3>

                        </div>
                        <div className={styles.phitem2}>
                            <ul className={styles.category}>
                                <li>Commercial</li>
                                <li>Corporate</li>
                                <li>Fictional</li>
                                <li>Social</li>
                            </ul>
                        </div>
                        <div className={styles.bikker}></div>
                        <div className={styles.sweetbob}></div>
                    </div>
                    <div className={styles.rightcolumn}>
                        <div className={styles.lkqcom}>
                        </div>
                        <div className={styles.bula}></div>
                        <div className={styles.lkqtime}></div>

                        <div className={styles.phitem3}>
                            <p style={{ fontSize: '2.618rem', maxWidth: '12em', margin: '0 auto' }}>
                                +
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default SelectedWork;
