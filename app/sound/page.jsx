import React from 'react'
import styles from './sound.module.css'
import Ctabanner from '../components/ctabanner/Ctabanner';


const Sound = () => {
    return (
        <>
            <div className={styles.servicegrid}>
                <div className={styles.text}>
                    <h2>Sound design</h2>
                    <h3>Maak je video compleet met sound design</h3>
                    <p>Audio is een essentieel onderdeel van een geslaagde video en vereist speciale expertise. Versterk het verhaal dat je wilt vertellen met sound design, creëer een meeslepende auditieve ervaring en voeg een nieuwe dimensie toe aan jouw video!. Laat ons het geluid van jouw video naar een hoger niveau tillen.</p>
                    <h3>Sound design op Maat</h3>
                    <p>Wij bieden jou de keuze. Of het nu gaat om op maat gecomponeerde muziekstukken die naadloos passen bij de sfeer en het verhaal van je video, of het selecteren van bestaande muziek die perfect aansluit. Wij zorgen ervoor dat de muziek de essentie van de video versterkt. De toon, emotie en boodschap worden weerspiegeld in elke noot van de soundtrack.</p>
                    <h3>Dynamische geluidseffecten & volley&apos;s</h3>
                    <p>Met onze expertise in effecten voegen we diepte en realisme toe aan je video. Of het nu gaat om het knetteren van een open haard, het nabootsen van voetstappen of het kraken van een tak, we zorgen ervoor dat elk geluid perfect past en een impact heeft. Met een focus op geloofwaardigheid en emotionele betrokkenheid tillen we de auditieve ervaring van je video naar een hoger niveau, waardoor jouw boodschap nog krachtiger overkomt.</p>
                    <h3>Geluidsmix en Master</h3>
                    <p>Onze Sound Designer zorgt voor een nauwkeurige geluidsmix en master, waarbij alle audio-elementen perfect in balans zijn. Of het nu gaat om dialoog, muziek, geluidseffecten of stilte, we leveren geluid van de hoogste kwaliteit.</p>
                    <h3>Laat ons jou helpen om impact te maken</h3>
                    <p>Een goede video bestaat uit drie hoofdelementen, een goed verhaal, mooie beelden en goede audio! Goede audio mag dus niet ontbreken en is een expertise apart. Laat ons jou helpen om de essentie van jouw video extra goed door te laten dringen!</p>
                </div>
            </div>
            {/* <div className={styles.contact}>
                <a>Contact</a>
            </div> */}
            <Ctabanner />
        </>
    )
}

export default Sound;