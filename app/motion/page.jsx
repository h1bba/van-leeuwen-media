/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import styles from './motion.module.css'
import Ctabanner from '../components/ctabanner/Ctabanner';
import Head from 'next/head';
import { Fade } from 'react-awesome-reveal';
import { Mulish } from "next/font/google";
const mulish = Mulish({ subsets: ['latin'] })

const Motion = () => {
    return (
        <>
            <Head>
                <title>Motion Design | Van Leeuwen Media</title>
                <meta
                    name="description"
                    content="Motion design is een breed begrip waar diverse aspecten onder vallen. Denk bijvoorbeeld aan creatieve animaties, visuele effecten en grafische elementen om een visueel spektakel te creëren dat onmiddellijk de aandacht trekt en een blijvende indruk achterlaat. Of je nu een bedrijfslogo wilt animeren, special effects nodig hebt of dat er iets weggepoetst moet worden, motion design voegt een wow factor toe aan jouw video."
                />
            </Head>
            <main className={mulish.className}>
                <div className={styles.servicegrid}>
                    <div className={styles.text}>
                        <Fade cascade damping={0.1} triggerOnce>

                            <h2>Motion design</h2>
                            <h3>Maak indruk met Motion Design</h3>
                            <p>Motion design is een breed begrip waar diverse aspecten onder vallen. Denk bijvoorbeeld aan creatieve animaties, visuele effecten en grafische elementen om een visueel spektakel te creëren dat onmiddellijk de aandacht trekt en een blijvende indruk achterlaat. Of je nu een bedrijfslogo wilt animeren, special effects nodig hebt of dat er iets weggepoetst moet worden, motion design voegt een wow factor toe aan jouw video.</p>
                            <h3>Van Leeuwen media neemt het uit handen</h3>
                            <p>Geen zin om urenlang te keyframen? Bij Van Leeuwen Media nemen we graag de complexiteit van Motion design uit handen. Onze Motion designer staat klaar om jouw project tot leven te brengen. Klaar om indruk te maken? Neem contact met ons op en ontdek wat we voor jou kunnen doen!</p>
                        </Fade>
                    </div>
                    <div className={styles.images}>
                        <div className={styles.imagessticky}>
                            <Fade cascade triggerOnce>
                                <img src='https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Motiondesign/Motion1.gif' alt='Motion design showcase' />
                                <img src='https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Motiondesign/Motion3.gif' alt='Motion design showcase' />
                                <img src='https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Motiondesign/Motion4.gif' alt='Motion design showcase' />
                            </Fade>
                        </div>
                    </div>
                </div >
                <Ctabanner />
            </main>
        </>
    )
}

export default Motion;