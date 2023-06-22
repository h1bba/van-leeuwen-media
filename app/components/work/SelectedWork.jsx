'use client'
import React, { useEffect, useRef } from 'react';
import styles from './SelectedWork.module.css';
import { cubicBezier, EaseIn, useTransform, motion, useViewportScroll, easeIn, animate } from 'framer-motion';

const SelectedWork = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useViewportScroll();

    const width = useTransform(scrollYProgress, [0, 0.12], ['100vw', '78em']);
    const borderRadius = useTransform(scrollYProgress, [0, 0.3], ['0px', '32px']);
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
            <motion.h2 style={{ opacity, marginTop: '3em' }} className="herotxt">
                <span className="color-orange-bold">“</span>Elevate your brand with our{' '}
                <span className="color-orange">creative</span> video solutions
                <span className="color-orange-bold">”</span>
            </motion.h2>

            <div>
                <motion.div variants={fadeUp}
                    style={{ width, borderRadius, marginBottom: '2em' }}
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
