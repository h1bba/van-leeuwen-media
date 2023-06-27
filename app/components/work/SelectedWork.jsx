// SelectedWork.jsx
'use client'
import React from 'react';
import styles from './SelectedWork.module.css';
import Quote from '../quote/Quote';
import ReactPlayer from 'react-player';
import dynamic from 'next/dynamic';

const SelectedWork = () => {
    const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });
    const showreel = "https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Showreel.webm"

    return (
        <>
            <div>
                <Quote />
            </div>

            <div style={{ margin: '0 auto' }}>
                <ReactPlayer width='1440px' height='960px' controls={true} playing={true} url={showreel} />
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

                    <div className={styles.phitem3}>
                        <p style={{ textAlign: 'center', verticalAlign: 'center', fontSize: '2.618rem', maxWidth: '12em', margin: '0 auto' }}>
                            Niet je standaard studio, wel de juiste.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SelectedWork;
