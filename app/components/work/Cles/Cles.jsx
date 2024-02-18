/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from '../SelectedWork.module.css';

const Cles = () => {
    const [isHovered, setIsHovered] = useState(false);

    const clesPreviewMp4 =
        'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Cles/PreviewCles.mp4';
    const clesPreviewPoster =
        'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Cles/da+pele+pra+fora.jpg';

    return (
        <div
            className={`${styles.clesContainer} ${isHovered ? styles.hovered : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <video autoPlay loop muted className={`${styles.video} ${isHovered ? styles.visible : ''}`}>
                <source src={clesPreviewMp4} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <img
                src={clesPreviewPoster}
                alt="Cles - Da Pele Pra Fora Thumbnail"
                className={`${styles.thumbnailWrapper} ${isHovered ? styles.hidden : ''}`}
            />
        </div>
    );
};

export default Cles;
