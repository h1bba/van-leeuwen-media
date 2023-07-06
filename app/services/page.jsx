'use client'
import React, { useState } from 'react';
import styles from './Services.module.css';

const Services = () => {
    const [selectedService, setSelectedService] = useState('');

    const handleServiceClick = (service) => {
        setSelectedService(service);
    };

    return (
        <div>
            <div className={styles.quotecontainer}>
                <p className={styles.quotetext}>
                    Door het samenvoegen van specialisten ontstaat een scherp oog voor detail in elk aspect
                </p>
            </div>

            <ul className={styles.servicesmenu}>
                <li
                    className={selectedService === 'video' ? styles.selectedService : ''}
                    onClick={() => handleServiceClick('video')}
                >
                    Video/film
                </li>
                <li
                    className={selectedService === 'motion' ? styles.selectedService : ''}
                    onClick={() => handleServiceClick('motion')}
                >
                    Motion design
                </li>
                <li
                    className={selectedService === 'color' ? styles.selectedService : ''}
                    onClick={() => handleServiceClick('color')}
                >
                    Color grading
                </li>
                <li
                    className={selectedService === 'sound' ? styles.selectedService : ''}
                    onClick={() => handleServiceClick('sound')}
                >
                    Sound design
                </li>
            </ul>

            {selectedService === 'video' && (
                <div className={styles.serviceContent}>
                    <div className={styles.description}>
                        <h2>Imponeer met onze creatieve high-end video/filmoplossingen.</h2>
                        <p>Breng jouw visie tot leven met onze creatieve high-end video-oplossingen. Wij leveren visuele content die fascineert en verrast, waarbij out-of-the-box denken geen taboe is. Met indrukwekkende cinematografie, meeslepende storytelling en het oog voor detail van specialisten tillen we jouw project naar een hoger niveau. Vertrouw op onze creatieve expertise voor een onvergetelijke videobeleving.</p>
                        <h2>Preproductie</h2>
                        <p>Ons preproductieproces legt het fundament voor onze creatieve high-end video-oplossingen, waarbij we streven naar doeltreffende video&apos;s. We werken nauw samen met jou om de visie te begrijpen. Met een nauwkeurige planning, creatieve conceptontwikkeling en zorgvuldig onderzoek zorgen we ervoor dat elk detail klopt. We werken nauw samen met jou om de visie te begrijpen, het script te verfijnen en de beste crew en locaties te selecteren.</p>
                        <h2>Productie</h2>
                        <p>Tijdens de productiedagen zelf zorgen we voor een vlotte en georganiseerde uitvoering. Met de combinatie van goede belichting, compositie, framing en high-end apparatuur zorgt onze crew voor een verbluffende visuele kwaliteit. Naast de visuele kwaliteit zorgt de regisseur ervoor dat de juiste visie wordt overgebracht voor een doeltreffend resultaat.</p>
                        <h2>Postproductie</h2>
                        <p>Onze postproductieafdeling is gespecialiseerd in het transformeren van ruwe beelden tot meesterwerken. Met expertise in editing, color grading, motion design en sound design geven we jouw project een high-end look. Met prachtige kleuren, visueel verbluffende effecten en meeslepende audio brengen we jouw visie tot leven in de postproductie!</p>
                        <ul>
                            <li>Commercial</li>
                            <li>Corporate</li>
                            <li>Fictional</li>
                            <li>Social</li>
                        </ul>
                    </div>
                    <div className={styles.stills}>
                    </div>
                </div>
            )
            }

            {
                selectedService === 'motion' && (
                    <div className={styles.serviceContent}>
                        <h2>Maak indruk met motion design</h2>
                        <p>Met creatieve animaties, visuele effecten en grafische elementen creëren we een visueel spektakel dat de aandacht trekt en indruk maakt. Wij brengen jouw beelden tot leven met onze expertise in motion design en creëren een blijvende impact. Met motion design voeg je een extra laag aan visuele aantrekkingskracht toe aan je project, of het nu gaat om animaties, logo&apos;s, promotiemateriaal of digitale content.</p>
                    </div>
                )
            }

            {
                selectedService === 'color' && (
                    <div className={styles.serviceContent}>
                        <h2>Haal het maximale uit je beelden d.m.v color grading</h2>
                        <p>Doormiddel van het toepassen van kleurcorrecties en het creëren van een adequate look geven we jouw beelden een high-end uitstraling. Of het nu gaat om commercials, films, documentaires of andere mediaproducties, wij werken nauw samen om met jou de gewenste look en feel te creëren. Met color grading tillen we jouw project naar het hoogst haalbare niveau.</p>
                    </div>
                )
            }

            {
                selectedService === 'sound' && (
                    <div className={styles.serviceContent}>
                        <h2>Maak je video compleet met sound design</h2>
                        <p>Audio is een essentieel onderdeel van een geslaagde video en vereist speciale expertise. Versterk het verhaal dat je wilt vertellen met onze unieke composities, dynamische geluidseffecten en een nauwkeurige geluidsmix. Met sound design creëer je een meeslepende auditieve ervaring en voeg je een nieuwe dimensie toe aan jouw video. Laat ons het geluid van je video naar een hoger niveau tillen.</p>
                        {/* Add your content here */}
                    </div>
                )
            }
        </div >
    );
};

export default Services;