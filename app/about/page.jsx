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

                <div style={{ maxWidth: '72%', fontSize: '54px' }}>
                    <p>
                        Van Leeuwen Media staat voor creatieve high-end mediaoplossingen.
                        Daarmee doelen we op mediaoplossingen met een unieke en creatieve benadering.
                    </p>
                </div>
                <div style={{ maxWidth: '73%', fontSize: '36px', marginLeft: 'auto', marginRight: '0' }}>
                    <p>We streven naar doeltreffende oplossingen die bedrijven en organisaties verder helpen. We werken nauw samen met een team van specialisten omdat we geloven dat een scherp oog voor detail in elk aspect leidt tot het beste resultaat.</p>
                    <p>Bij Van Leeuwen Media streven we naar unieke en verrassende resultaten, waarbij we afstappen van generieke video&apos;s. We willen onze kijkers telkens weer verbluffen met onze creatieve aanpak.</p>
                </div>
                <h2 style={{ textAlign: 'right', fontSize: '3.375rem' }}>Team</h2>
            </div>




            <Team />
            <Ctabanner />

        </div >
    )
}

export default About