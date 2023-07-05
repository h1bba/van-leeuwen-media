import React from 'react';
import styles from '../SelectedWork.module.css';


const mp4Url = "https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Bula/PreviewBula.mp4"


const PreviewVideo = ({ webmUrl, mp4Url }) => {

    return (
        <video autoPlay muted loop controls className={styles.video}>
            <source src={mp4Url} type="video/mp4" />
            {/* Add a fallback message or alternative content here */}
        </video>
    );
};

export default PreviewVideo;
