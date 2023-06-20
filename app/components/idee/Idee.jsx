'use client'
import React, { useEffect, useRef } from 'react';
import styles from './Idee.module.css';

const Idee = () => {
    const containerRef = useRef(null);
    const textContainerRef = useRef(null);
    const imageContainerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const textContainer = textContainerRef.current;
        const imageContainer = imageContainerRef.current;

        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            const triggerPosition = imageContainer.offsetTop - window.innerHeight * 0.6;

            if (scrollY >= triggerPosition) {
                textContainer.style.opacity = '1';
            } else {
                textContainer.style.opacity = '1';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <h2 style={{ fontSize: '48px', textAlign: 'center' }}>
                Hoe <span style={{ color: '#FF8500' }}>het</span> werkt
            </h2>
            <div ref={containerRef} className={styles.ideecontainer}>
                <div ref={imageContainerRef} className={`${styles.ideeimgs} ${styles.scrollableImages}`}>
                    <img src="https://placehold.co/800x800" alt="" />
                    <img src="https://placehold.co/800x800" alt="" />
                    <img src="https://placehold.co/800x800" alt="" />
                </div>

                <div ref={textContainerRef} className={styles.textcontainer}>
                    <h3>Idee</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Magna pulvinar fermentum vel duis. Erat magna
                        orci vel rutrum donec sed nullam. Aliquet in fames ut nunc amet. Sed scelerisque eu leo
                        nulla bibendum pharetra praesent ut
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Idee;
