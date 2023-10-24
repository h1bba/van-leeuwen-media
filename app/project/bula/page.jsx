'use client'
import React from 'react'
import styles from '../project.module.css'
import Arrow from '../../../public/SingleArrow.svg'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import { Mulish } from "next/font/google";
const mulish = Mulish({ subsets: ['latin'] })

const Pegasus = () => {
  const video = 'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Bula/Bula.mp4'
  return (
    <>
      <main className={mulish.className}>
        <div className={styles.page}>
          <div className={styles.backarrow}>
            <Fade cascade damping={0.2}>

              <a href='/'>
                <Image src={Arrow} height={40} alt='' />
              </a>
              <h2 className={styles.title}> Bula | Pano de prato</h2 >
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
                    <p>Bula</p>
                  </div>
                  <div>
                    <h3>Categorie</h3>
                    <p>Fictional</p>
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
                  <p>De Braziliaanse band Bula benaderde ons met de wens om een indrukwekkende videoclip te produceren voor hun eerste single van het nieuwe album &quot;Indivíduo Coletivo&quot;. Na vele succesvolle albums en hits wilden ze iets creëren dat alles zou overtreffen. We waren ontzettend enthousiast om deze internationale klus aan te pakken en we hebben onze koffers gepakt richting Santos (São Paulo), Brazilië.</p>
                </div>
                <div className={styles.gridimgs}>
                  <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Bula/bula1.jpg"></img>
                </div>

                <div className={styles.gridimgs}>
                  <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Bula/bula2.jpg"></img>
                </div>
                <div>
                  <p>Het nummer &quot;Pano de Prato&quot; beschrijft hoe mensen vaak geneigd zijn om naar anderen te wijzen en hun eigen fouten niet willen toegeven. In de clip wilden we deze boodschap overbrengen. We lieten zien dat het belangrijk is om eerst naar jezelf te kijken voordat je naar anderen wijst.</p>
                </div>
                <div>
                  <p>Een leuk aspect uit de clip is dat de bandleden zelf als edelfiguranten figureerden. Dit zorgt voor een persoonlijke en komische touch die de clip uniek maakt. Het is interessant om de bandleden, die bekend staan om hun muzikale talent, te zien in een compleet andere rol.</p>
                </div>
                <div className={styles.gridimgs}>
                  <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Bula/bula3.jpg"></img>
                </div>
              </Fade>
            </div>

          </div>
        </div>
      </main>

    </>
  )
}

export default Pegasus