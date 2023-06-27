// SelectedWork.jsx
'use client'
import React, { useRef } from 'react';
import styles from './SelectedWork.module.css';
import Quote from '../quote/Quote';
import ReactPlayer from 'react-player';
import dynamic from 'next/dynamic';
import { useScroll, useTransform, motion } from 'framer-motion'
import { relative } from 'path';


const SelectedWork = () => {
    const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });
    const showreel = "https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Showreel.webm"

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);
    const width = useTransform(scrollYProgress, [0.4, 0.6], ['78em', '99.5vw'])

    return (
        <>

            <motion.div
                style={{ opacity }}
                ref={targetRef}>
                <Quote style={{ position: 'fixed' }} />
            </motion.div>

            <motion.div
                className={styles.outershowreel}>
                <div className={styles.showreelcontainer}>
                    <video autoPlay muted loop >
                        <source src={showreel} type="video/webm" />
                    </video>
                </div>
            </motion.div>

            {/* <div style={{ margin: '0 auto' }}>
                <ReactPlayer width='1440px' height='810px' controls={true} playing={true} url={showreel} />
            </div> */}


            <h2 style={{ position: 'relative', fontSize: '4.236rem', textAlign: 'center', marginBottom: '0', fontWeight: '400' }}>Selected work</h2>
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
