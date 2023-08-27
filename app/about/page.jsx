'use client'
import React from 'react'
import styles from './page.module.css'
import Team from '../components/team/Team'
import Image from 'next/image'

const About = () => {
    return (
        <div className={styles.aboutpage}>
            <h2 style={{ textAlign: 'center', fontSize: '3.375rem' }}>Over ons</h2>
            <div className={styles.aboutcontainer}>
                <div>
                    <p>Van Leeuwen Media staat voor creatieve high-end mediaoplossingen. Daarmee doelen we op mediaoplossingen met een unieke en creatieve benadering. We streven naar doeltreffende oplossingen die bedrijven en organisaties verder helpen. We werken nauw samen met een team van specialisten omdat we geloven dat een scherp oog voor detail in elk aspect leidt tot het beste resultaat. Bij Van Leeuwen Media streven we naar unieke en verrassende resultaten, waarbij we afstappen van generieke video&apos;s. We willen onze kijkers telkens weer verbluffen met onze creatieve aanpak. </p>
                </div>
                <div>
                    <div className={styles.imgbg}></div>
                </div>
            </div>
            <div className={styles.aboutcontainer2}>

                <div>
                    <p>Als bedrijf bieden we een breed scala aan diensten aan, waaronder volledige video & film producties maar ook losse diensten zoals color grading, sound design en motion design.</p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <a style={{ color: 'white', backgroundColor: '#FF8500', padding: '1em', borderRadius: '1em', fontSize: '1.5rem', textAlign: 'center', margin: '0 auto' }}>Diensten</a>
                    </div>
                </div>
                <div>
                    <div className={styles.imgbg2}></div>
                </div>
            </div>



            <h2 style={{ textAlign: 'center', fontSize: '3.375rem' }}>Team</h2>
            <Team />

        </div >
    )
}

export default About