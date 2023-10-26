'use client'
import React from 'react'
import styles from '../project.module.css'
import Arrow from '../../../public/SingleArrow.svg'
import Image from 'next/image'
import Head from 'next/head'
import { Mulish } from "next/font/google";
import { Fade } from 'react-awesome-reveal';
const mulish = Mulish({ subsets: ['latin'] })

const Sweetbob = () => {
  const video = 'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Sweetbob/Sweet+Bob.mp4'
  return (
    <>
      <Head>
        <title>Sweet bob | Van Leeuwen Media</title>
      </Head>
      <main className={mulish.className}>
        <div className={styles.page}>
          <div className={styles.backarrow}>
            <Fade cascade damping={0.2}>
              <a href='/'>
                <Image src={Arrow} height={40} alt='' />
              </a>
              <h2 className={styles.title}> Sweet Bob | Dare to share, goed geregeld</h2 >
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
                    <p>Sweet Bob</p>
                  </div>
                  <div>
                    <h3>Categorie</h3>
                    <p>Commercial</p>
                  </div>
                  <div className={styles.diensten}>
                    <ul>
                      <li>Video/film productie</li>
                      <li>Color grading</li>
                      <li>Sound design</li>
                    </ul>
                  </div>
                </Fade>
              </div>
            </div>

            <div className={styles.grid}>
              <Fade cascade damping={0.2}>

                <div>
                  <p>Of het nu gaat om het delen van ervaringen of het delen van de heerlijke Braziliaanse lekkernijen van Sweet Bob, het motto van Sweet Bob is altijd &quot;Dare to share&quot;. Het was een fantastische uitdaging voor ons om dit concept tot leven te brengen in een pakkende commercial.</p>
                </div>
                <div className={styles.gridimgs}>
                  <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Sweetbob/sweetbob1.jpg"></img>
                </div>

                <div className={styles.gridimgs}>
                  <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Sweetbob/sweetbob2.jpg"></img>
                </div>
                <div>
                  <p>In de commercial laten we zien hoe Sweet Bob de kracht heeft om je dag compleet te veranderen en zelfs je stemming te verbeteren. We tonen het verhaal van Marcelo die aanvankelijk inspiratieloos lijkt, maar wanneer Marcelo Sweet Bob bezoekt, wordt hij geïnspireerd om te delen.</p>
                </div>
                <div>
                  <p>Het delen van ervaringen, positiviteit en lekkernijen. Dit allemaal onder het genot van chocolade bonbons & de heerlijke omgeving &quot;de Jordaan&quot;.</p>
                </div>
                <div className={styles.gridimgs}>
                  <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Sweetbob/sweetbob3.jpg"></img>
                </div>
              </Fade>
            </div>

          </div>
        </div>
      </main>

    </>
  )
}

export default Sweetbob