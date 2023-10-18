import React from 'react'
import styles from '../project.module.css'
import Arrow from '../../../public/SingleArrow.svg'
import Image from 'next/image'
import { Mulish } from "next/font/google";
const mulish = Mulish({ subsets: ['latin'] })

const LKQcom = () => {
    const video = 'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQcom/Lkq+Commercial.mp4'
    return (
        <>
            <main className={mulish.className}>
                <div className={styles.page}>
                    <div className={styles.backarrow}>
                        <a href='/'>
                            <Image src={Arrow} height={40} alt='' />
                        </a>
                        <h2 className={styles.title}> LKQ | Keeping you moving</h2 >
                    </div>
                    <div className={styles.videocontainer}>
                        <video autoPlay muted loop controls >
                            <source src={video} type="video/mp4" />
                        </video>
                        <div className={styles.videoinfo}>
                            <div className={styles.infoflex}>
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
                            </div>
                        </div>

                        <div className={styles.grid} style={{ marginTop: '4em' }}>
                            <div>
                                <p>LKQ stond voor een uitdaging: het optimaliseren van hun onboardingstraject. Ze benaderden ons met de vraag om een video te maken die nieuw personeel zou laten zien hoe essentieel LKQ is voor de samenleving.</p>
                            </div>
                            <div className={styles.gridimgs}>
                                <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQcom/LKQcom1.jpg"></img>
                            </div>

                            <div className={styles.gridimgs}>
                                <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQcom/LKQcom2.jpg"></img>
                            </div>
                            <div>
                                <p>In de video hebben we op een leuke en speelse manier een essentieel beroep verwerkt: de verloskundige. We wilden de kijkers laten zien hoe belangrijk en waardevol LKQ is in de dagelijkse werkzaamheden van de verloskundige. Ook was het belangrijk voor LKQ dat de medewerkers zich betrokken voelden, daarom hebben we meerdere functies in de video verwerkt, zoals orderpicker, chauffeur, binnendienstmedewerker, enzovoort.</p>
                            </div>
                            <div>
                                <p>Om ervoor te zorgen dat de boodschap in de hele Benelux begrepen kon worden, hebben we de video geleverd in drie verschillende talen: Nederlands, Vlaams en Frans. Op die manier konden we een breed publiek bereiken en het onboardingstraject van LKQ verbeteren. </p>
                            </div>
                            <div className={styles.gridimgs}>
                                <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQcom/LKQcom3.jpg"></img>
                            </div>

                        </div>

                    </div>
                </div>
            </main>

        </>
    )
}

export default LKQcom