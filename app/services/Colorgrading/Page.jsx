'use client'
import React from 'react'
import styles from '../Services.module.css'

export const Page = () => {
    return (
        <>
            <div className={styles.servicegrid}>
                <div className={styles.text}>

                    <h2>Color grading</h2>
                    <h3>Haal het maximale uit je beelden d.m.v color grading</h3>
                    <p>Doormiddel van het toepassen van kleurcorrecties en het creëren van een adequate look geven we jouw beelden een high-end uitstraling. Of het nu gaat om commercials, films, documentaires of andere mediaproducties, wij werken nauw samen om met jou de gewenste look en feel te creëren. Met color grading tillen we jouw project naar het hoogst haalbare niveau.</p>

                </div>
            </div>
            <div className={styles.contact}>
                <a>Contact</a>
            </div>
        </>
    )
}

export default Page;