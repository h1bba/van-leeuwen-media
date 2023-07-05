import React, { useState } from 'react';
import styles from '../SelectedWork.module.css';

const Sweetbob = () => {
    const [isHovered, setIsHovered] = useState(false);

    const sweetbobPreviewMp4 =
        'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Sweetbob/PreviewSweetbob.mp4';
    const sweetbobPreviewPoster =
        'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Sweetbob/sweetbob1.jpg';

    return (
        <div
            className={`${styles.sweetbobContainer} ${isHovered ? styles.hovered : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <video autoPlay loop muted className={`${styles.video} ${isHovered ? styles.visible : ''}`}>
                <source src={sweetbobPreviewMp4} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <img
                src={sweetbobPreviewPoster}
                alt="Pegasus Thumbnail"
                className={`${styles.thumbnailWrapper} ${isHovered ? styles.hidden : ''}`}
            />
        </div>
    );
};

export default Sweetbob;
