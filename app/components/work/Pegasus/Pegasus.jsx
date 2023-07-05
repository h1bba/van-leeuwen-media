import React, { useState } from 'react';
import styles from '../SelectedWork.module.css';

const Pegasus = () => {
    const [isHovered, setIsHovered] = useState(false);

    const pegasusPreviewMp4 =
        'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Pegasus/PreviewPegasus.mp4';
    const pegasusPreviewPoster =
        'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Pegasus/Pegasus1.jpg';

    return (
        <div
            className={`${styles.pegasusContainer} ${isHovered ? styles.hovered : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <video autoPlay loop muted className={`${styles.video} ${isHovered ? styles.visible : ''}`}>
                <source src={pegasusPreviewMp4} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <img
                src={pegasusPreviewPoster}
                alt="Pegasus Thumbnail"
                className={`${styles.thumbnailWrapper} ${isHovered ? styles.hidden : ''}`}
            />
        </div>
    );
};

export default Pegasus;
