'use client'
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './Ctabanner.module.css';

const Ctabanner = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0.55, 0.70], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 16]);
    const translateY = useTransform(scrollYProgress, [0, 1], [0, 16]);
    const borderRadius = useTransform(scrollYProgress, [0, 0.4], ['0px', '3em']);
    const maxWidth = useTransform(scrollYProgress, [0, 1], ['100%', '90%']);
    const backgroundColor = useTransform(scrollYProgress, [0, 1], ['black', 'white']);

    // Check if the viewport width is less than a certain value (e.g., 768 for mobile devices)
    const isMobile = window.innerWidth < 768;

    return (
        <>
            {!isMobile && (
                <motion.div ref={targetRef} style={{ borderRadius, maxWidth, backgroundColor }} className={styles.ctabox}>
                    <motion.p ref={targetRef} style={{ scale, opacity, translateY }} className={styles.ctatext}>
                        Daag ons uit
                    </motion.p>
                </motion.div>
            )}
        </>
    );
};

export default Ctabanner;
