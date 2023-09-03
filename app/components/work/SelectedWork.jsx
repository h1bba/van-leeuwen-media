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
            <div style={{ backgroundColor: 'white', zIndex: '1', position: 'relative' }}>
                <motion.div
                    className={styles.quote}
                    ref={targetRef}>
                    <Quote />
                </motion.div>

                <Showreel />

                <div style={{ maxWidth: '80%', margin: '0 auto', paddingRight: '1em' }}>
                    <h2 className={styles.title}>Selected work</h2>
                </div>
                <div className={styles.workflex}>
                    <a href='/project/pegasus'><Pegasus /></a>
                    <a href='/project/lkqcom'><Lkqcom /></a>
                    <a href='/project/autofirst'><Bikker /></a>
                    <a href='/project/bula'><Bula /></a>

                    <a href='/project/lkqtime'><Lkqtime /></a>
                    <a href='/project/sweetbob'><Sweetbob /></a>


                </div>
                <div style={{ maxWidth: '80%', padding: '1em', marginRight: 'auto', marginLeft: 'auto' }}>
                    <div style={{ maxWidth: '60%', textAlign: 'center', fontSize: '2.25rem', margin: '0 auto' }}>
                        <p style={{ marginBottom: '2em', marginTop: '2em' }}>
                            Als bedrijf bieden we een breed scala aan diensten aan, waaronder
                            volledige video & film producties maar ook losse diensten zoals color
                            grading, sound design en motion design.
                        </p>
                        <a href='/services' className={styles.servicebutton} style={{}}>Bekijk diensten</a>
                    </div>
                </div>

                <div style={{ maxWidth: '80%', padding: '1em', marginLeft: 'auto', marginRight: 'auto' }}>
                    <div style={{ fontSize: '2.25rem', width: '60%', marginTop: '4em', marginLeft: 'auto', marginRight: 'auto', zIndex: '3', position: 'relative', backgroundColor: 'white', textAlign: 'center' }}>
                        <div>
                            <p style={{ fontWeight: 'bold', marginBottom: '0em', fontSize: '3.375rem' }}>Onze succesformule?</p><p style={{ marginTop: '0.4em', lineHeight: 'normal' }}>Een vakkundige samenwerking tussen specialisten in elke fase van het project. Zo creëren we het beste resultaat: een doeltreffend eindproduct dat de verwachtingen overstijgt.</p>
                        </div>
                        <ul className={styles.categories} style={{ margin: '0 auto', display: 'flex', gap: '1em', listStyle: 'none', paddingLeft: '0.25em', marginTop: '0.8em', flexWrap: 'wrap' }}>
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
