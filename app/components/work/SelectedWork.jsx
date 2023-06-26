// SelectedWork.jsx
'use client'
import React, { useEffect, useRef } from 'react';
import styles from './SelectedWork.module.css';
import { cubicBezier, EaseIn, useTransform, motion, useViewportScroll, easeIn, animate } from 'framer-motion';
import Quote from '../quote/Quote';

const SelectedWork = () => {
    const targetRef = useRef(null);
    const { scrollY, scrollYProgress } = useViewportScroll();

    const width = useTransform(scrollYProgress, [0, 0.12], ['78em', '99.55dvw']);
    const borderRadius = useTransform(scrollYProgress, [0, 0.3], ['32px', '0px']);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
    const opacity = useTransform(scrollYProgress, [0, 0.15, 0.21], [1, 1, 0])
    const translateY = useTransform(scrollYProgress, [0, 0.1], ['100%', '0%'])

    const handleScroll = () => {
        const targetElement = targetRef.current;
        if (targetElement) {
            const rect = targetElement.getBoundingClientRect();
            const divOffset = rect.top + rect.height;
            const windowHeight = window.innerHeight;

            if (divOffset <= windowHeight) {
                targetElement.classList.add(styles.fixed);
            } else {
                targetElement.classList.remove(styles.fixed);
            }
        }
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Quote />
            <div style={{ position: 'sticky', marginTop: '2em', marginBottom: '40em' }} >
                <motion.div
                    style={{ borderRadius, position: 'sticky', top: '10em' }}
                    ref={targetRef}
                    className={`${styles.fullwidthimg} ${styles.fixed}`}
                ></motion.div>
            </div>


            <h2 style={{ fontSize: '4.236rem', textAlign: 'center', marginBottom: '0', fontWeight: '400' }}>Selected work</h2>
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

                    <div className={styles.phitem3}><p style={{ textAlign: 'center', verticalAlign: 'center', fontSize: '2.618rem', maxWidth: '12em', margin: '0 auto' }}>Niet je standaard studio,
                        wel de juiste.</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default SelectedWork;
