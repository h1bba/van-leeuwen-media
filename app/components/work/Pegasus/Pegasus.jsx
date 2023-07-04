import React, { useState } from 'react';
import styles from '../SelectedWork.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Pegasus = () => {
  const [isHovered, setIsHovered] = useState(false);

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

  const pegasusPreviewMp4 =
    'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Pegasus/PegasusPreview.mp4';
  const pegasusPreviewWebm =
    'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Pegasus/PegasusPreview.webm';

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`${styles.pegasusContainer} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? (
        <video autoPlay loop muted className={styles.video}>
          <source src={pegasusPreviewMp4} type="video/mp4" />
          <source src={pegasusPreviewWebm} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Slider {...settings}>
          {Pegasusimgs.map((Pegasusimgs, index) => (
            <div key={index} className={styles.thumbnailWrapper}>
              <Image
                width={720}
                height={1080}
                src={Pegasusimgs}
                alt={`Pegasus`}
                className={styles.thumbnail}
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Pegasus;
