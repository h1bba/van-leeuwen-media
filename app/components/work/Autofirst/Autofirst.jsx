import React, { useState } from 'react';
import styles from '../SelectedWork.module.css';

const Autofirst = () => {
    const [isHovered, setIsHovered] = useState(false);

    const autoPreviewMp4 =
        'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Bikker/PreviewAutofirst.mp4';
    const autoPreviewPoster =
        'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Bikker/Autofirst1.jpg';

    return (
        <div
            className={`${styles.autoContainer} ${isHovered ? styles.hovered : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <video autoPlay loop muted className={`${styles.video} ${isHovered ? styles.visible : ''}`}>
                <source src={autoPreviewMp4} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <img
                src={autoPreviewPoster}
                alt="Pegasus Thumbnail"
                className={`${styles.thumbnailWrapper} ${isHovered ? styles.hidden : ''}`}
            />
        </div>
    );
};

export default Autofirst;
