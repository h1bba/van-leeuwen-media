// SelectedWork.jsx
'use client'
import React, { useRef } from 'react';
import styles from './SelectedWork.module.css';
import Quote from '../quote/Quote';
import dynamic from 'next/dynamic';
import { useScroll, useTransform, motion } from 'framer-motion'
import { relative } from 'path';
import Showreel from '../showreel/Showreel'


const SelectedWork = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0.6, 0.75], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.6, 0.75], [1, 0.85]);
    const translateY = useTransform(scrollYProgress, [0.85, 1], [1, 0.2])

    return (
        <>

            <motion.div
                style={{ opacity, scale, translateY, marginTop: '20em' }}
                ref={targetRef}>
                <Quote style={{ position: 'fixed' }} />
            </motion.div>

            <Showreel />

            <motion.div
                initial={{ opacity: 0, scale: 0.8, translateY: '32px' }}
                animate={{ opacity: 1, scale: 1, translateY: '0px' }}
                transition={{ duration: 0.3 }}>
                <h2 className={styles.title}>Selected work</h2>
            </motion.div>

            <div className={styles.sworkcontainer}>
                <div className={styles.leftcolumn}>
                    <div className={styles.phitem1}></div>
                    <div className={styles.phitem2}>
                        <ul className={styles.category}>
                            <li>Commercial</li>
                            <li>Corporate</li>
                            <li>Fictional</li>
                            <li>Social</li>
                        </ul>
                    </div>
                    <div className={styles.phitem1}></div>
                    <div className={styles.phitem1}></div>
                </div>
                <div className={styles.rightcolumn}>
                    <div className={styles.phitem1}></div>
                    <div className={styles.phitem1}></div>
                    <div className={styles.phitem1}></div>

                    <div className={styles.phitem3}>
                        <p style={{ textAlign: 'center', verticalAlign: 'center', fontSize: '2.618rem', maxWidth: '12em', margin: '0 auto' }}>
                            Niet je standaard studio, wel de juiste.
                        </p>
                    </div>
                </div>
            </div>



        </>
    );
};

export default SelectedWork;
