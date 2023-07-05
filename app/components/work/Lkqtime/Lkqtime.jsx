import React, { useState } from 'react';
import styles from '../SelectedWork.module.css';

const LKQtime = () => {
    const [isHovered, setIsHovered] = useState(false);

    const lkqtimePreviewMp4 =
        'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQtime/PreviewLKQtime.mp4';
    const lkqtimePreviewPoster =
        'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQtime/LKQtime1.jpg';

    return (
        <div
            className={`${styles.pegasusContainer} ${isHovered ? styles.hovered : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <video autoPlay loop muted className={`${styles.video} ${isHovered ? styles.visible : ''}`}>
                <source src={lkqtimePreviewMp4} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <img
                src={lkqtimePreviewPoster}
                alt="Pegasus Thumbnail"
                className={`${styles.thumbnailWrapper} ${isHovered ? styles.hidden : ''}`}
            />
        </div>
    );
};

export default LKQtime;
