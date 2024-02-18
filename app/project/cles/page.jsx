/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import styles from '../project.module.css'
import Arrow from '../../../public/SingleArrow.svg'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import Head from 'next/head'
import { Mulish } from "next/font/google";
const mulish = Mulish({ subsets: ['latin'] })

const Pegasus = () => {
    const video = 'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Cles/Da+Pele+Pra+Fora+Official+Music+Video.mp4'
    return (
        <>
            <Head>
                <title>Cles - Da Pele Pra Fora</title>
            </Head>
            <main className={mulish.className}>
                <div className={styles.page}>
                    <div className={styles.backarrow}>
                        <Fade cascade damping={0.2}>

                            <a href='/'>
                                <Image src={Arrow} height={40} alt='Back arrow' />
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
                                        <p>Cles</p>
                                    </div>
                                    <div>
                                        <h3>Categorie</h3>
                                        <p>Fictional</p>
                                    </div>
                                    <div className={styles.diensten}>
                                        <ul>
                                            <li>Video/film productie</li>
                                            <li>Color grading</li>
                                        </ul>
                                    </div>
                                </Fade>

                            </div>
                        </div>

                        <div className={styles.grid}>
                            <Fade cascade damping={0.2}>

                                <div>
                                    <p>Voor de artiest Cles hebben wij een serie videoclips geproduceerd op het mooie eiland Kreta. Hierbij hebben we gedraaid met een gereduceerde maar krachtige crew op meerdere adembenemende prachtige locaties op het eiland.</p>
                                </div>
                                <div className={styles.gridimgs}>
                                    <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Cles/da+pele+pra+fora+4.jpg" alt='Cles - Da Pele Pra Fora Still'></img>
                                </div>

                                <div className={styles.gridimgs}>
                                    <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Cles/da+pele+pra+fora.jpg" alt='Cles - Da Pele Pra Fora Still'></img>
                                </div>
                                <div>
                                    <p>In de videoclip &quot;Da Pele pra Fora&quot; worden de interne gedachten in contrast gezet met de externe gedachten van de artiest. De boodschap van het nummer is om de interne gedachten naar buiten te uiten en te laten gaan. Hierbij heeft elke individuele scène een betekenis en achterliggende gedachte, waarbij de artiest in de ene scène worstelt met zijn innerlijke gedachten en emoties, terwijl hij in de andere scène zichzelf volledig heeft geaccepteerd en de emoties heeft losgelaten.</p>
                                </div>
                                <div>
                                    <p>Dit project laat onze passie zien voor het vertellen van verhalen door middel van film en muziek. We zijn dankbaar voor de kans om samen te werken met Cles en kijken uit naar toekomstige creatieve avonturen.</p>
                                </div>
                                <div className={styles.gridimgs}>
                                    <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Cles/Da+pele+pra+fora2.jpg" alt='Cles - Da Pele Pra Fora Still'></img>
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