import React from 'react'
import styles from '../Services.module.css'


export const Sound = () => {
    return (
        <>
            <div className={styles.servicegrid}>
                <div className={styles.text}>
                    <h2>Sound design</h2>
                    <h3>Maak je video compleet met sound design</h3>
                    <p>Audio is een essentieel onderdeel van een geslaagde video en vereist speciale expertise. Versterk het verhaal dat je wilt vertellen met onze unieke composities, dynamische geluidseffecten en een nauwkeurige geluidsmix. Met sound design creëer je een meeslepende auditieve ervaring en voeg je een nieuwe dimensie toe aan jouw video. Laat ons het geluid van je video naar een hoger niveau tillen.</p>
                </div>
            </div>
            <div className={styles.contact}>
                <a>Contact</a>
            </div>
        </>
    )
}

export default Sound;