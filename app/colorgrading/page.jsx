'use client'
import React from 'react'
import styles from './color.module.css'
import Ctabanner from '../components/ctabanner/Ctabanner';

const Colorgrading = () => {
    return (
        <>
            <div className={styles.servicegrid}>
                <div className={styles.text}>

                    <h2>Color grading</h2>
                    <h3>Haal het maximale uit jouw beelden met Color grading</h3>
                    <p>In de audiovisuele wereld is de waarde van een goede Colorist niet te onderschatten. Met Color grading, een geavanceerde techniek binnen de post-productie, krijgen jouw beelden een indrukwekkende transformatie. Of het nu gaat om commercials, films, documentaires of andere vormen van mediaproducties, color grading is de sleutel tot het bereiken van een high-end uitstraling. Wij zorgen ervoor dat jouw visie tot leven komt. Met behulp van Color Grading tillen we jouw project naar het hoogst haalbare niveau.</p>
                    <h3>Color correction</h3>
                    <p>Voor dat de daadwerkelijke Color Grading start zijn er meerdere facetten, beginnend bij color correction. Bij een color correction (kleurcorrectie) worden de shorts gecorrigeerd naar de juiste waarden. Hierbij wordt er gekeken naar drie elementen : exposure, contrast en kleur. Vervolgens moeten de shots gematcht worden zodat het één geheel wordt. Hoe goed de continuïteit op set ook is, er zijn bijna altijd correcties nodig om abrupte overgangen te voorkomen. </p>
                    <h3>Color grade</h3>
                    <p>Zodra alles gecorrigeerd en geordend is, begint het echte color graden. Hierbij streven we naar het creëren van een zo harmonisch mogelijk plaatje. Denk bijvoorbeeld aan het “pushen” van de kleuren naar complementaire kleuren, kleuren die tegen over elkaar staan op de kleurencirkel en hierdoor een prachtig contrast creëren. Of een rode trui die te veel opvalt en vervolgens een aangenamere kleur krijgt.</p>
                    <h3>Klaar om jouw beelden tot leven te brengen?</h3>
                    <p>Wij kijken samen met jou naar oplossingen die perfect passen bij jouw unieke project. We begrijpen dat elk project zijn eigen sfeer en karakter heeft, en daarom denken we graag met jou mee! Als de huisstijl van jouw klant bijvoorbeeld een prachtig blauw palet omvat, staan wij klaar om dat palet terug te laten komen in de beelden. Onze colorist staat garant voor een naadloze Color Grading-ervaring die de essentie van jouw project vastlegt en versterkt. Waar wacht je nog op? Neem vandaag nog contact op en ontdek hoe we jouw visie tot leven kunnen brengen met de kracht van Color grading!</p>
                </div>
            </div>
            {/* <div className={styles.contact}>
                <a>Contact</a>
            </div> */}
            <Ctabanner />
        </>
    )
}

export default Colorgrading;