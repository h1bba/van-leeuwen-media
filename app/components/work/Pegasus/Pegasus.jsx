import React, { useRef, useState } from 'react';
import styles from '../SelectedWork.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Pegasus = () => {


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


    const Pegasusimgs = [
        'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Pegasus/Pegasus1.jpg',
        'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Pegasus/Pegasus2.jpg',
        'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Pegasus/Pegasus3.jpg',
    ];

    return (
        <>
            <Slider {...settings}>
                {Pegasusimgs.map((Pegasusimgs, index) => (
                    <div key={index} className={styles.thumbnailWrapper}>
                        <img
                            src={Pegasusimgs}
                            alt={`Pegasus`}
                            className={styles.thumbnail}
                        />
                    </div>
                ))}
            </Slider>
        </>
    )
}

export default Pegasus