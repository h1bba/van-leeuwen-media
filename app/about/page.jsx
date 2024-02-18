/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import Head from 'next/head'
import styles from './page.module.css'
import Team from '../components/team/Team'
import Image from 'next/image'
import Ctabanner from '../components/ctabanner/Ctabanner'
import { Mulish } from "next/font/google";
import { Fade } from 'react-awesome-reveal'
const mulish = Mulish({ subsets: ['latin'] })

const About = () => {
    return (
        <>
            <Head>
                <title>Over ons | Van Leeuwen Media</title>
                <meta name='description' content='Van Leeuwen Media staat voor creatieve high-end mediaoplossingen, daarmee doelen we op mediaoplossingen met een unieke en creatieve benadering. We streven naar doeltreffende oplossingen die bedrijven en organisaties verder helpen. We werken nauw samen met een team van specialisten omdat we geloven dat een scherp oog voor detail in elk aspect leidt tot het beste resultaat.' />
            </Head>
            <main className={mulish.className}>
                <div className={styles.aboutpage}>
                    <div className={styles.aboutwidth}>
                        <Fade>
                            <h2 className={styles.pagetitle}>Over ons</h2>
                        </Fade>
                        <div className={styles.w72}>
                            <Fade cascade damping={0.2}>

                                <h3>
                                    Van Leeuwen Media staat voor creatieve high-end mediaoplossingen.
                                </h3>
                                <p style={{ marginBottom: '3em' }}>Daarmee doelen we op mediaoplossingen met een unieke en creatieve benadering. We streven naar doeltreffende oplossingen die bedrijven en organisaties verder helpen. We werken nauw samen met een team van specialisten omdat we geloven dat een scherp oog voor detail in elk aspect leidt tot het beste resultaat.</p>
                            </Fade>
                        </div>
                        <Fade cascade damping={0.2}>

                            <div className={styles.aboutimages}>

                                <img className={styles.overonsfotos} src='https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/About1.jpg' alt='Professional production camera' />
                                <img className={styles.overonsfotos} src='https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/About3.jpg' alt='Filming production picture' />

                            </div>
                        </Fade>


                        <div className={styles.rightcont}>
                            <Fade cascade damping={0.2}>

                                <h3>Minder generiek, meer creatief</h3>
                                <p>Bij Van Leeuwen Media streven we naar unieke en verrassende resultaten, waarbij we afstappen van generieke video&apos;s, daar zijn er immers al zo veel van. We willen onze kijkers telkens weer verrassen met een onvoorspelbaar script en een oogverbluffend plaatje. </p>
                            </Fade>

                        </div>

                        <div className={styles.w72}>
                            <Fade cascade damping={0.2}>

                                <h3>Welke diensten bieden wij aan?</h3>
                                <p style={{ marginBottom: '3em' }}>Wij bieden we een breed scala aan diensten aan, waaronder volledige Video & Film producties maar ook losse diensten zoals Color grading, Sound design en Motion design. Hierover is meer te lezen op onze diensten pagina waarbij we elke dienst uitgebreid beschrijven.</p>
                                <a href='/services' className={styles.servicebutton}>Bekijk diensten</a>
                            </Fade>

                        </div>
                        <h2 className={styles.teamtext}>Team</h2>
                    </div>

                    <Team />
                    <Ctabanner />

                </div >
            </main>
        </>
    )
}

export default About