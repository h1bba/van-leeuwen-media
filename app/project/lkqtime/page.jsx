'use client'
import React from 'react'
import styles from '../project.module.css'
import Arrow from '../../../public/SingleArrow.svg'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import { Mulish } from "next/font/google";
const mulish = Mulish({ subsets: ['latin'] })

const LKQtime = () => {
  const video = 'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQtime/Lkq+Tijdlijn.mp4'
  return (
    <>
      <main className={mulish.className}>
        <div className={styles.page}>
          <div className={styles.backarrow}>
            <Fade cascade damping={0.2}>

              <a href='/'>
                <Image src={Arrow} height={40} alt='' />
              </a>
              <h2 className={styles.title}> LKQ | The future is now</h2 >
            </Fade>
          </div>
          <div className={styles.videocontainer}>
            <Fade>

              <video autoPlay muted loop controls >
                <source src={video} type="video/mp4" />
              </video>
            </Fade>
            <div className={styles.videoinfo}>
              <div className={styles.infoflex}>
                <Fade cascade damping={0.2}>

                  <div>
                    <h3>Klant</h3>
                    <p>LKQ</p>
                  </div>
                  <div>
                    <h3>Categorie</h3>
                    <p>Corporate</p>
                  </div>
                  <div className={styles.diensten}>
                    <ul>
                      <li>Motion design</li>
                    </ul>
                  </div>
                </Fade>
              </div>
            </div>

            <div className={styles.grid}>
              <Fade cascade damping={0.2}>
                <div>
                  <p>LKQ had de wens om een visueel verhaal te vertellen over de snelle vooruitgang van de tijd waarbij ze de boodschap wilden overbrengen : &quot;the future is now&quot;. Doormiddel van een vlotte reeks aan innovaties namen we de kijkers mee op een reis door de tijd, waarbij we belangrijke mijlpalen en technologische ontwikkelingen illustreerden.</p>
                </div>
                <div className={styles.gridimgs}>
                  <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQtime/LKQtime1.jpg"></img>
                </div>

                <div className={styles.gridimgs}>
                  <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQtime/LKQtime2.jpg"></img>
                </div>
                <div>
                  <p>Van oude voertuigen tot geavanceerde technologieën en innovatieve oplossingen, de video benadrukte de constante evolutie en vooruitgang in de autowereld. Door deze transformatie te laten zien, wilden we de kijkers inspireren en laten nadenken over de mogelijkheden en kansen die het heden en de toekomst bieden.</p>
                </div>
                <div>
                  <p>Naar mate de video vordert gaan de innovaties steeds sneller, hiermee reflecteren we op het feit dat we door de jaren heen ook steeds sneller zijn gaan innoveren.

                    “The future is now!”</p>
                </div>
                <div className={styles.gridimgs}>
                  <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQtime/LKQtime3.jpg"></img>
                </div>
              </Fade>
            </div>

          </div>
        </div>
      </main>

    </>
  )
}

export default LKQtime