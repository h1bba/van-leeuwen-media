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
            <div className={styles.hero} style={{ backgroundColor: 'white', zIndex: '1', position: 'relative' }}>
                <p><span style={{ color: '#FF8500' }}>Breng</span> jouw visie
                    tot leven <span style={{ color: '#FF8500' }}>met onze creatieve </span>
                    high-end media oplossingen </p>
                <div className={styles.herobuttons}>
                    <a href='#selectedwork'>Bekijk werk</a>
                    <a href='/contact'>Contact</a>

                </div>
            </div>
            <div style={{ backgroundColor: 'white', zIndex: '1', position: 'relative' }}>

                <Showreel />

                <div style={{ maxWidth: '80%', margin: '0 auto', paddingRight: '1em' }}>
                    <h2 id='selectedwork' className={styles.title}>Selected work</h2>
                </div>
                <div className={styles.workflex}>
                    <a href='/project/pegasus'><Pegasus /></a>
                    <a href='/project/lkqcom'><Lkqcom /></a>
                    <a href='/project/autofirst'><Bikker /></a>
                    <a href='/project/bula'><Bula /></a>

                    <a href='/project/lkqtime'><Lkqtime /></a>
                    <a href='/project/sweetbob'><Sweetbob /></a>


                </div>
                <div className={styles.dienstencontainer}>
                    <div className={styles.dienstenbox}>
                        <p className={styles.dienstentext} style={{ marginTop: '0em' }}>
                            Als bedrijf bieden we een breed scala aan diensten aan, waaronder
                            volledige video & film producties maar ook losse diensten zoals color
                            grading, sound design en motion design.
                        </p>
                        <a href='/services' className={styles.servicebutton} >Bekijk diensten</a>
                    </div>
                </div>

                <div className={styles.dienstencontainer}>
                    <div className={styles.dienstenbox}>
                        <div>
                            <p className={styles.titletext} >Onze succesformule?</p><p style={{ marginTop: '0.4em', lineHeight: 'normal' }}>Een vakkundige samenwerking tussen specialisten in elke fase van het project. Zo creëren we het beste resultaat: een doeltreffend eindproduct dat de verwachtingen overstijgt.</p>
                        </div>
                        <ul className={styles.categories} >
                            <li>Commercial</li>
                            <li>Corporate</li>
                            <li>Fictional</li>
                            <li>Social</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SelectedWork;
