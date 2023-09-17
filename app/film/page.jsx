import React from 'react'
import styles from './film.module.css'
import Ctabanner from '../components/ctabanner/Ctabanner';


const Film = () => {
    return (
        <>
            <div className={styles.servicegrid}>
                <div className={styles.text}>
                    <h2>Video/Film producties</h2>
                    <h3>Imponeer met onze creatieve high-end video/filmoplossingen.</h3>
                    <p>Breng jouw visie tot leven met onze creatieve high-end video-oplossingen. Wij leveren visuele content die fascineert en verrast, waarbij out-of-the-box denken geen taboe is. Met indrukwekkende cinematografie, meeslepende storytelling en het oog voor detail van specialisten tillen we jouw project naar een hoger niveau. Vertrouw op onze creatieve expertise voor een onvergetelijke videobeleving.</p>
                    <h3>Preproductie</h3>
                    <p>Ons preproductieproces legt het fundament voor onze creatieve high-end video-oplossingen, waarbij we streven naar doeltreffende video&apos;s. We werken nauw samen met jou om de visie te begrijpen. Met een nauwkeurige planning, creatieve conceptontwikkeling en zorgvuldig onderzoek zorgen we ervoor dat elk detail klopt. We werken nauw samen met jou om de visie te begrijpen, het script te verfijnen en de beste crew en locaties te selecteren.</p>
                    <h3>Productie</h3>
                    <p>Tijdens de productiedagen zelf zorgen we voor een vlotte en georganiseerde uitvoering. Met de combinatie van goede belichting, compositie, framing en high-end apparatuur zorgt onze crew voor een verbluffende visuele kwaliteit. Naast de visuele kwaliteit zorgt de regisseur ervoor dat de juiste visie wordt overgebracht voor een doeltreffend resultaat.</p>
                    <h3>Postproductie</h3>
                    <p>Onze postproductieafdeling is gespecialiseerd in het transformeren van ruwe beelden tot meesterwerken. Met expertise in Editing, Color grading, Motion design en Sound design geven we jouw project een high-end look. Met prachtige kleuren, visueel verbluffende effecten en meeslepende audio brengen we jouw visie tot leven in de postproductie!</p>
                    <ul className={styles.categories}>
                        <li>Commercial</li>
                        <li>Corporate</li>
                        <li>Fictional</li>
                        <li>Social</li>
                    </ul>
                </div>
                <div className={styles.images}>
                    <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Bikker/Autofirst3.jpg"></img>
                    <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Pegasus/Pegasus3.jpg"></img>
                    <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Sweetbob/sweetbob1.jpg"></img>
                </div>
            </div>
            {/* <div className={styles.contact}>
                <a>Contact</a>
            </div> */}

            <Ctabanner />
        </>
    )
}

export default Film;
