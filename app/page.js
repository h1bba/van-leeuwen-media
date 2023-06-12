import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import SelectedWork from './components/work/SelectedWork'
import { BsFillPaletteFill } from 'react-icons/bs'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { BsSpeakerFill} from 'react-icons/bs'
import { BsSunriseFill } from 'react-icons/bs'



const Home = () => {
  return (
    <>
      <h2 className={styles.herotxt}><span className="color-orange-bold">“</span>Elevate your brand with our <span className="color-orange">creative</span> video solutions<span className="color-orange-bold">”</span></h2>
      <div className="grid-container">
        <div className={styles.grid1}>
          <div className="ph br"></div>
        </div>
      </div>
      <div className="services-container">
      <h2 className={styles.herotxt}><span className="color-orange-bold">“</span>Elevate your brand with our <span className="color-orange">creative</span> video solutions<span className="color-orange-bold">”</span></h2>
      <div className="services-flex">
          <div className="services-badge br">
            <BsFillCameraVideoFill /><h2 className="service-title">Film/video</h2>
            <p className="service-desc">Lorem Ipsum</p>
          </div>

          <div className="services-badge br">
            <BsSunriseFill /><h2 className="service-title">Motion design</h2>
          </div>

          <div className="services-badge br">
          <BsFillPaletteFill /><h2 className="service-title">Color Grading</h2>
          </div>

          <div className="services-badge br">
            <BsSpeakerFill /><h2 className="service-title">Sound design</h2>
          </div>
      </div>
      </div>

    </>

  );
}

export default Home;
