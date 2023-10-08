'use client'
import React from 'react'
import styles from './page.module.css'
import Team from '../components/team/Team'
import Image from 'next/image'
import Ctabanner from '../components/ctabanner/Ctabanner'

const About = () => {
    return (
        <div className={styles.aboutpage}>
            <div style={{ maxWidth: '80%', margin: '0 auto', padding: '1em' }}>
                <h2 style={{ textAlign: 'right', fontSize: '3.375rem' }}>Over ons</h2>

                <div style={{ maxWidth: '72%' }}>
                    <h3 style={{ fontSize: '54px', fontWeight: '400', marginBottom: '0.4em' }}>
                        Van Leeuwen Media staat voor creatieve high-end mediaoplossingen.
                    </h3>
                    <p style={{ fontSize: '36px' }}>Daarmee doelen we op mediaoplossingen met een unieke en creatieve benadering. We streven naar doeltreffende oplossingen die bedrijven en organisaties verder helpen. We werken nauw samen met een team van specialisten omdat we geloven dat een scherp oog voor detail in elk aspect leidt tot het beste resultaat.</p>
                </div>
                <div style={{ maxWidth: '73%', fontSize: '36px', marginTop: '4em', marginLeft: 'auto', marginRight: '0' }}>
                    <h3 style={{ fontSize: '54px', marginBottom: '0.4em', fontWeight: '400' }}>Minder generiek, meer creatief</h3>
                    <p>Bij Van Leeuwen Media streven we naar unieke en verrassende resultaten, waarbij we afstappen van generieke video&apos;s, daar zijn er immers al zo veel van. We willen onze kijkers telkens weer verrassen met een onvoorspelbaar script en een oogverbluffend plaatje.</p>
                </div>
                <div style={{ maxWidth: '72%', fontSize: '36px', marginTop: '4em' }}>
                    <h3 style={{ fontSize: '54px', fontWeight: '400', marginBottom: '0.4em' }}>Welke diensten bieden wij aan?</h3>
                    <p style={{ fontSize: '36px', marginBottom: '1.2em' }}>Als bedrijf bieden we een breed scala aan diensten aan, waaronder volledige Video & Film producties maar ook losse diensten zoals Color grading, Sound design en Motion design. Hierover is meer te lezen op onze diensten pagina waarbij we elke dienst uitgebreid beschrijven.</p>
                    <a href='/services' className={styles.servicebutton} style={{}}>Bekijk diensten</a>

                </div>
                <h2 style={{ textAlign: 'right', fontSize: '3.375rem' }}>Team</h2>
            </div>




            <Team />

            {/* <Teamcarousel /> */}
            <Ctabanner />

        </div >
    )
}

export default About