/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import styles from './film.module.css'
import Ctabanner from '../components/ctabanner/Ctabanner';
import Head from 'next/head';
import { Fade } from 'react-awesome-reveal';
import { Mulish } from "next/font/google";
const mulish = Mulish({ subsets: ['latin'] })

const Film = () => {
    return (
        <>
            <Head>
                <title>Video/film Productie | Van Leeuwen Media</title>
                <meta
                    name="description"
                    content="Imponeer met onze creatieve high-end video/filmoplossingen. Breng jouw visie tot leven met onze creatieve high-end video-oplossingen. Wij leveren visuele content die fascineert en verrast, waarbij out-of-the-box denken geen taboe is. Met indrukwekkende cinematografie, meeslepende storytelling en het oog voor detail van specialisten tillen we jouw project naar een hoger niveau. Vertrouw op onze creatieve expertise voor een onvergetelijke videobeleving."
                />
            </Head>
            <main className={mulish.className}>
                <div className={styles.servicegrid}>
                    <div className={styles.text}>
                        <Fade cascade damping={0.1} triggerOnce>
                            <h2>Video/Film producties</h2>
                            <h3>Imponeer met onze creatieve high-end video/filmoplossingen.</h3>
                            <p>Breng jouw visie tot leven met onze creatieve high-end video-oplossingen. Wij leveren visuele content die fascineert en verrast, waarbij out-of-the-box denken geen taboe is. Met indrukwekkende cinematografie, meeslepende storytelling en het oog voor detail van specialisten tillen we jouw project naar een hoger niveau. Vertrouw op onze creatieve expertise voor een onvergetelijke videobeleving.</p>
                            <h3>Preproductie</h3>
                            <p>Ons preproductieproces legt het fundament voor onze creatieve high-end video-oplossingen, waarbij we streven naar doeltreffende video&apos;s. We werken nauw samen met jou om de visie te begrijpen. Met een nauwkeurige planning, creatieve conceptontwikkeling en zorgvuldig onderzoek zorgen we ervoor dat elk detail klopt. Om vervolgens het script te verfijnen en de beste crew en locaties te selecteren.</p>
                            <h3>Productie</h3>
                            <p>Tijdens de productiedagen zelf organiseren wij een vlotte en georganiseerde uitvoering. Met de combinatie van goede belichting, compositie, framing en high-end apparatuur zorgt onze crew voor een verbluffende visuele kwaliteit. Naast de visuele kwaliteit zorgt de regisseur ervoor dat de juiste visie wordt overgebracht voor een doeltreffend resultaat.</p>
                            <h3>Postproductie</h3>
                            <p>Onze postproductieafdeling is gespecialiseerd in het transformeren van ruwe beelden tot meesterwerken. Met expertise in Editing, Color grading, Motion design en Sound design geven we jouw project een high-end look. Met prachtige kleuren, visuele effecten en meeslepende audio brengen we jouw visie tot leven in de postproductie!</p>
                        </Fade>
                        <ul className={styles.categories}>
                            <Fade cascade damping={0.2} triggerOnce>
                                <li>Commercial</li>
                                <li>Corporate</li>
                                <li>Fictional</li>
                                <li>Social</li>
                            </Fade>
                        </ul>
                    </div>
                    <div className={styles.images}>
                        <div className={styles.imagessticky}>
                            <Fade cascade triggerOnce>

                                <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Bikker/Autofirst2.jpg" alt='Autofirst commercial'></img>
                                <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Bula/bula1.jpg" alt='Bula Pano De Prato commercial'></img>
                                <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQcom/LKQcom3.jpg" alt='LKQ commercial'></img>

                                <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Sweetbob/sweetbob1.jpg" alt='Sweet Bob commercial'></img>
                            </Fade>
                        </div>
                    </div>
                </div>
                <Ctabanner />
            </main>

        </>
    )
}

export default Film;
