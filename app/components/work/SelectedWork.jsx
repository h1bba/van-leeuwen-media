'use client'
import React, { useEffect, useRef } from 'react';
import styles from './SelectedWork.module.css';
import { cubicBezier, EaseIn, useTransform, motion, useViewportScroll, easeIn, animate } from 'framer-motion';
import Quote from '../quote/Quote';

const SelectedWork = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useViewportScroll();

    const width = useTransform(scrollYProgress, [0, 0.12], ['78em', '99.55dvw']);
    const borderRadius = useTransform(scrollYProgress, [0, 0.3], ['32px', '0px']);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
    const opacity = useTransform(scrollYProgress, [0, 0.15, 0.21], [1, 1, 0])
    const translateY = useTransform(scrollYProgress, [0, 0.1], ['100%', '0%'])

    const fadeUp = {
        initial: {
            opacity: 1
        },
        animate: {
            opacity: 0
        }
    }




    return (
        <>
            <Quote />

            <div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}

                    variants={fadeUp}
                    style={{ borderRadius, marginBottom: '30em', marginTop: '20em' }}
                    ref={targetRef}
                    className={styles.fullwidthimg}
                ></motion.div>
            </div>
            <div className={styles.sworkcontainer}>
                <div className={styles.leftcolumn}>
                    <div className={styles.phitem1}></div>
                    <div className={styles.phitem1}></div>

                    {/* <div className={styles.phitem2}></div> */}

                </div>
                <div className={styles.rightcolumn}>
                    <div className={styles.phitem1}></div>
                    <div className={styles.phitem1}></div>

                </div>
            </div>
        </>
    );
};

export default SelectedWork;
