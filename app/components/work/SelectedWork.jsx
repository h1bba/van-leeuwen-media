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
import { Fade } from "react-awesome-reveal";


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
            <div className={styles.hero} style={{ backgroundColor: 'white', zIndex: '1', position: 'relative' }}>
                <Fade>

                    <p><span style={{ color: '#FF8500' }}>Breng</span> jouw visie
                        tot leven <span style={{ color: '#FF8500' }}>met onze creatieve </span>
                        high-end media oplossingen </p>
                </Fade>
                <Fade cascade damping={0.2}>

                    <div className={styles.herobuttons}>

                        <a href='#selectedwork'>Bekijk werk</a>
                        <a href='/contact'>Contact</a>

                    </div>
                </Fade>

            </div>
            <div style={{ backgroundColor: 'white', zIndex: '1', position: 'relative' }}>
                <Fade>

                    <Showreel />
                </Fade>
                <div className={styles.selectedworktitle}>
                    <Fade>

                        <h2 id='selectedwork' className={styles.title}>Selected work</h2>
                    </Fade>

                </div>

                <div className={styles.workflex}>
                    <Fade triggerOnce cascade damping={0.2}>

                        <a href='/project/pegasus'><Pegasus /></a>
                        <a href='/project/lkqcom'><Lkqcom /></a>
                        <a href='/project/autofirst'><Bikker /></a>
                        <a href='/project/bula'><Bula /></a>

                        <a href='/project/lkqtime'><Lkqtime /></a>
                        <a href='/project/sweetbob'><Sweetbob /></a>

                    </Fade>

                </div>

                <div className={styles.dienstencontainer}>
                    <div className={styles.dienstenbox}>
                        <Fade>

                            <p className={styles.dienstentext}>
                                Als bedrijf bieden we een breed scala aan diensten aan, waaronder
                                volledige video & film producties maar ook losse diensten zoals color
                                grading, sound design en motion design.
                            </p>
                        </Fade>
                        <Fade>

                            <a href='/services' className={styles.servicebutton} >Bekijk diensten</a>
                        </Fade>

                    </div>
                </div>

                <div className={styles.dienstencontainer}>
                    <div className={styles.dienstenbox}>
                        <Fade fraction={0.5}>

                            <div>
                                <p className={styles.titletext} >Onze succesformule?</p><p style={{ marginTop: '0.4em', lineHeight: 'normal' }}>Een vakkundige samenwerking tussen specialisten in elke fase van het project. Zo creëren we het beste resultaat: een doeltreffend eindproduct dat de verwachtingen overstijgt.</p>
                            </div>
                        </Fade>

                        <ul className={styles.categories} >
                            <Fade cascade damping={0.2}>

                                <li>Commercial</li>
                                <li>Corporate</li>
                                <li>Fictional</li>
                                <li>Social</li>
                            </Fade>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SelectedWork;
