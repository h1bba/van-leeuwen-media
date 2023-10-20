'use client'
import React from 'react'
import styles from './page.module.css'
import Team from '../components/team/Team'
import Image from 'next/image'
import Ctabanner from '../components/ctabanner/Ctabanner'
import { Mulish } from "next/font/google";
const mulish = Mulish({ subsets: ['latin'] })

const About = () => {
    return (
        <main className={mulish.className}>
            <div className={styles.aboutpage}>
                <div className={styles.aboutwidth}>
                    <h2 className={styles.pagetitle}>Over ons</h2>

                    <div className={styles.w72}>
                        <h3>
                            Van Leeuwen Media staat voor creatieve high-end mediaoplossingen.
                        </h3>
                        <p style={{ marginBottom: '3em' }}>Daarmee doelen we op mediaoplossingen met een unieke en creatieve benadering. We streven naar doeltreffende oplossingen die bedrijven en organisaties verder helpen. We werken nauw samen met een team van specialisten omdat we geloven dat een scherp oog voor detail in elk aspect leidt tot het beste resultaat.</p>
                    </div>
                    <div className={styles.aboutimages}>
                        <img className={styles.overonsfotos} src='https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/About1.jpg' alt='' />
                        <img className={styles.overonsfotos} src='https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/About3.jpg' alt='' />
                    </div>

                    <div className={styles.rightcont}>
                        <h3>Minder generiek, meer creatief</h3>
                        <p>Bij Van Leeuwen Media streven we naar unieke en verrassende resultaten, waarbij we afstappen van generieke video&apos;s, daar zijn er immers al zo veel van. We willen onze kijkers telkens weer verrassen met een onvoorspelbaar script en een oogverbluffend plaatje. </p>
                    </div>
                    {/* <div>
                    <img className={styles.overonsfotos} src='https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/About2.jpg' alt='' />
                </div> */}
                    <div className={styles.w72}>
                        <h3>Welke diensten bieden wij aan?</h3>
                        <p style={{ marginBottom: '3em' }}>Wij bieden we een breed scala aan diensten aan, waaronder volledige Video & Film producties maar ook losse diensten zoals Color grading, Sound design en Motion design. Hierover is meer te lezen op onze diensten pagina waarbij we elke dienst uitgebreid beschrijven.</p>
                        <a href='/services' className={styles.servicebutton}>Bekijk diensten</a>
                    </div>
                    <h2 className={styles.teamtext}>Team</h2>
                </div>

                <Team />
                <Ctabanner />

            </div >
        </main>
    )
}

export default About