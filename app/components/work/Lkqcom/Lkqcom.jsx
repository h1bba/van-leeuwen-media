import React, { useState } from 'react';
import Slider from 'react-slick';
import styles from '../SelectedWork.module.css';

const Lkqcom = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

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

    const handleMouseEnter = (index) => {
        setIsHovered(true);
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setHoveredIndex(null);
    };

    const lkqcomimgs = [
        'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQcom/LKQcom1.jpg',
        'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQcom/LKQcom2.jpg',
        'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQcom/LKQcom3.jpg',
    ];



    return (
        <Slider {...settings}>
            {lkqcomimgs.map((image, index) => (
                <div
                    key={index}
                    className={styles.thumbnailWrapper}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className={styles.thumbnail}
                    />
                    {isHovered && hoveredIndex === index && (
                        <div className={styles.previewVideo}>
                        </div>
                    )}
                </div>
            ))}
        </Slider>
    );
};

export default Lkqcom;
