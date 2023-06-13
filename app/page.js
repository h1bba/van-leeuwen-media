import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import SelectedWork from './components/work/SelectedWork'
import { BsFillPaletteFill } from 'react-icons/bs'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { BsSpeakerFill } from 'react-icons/bs'
import { BsSunriseFill } from 'react-icons/bs'
import Quote from './components/quote/Quote'



const Home = () => {
  return (
    <>
      <h2 className="herotxt"><span className="color-orange-bold">“</span>Elevate your brand with our <span className="color-orange">creative</span> video solutions<span className="color-orange-bold">”</span></h2>
      <div className="grid-container">
        <div className={styles.grid1}>
          <div className="ph br"></div>
        </div>
      </div>
      <div className="services-container">
        <h2 className="herotxt"><span className="color-orange-bold">“</span>Elevate your brand with our <span className="color-orange">creative</span> video solutions<span className="color-orange-bold">”</span></h2>
        <div className="services-flex">
          <div className="services-badge br">
            <BsFillCameraVideoFill /><h2 className="service-title">Film/video</h2>
            <p className="service-desc">Lorem ipsum dolor sit amet consectetur. Varius ridiculus porta scelerisque metus ipsum arcu orci. Magna dolor quam malesuada ac nunc pharetra et elementum. Mattis et convallis pellentesque elementum vel. Blandit pretium eget ut sed amet euismod volutpat.</p>
          </div>

          <div className="services-badge br">
            <BsSunriseFill /><h2 className="service-title">Motion design</h2>
            <p className="service-desc">Lorem ipsum dolor sit amet consectetur. Varius ridiculus porta scelerisque metus ipsum arcu orci. Magna dolor quam malesuada ac nunc pharetra et elementum. Mattis et convallis pellentesque elementum vel. Blandit pretium eget ut sed amet euismod volutpat.</p>
          </div>

          <div className="services-badge br">
            <BsFillPaletteFill /><h2 className="service-title">Color Grading</h2>
            <p className="service-desc">Lorem ipsum dolor sit amet consectetur. Varius ridiculus porta scelerisque metus ipsum arcu orci. Magna dolor quam malesuada ac nunc pharetra et elementum. Mattis et convallis pellentesque elementum vel. Blandit pretium eget ut sed amet euismod volutpat.</p>

          </div>

          <div className="services-badge br">
            <BsSpeakerFill /><h2 className="service-title">Sound design</h2>
            <p className="service-desc">Lorem ipsum dolor sit amet consectetur. Varius ridiculus porta scelerisque metus ipsum arcu orci. Magna dolor quam malesuada ac nunc pharetra et elementum. Mattis et convallis pellentesque elementum vel. Blandit pretium eget ut sed amet euismod volutpat.</p>
          </div>
        </div>
      </div>
      <Quote />


    </>

  );
}

export default Home;
