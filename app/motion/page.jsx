import React from 'react'
import styles from './motion.module.css'
import Ctabanner from '../components/ctabanner/Ctabanner';


const Motion = () => {
    return (
        <>
            <div className={styles.servicegrid}>
                <div className={styles.text}>
                    <h2>Motion design</h2>
                    <h3>Maak indruk met Motion Design</h3>
                    <p>Motion design is een breed begrip waar diverse aspecten onder vallen. Denk bijvoorbeeld aan creatieve animaties, visuele effecten en grafische elementen om een visueel spektakel te creëren dat onmiddellijk de aandacht trekt en een blijvende indruk achterlaat. Of je nu een bedrijfslogo wilt animeren, special effects nodig hebt of dat er iets weggepoetst moet worden, motion design voegt een wow factor toe aan jouw video.</p>
                    <h3>Van Leeuwen media neemt het uit handen</h3>
                    <p>Geen zin om urenlang te keyframen? Bij Van Leeuwen Media nemen we graag de complexiteit van Motion design uit handen. Onze Motion designer staat klaar om jouw project tot leven te brengen. Klaar om indruk te maken? Neem contact met ons op en ontdek wat we voor jou kunnen doen!</p>
                </div>
                <div className={styles.image}>
                    <img src='https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Motiondesign/Motion1.gif' />
                    {/* <img src='https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Motiondesign/Motion2.gif' /> */}
                    <img src='https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Motiondesign/Motion3.gif' />
                    <img src='https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Motiondesign/Motion4.gif' />

                </div>
            </div >
            {/* <div className={styles.contact}>
                <a>Contact</a>
            </div> */}
            <Ctabanner />
        </>
    )
}

export default Motion;