import React, { useState } from 'react';
import styles from '../SelectedWork.module.css';

const LKQcom = () => {
    const [isHovered, setIsHovered] = useState(false);

    const lkqcomPreviewMp4 =
        'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQcom/PreviewLKQcom.mp4';
    const lkqcomPreviewPoster =
        'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQcom/LKQcom1.jpg';

    return (
        <div
            className={`${styles.pegasusContainer} ${isHovered ? styles.hovered : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <video autoPlay loop muted className={`${styles.video} ${isHovered ? styles.visible : ''}`}>
                <source src={lkqcomPreviewMp4} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <img
                src={lkqcomPreviewPoster}
                alt="Pegasus Thumbnail"
                className={`${styles.thumbnailWrapper} ${isHovered ? styles.hidden : ''}`}
            />
        </div>
    );
};

export default LKQcom;
