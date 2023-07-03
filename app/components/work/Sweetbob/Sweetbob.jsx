import React, { useRef, useState } from 'react';
import styles from '../SelectedWork.module.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Sweetbob = () => {
    const [hoveredThumbnail, setHoveredThumbnail] = useState(null);


    const settings = {
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const handleThumbnailHover = (index) => {
        setHoveredThumbnail(index);
    };

    const handleThumbnailLeave = () => {
        setHoveredThumbnail(null);
    };

    const sweetbobimgs = [
        'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Sweetbob/sweetbob1.jpg',
        'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Sweetbob/sweetbob2.jpg',
        'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Sweetbob/sweetbob3.jpg',
    ];

    return (
        <>
            <Slider {...settings}>
                {sweetbobimgs.map((sweetbobimgs, index) => (
                    <div key={index} className={styles.thumbnailWrapper}>
                        <img
                            src={sweetbobimgs}
                            alt={`Thumbnail ${index + 1}`}
                            className={styles.thumbnail}
                            onMouseEnter={() => handleThumbnailHover(index)}
                            onMouseLeave={handleThumbnailLeave}
                        />
                        {hoveredThumbnail === index && (
                            <div className={styles.previewVideo}>
                                {/* Add your preview video component here */}
                            </div>
                        )}
                    </div>
                ))}
            </Slider>
        </>
    )
}

export default Sweetbob