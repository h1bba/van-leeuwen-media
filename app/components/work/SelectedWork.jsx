'use client'
import React, { useEffect, useRef } from 'react';
import styles from './SelectedWork.module.css';
import { cubicBezier, EaseIn, useTransform, motion, useViewportScroll } from 'framer-motion';

const SelectedWork = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useViewportScroll();

    const width = useTransform(scrollYProgress, [0, 0.2], ['99.6vw', '65vw']);
    const borderRadius = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], ['0px', '5px', '10px', '16px']);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
    const position = useTransform(scrollYProgress, (pos) => {
        return pos === 1 ? "fixed" : "relative";
    })

    return (
        <>
            <motion.h2 style={{ opacity }} className="herotxt">
                <span className="color-orange-bold">“</span>Elevate your brand with our{' '}
                <span className="color-orange">creative</span> video solutions
                <span className="color-orange-bold">”</span>
            </motion.h2>

            <motion.div
                style={{ position, width, borderRadius }}
                ref={targetRef}
                className={styles.fullwidthimg}
            ></motion.div>
            <div className={styles.sworkcontainer}>
                <div className={styles.leftcolumn}>
                    <div className={styles.phitem1}></div>
                </div>
                <div className={styles.rightcolumn}></div>
            </div>
        </>
    );
};

export default SelectedWork;
