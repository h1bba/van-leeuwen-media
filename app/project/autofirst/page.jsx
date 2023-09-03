import React from 'react'
import styles from '../project.module.css'
import Arrow from '../../../public/SingleArrow.svg'
import Image from 'next/image'


const Pegasus = () => {
    const video = 'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Bikker/Autofirst+Bikker.mp4'
    return (
        <>
            <div className={styles.page}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '2em' }}>
                    <a href='/'>
                        <Image src={Arrow} height={40} alt='' />
                    </a>
                    <h2 style={{ textAlign: 'center', fontSize: '3.375rem', fontWeight: '400' }}> Autofirst | Geen gedoe, goed geregeld</h2 >
                </div>
                <div className={styles.videocontainer}>
                    <video autoPlay muted loop controls >
                        <source src={video} type="video/mp4" />
                    </video>
                    <div className={styles.videoinfo}>
                        <div className={styles.infoflex}>
                            <div>
                                <h3>Klant</h3>
                                <p>AutoFirst</p>
                            </div>
                            <div>
                                <h3>Categorie</h3>
                                <p>Commercial</p>
                            </div>
                            <div className={styles.diensten}>
                                <ul>
                                    <li>Video/film productie</li>
                                    <li>Color grading</li>
                                    <li>Sound design</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={styles.grid}>
                        <div>
                            <p>Autobedrijf Bikker stond voor een uitdaging: het promoten van het onderhoud van elektrische voertuigen. Dankzij de landelijke omgeving ontstond er een natuurlijk conflict dat we op een creatieve manier wilden benaderen. Een boer die zijn Tesla naar het autobedrijf bracht voor onderhoud.</p>
                        </div>
                        <div className={styles.gridimgs}>
                            <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Bikker/Autofirst1.jpg"></img>
                        </div>

                        <div className={styles.gridimgs}>
                            <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Bikker/Autofirst2.jpg"></img>
                        </div>
                        <div>
                            <p>Het contrast tussen het traditionele boerenleven en de moderne elektrische auto zorgde voor een unieke dynamiek in de commercial.</p>
                        </div>
                        <div>
                            <p>Met humor wisten we een boeiende video te creëren die de essentie van elektrisch onderhoud benadrukte. Als uitsmijter zie je de boer lachend wegrijden in zijn Tesla, met een hooikar volgeladen achterop. Deze verrassende combinatie van moderniteit en landelijkheid laat de kijkers met een glimlach achter.</p>
                        </div>
                        <div className={styles.gridimgs}>
                            <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Bikker/Autofirst3.jpg"></img>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Pegasus