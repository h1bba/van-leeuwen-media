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

                <h2 className={styles.title}>Selected work</h2>
                <div className={styles.workflex}>
                    <a href='/project/pegasus'><Pegasus /></a>
                    <a href='/project/lkqcom'><Lkqcom /></a>
                    <a href='/project/autofirst'><Bikker /></a>
                    <a href='/project/bula'><Bula /></a>

                    <a href='/project/lkqtime'><Lkqtime /></a>
                    <a href='/project/sweetbob'><Sweetbob /></a>


                </div>
                <div style={{ fontSize: '3.375rem', width: '80%', margin: '0 auto', zIndex: '3', position: 'relative', backgroundColor: 'white' }}>
                    <div style={{ width: '83%', paddingLeft: '0.25em' }}>
                        <p style={{ fontWeight: 'bold', marginBottom: '0em' }}>Onze succesformule?</p><p style={{ marginTop: '0.4em', lineHeight: 'normal' }}>Een vakkundige samenwerking tussen specialisten in elke fase van het project.<br></br>Zo creëren we het beste resultaat:<br></br>een doeltreffend eindproduct dat de verwachtingen overstijgt.</p>
                    </div>
                    <ul className={styles.categories} style={{ display: 'flex', gap: '1em', listStyle: 'none', paddingLeft: '0.25em', marginTop: '0.8em', flexWrap: 'wrap' }}>
                        <li>Commercial</li>
                        <li>Corporate</li>
                        <li>Fictional</li>
                        <li>Social</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SelectedWork;
