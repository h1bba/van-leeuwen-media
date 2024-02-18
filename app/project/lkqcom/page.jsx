/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import styles from '../project.module.css'
import Arrow from '../../../public/SingleArrow.svg'
import Image from 'next/image'
import Head from 'next/head'
import { Fade } from 'react-awesome-reveal'
import { Mulish } from "next/font/google";
const mulish = Mulish({ subsets: ['latin'] })

const LKQcom = () => {
    const video = 'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQcom/Lkq+Commercial.mp4'
    return (
        <>
            <Head>
                <title>LKQ | Van Leeuwen Media</title>
            </Head>
            <main className={mulish.className}>
                <div className={styles.page}>
                    <div className={styles.backarrow}>
                        <Fade cascade damping={0.2}>

                            <a href='/'>
                                <Image src={Arrow} height={40} alt='Back arrow' />
                            </a>
                            <h2 className={styles.title}> LKQ | Keeping you moving</h2 >
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
                                            <li>Video/film productie</li>
                                            <li>Color grading</li>
                                            <li>Sound design</li>
                                            <li>Motion design</li>
                                        </ul>
                                    </div>
                                </Fade>
                            </div>
                        </div>

                        <div className={styles.grid}>
                            <Fade cascade damping={0.2}>

                                <div>
                                    <p>LKQ stond voor een uitdaging: het optimaliseren van hun onboardingstraject. Ze benaderden ons met de vraag om een video te maken die nieuw personeel zou laten zien hoe essentieel LKQ is voor de samenleving.</p>
                                </div>
                                <div className={styles.gridimgs}>
                                    <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQcom/LKQcom1.jpg" alt='LKQ commercial'></img>
                                </div>

                                <div className={styles.gridimgs}>
                                    <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQcom/LKQcom2.jpg" alt='LKQ commercial'></img>
                                </div>
                                <div>
                                    <p>In de video hebben we op een leuke en speelse manier een essentieel beroep verwerkt: de verloskundige. We wilden de kijkers laten zien hoe belangrijk en waardevol LKQ is in de dagelijkse werkzaamheden van de verloskundige. Ook was het belangrijk voor LKQ dat de medewerkers zich betrokken voelden, daarom hebben we meerdere functies in de video verwerkt, zoals orderpicker, binnendienstmedewerker, chauffeur, enzovoort.</p>
                                </div>
                                <div>
                                    <p>Om ervoor te zorgen dat de boodschap in de hele Benelux begrepen kon worden, hebben we de video geleverd in drie verschillende talen: Nederlands, Vlaams en Frans. Op die manier konden we een breed publiek bereiken en het onboardingstraject van LKQ verbeteren.</p>
                                </div>
                                <div className={styles.gridimgs}>
                                    <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQcom/LKQcom3.jpg" alt='LKQ commercial'></img>
                                </div>
                            </Fade>
                        </div>

                    </div>
                </div>
            </main>

        </>
    )
}

export default LKQcom