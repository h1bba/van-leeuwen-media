'use client'
import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './Ctabanner.module.css';

const Ctabanner = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    });

    const [windowWidth, setWindowWidth] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add an event listener when the component mounts
        window.addEventListener('resize', handleResize);
        // Initialize the windowWidth state
        setWindowWidth(window.innerWidth);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const translateY = useTransform(scrollYProgress, [0, 1], [0, -16]);
    const fontSize = useTransform(
        scrollYProgress,
        [0, 0.5],
        [
            '1.5rem',
            windowWidth <= 425
                ? '3rem'
                : windowWidth <= 768
                    ? '4rem'
                    : windowWidth <= 1024
                        ? '5rem'
                        : '10rem',
        ]
    );

    return (
        <>
            <a href="/contact">
                <motion.div ref={targetRef} style={{ alignSelf: 'center' }} className={styles.ctabox}>
                    <motion.p ref={targetRef} style={{ fontSize, translateY }} className={styles.ctatext}>
                        Daag ons uit
                    </motion.p>
                </motion.div>
            </a>
        </>
    );
};

export default Ctabanner;
