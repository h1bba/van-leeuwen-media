import React from 'react'
import styles from './Team.module.css'
import Image from 'next/image'


export const Team = () => {
    return (
        <section className={styles.teamcontainer}>
            <div className={styles.teammember}>
                <Image
                    src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Team/Fabio-van-Leeuwen.jpg"
                    height={720}
                    width={480}
                    style={{ objectFit: "cover" }}

                    alt="Fabio van Leeuwen - Producent & Video creator" />
                <h3>Fabio van leeuwen</h3>
                <h4>Producent & video creator</h4>
            </div>
            <div className={styles.teammember}>
                <Image
                    src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Team/Jordy-van-Leeuwen.jpg"
                    height={720}
                    width={480}
                    style={{ objectFit: "cover" }}

                    alt="Jordy van Leeuwen - Consultant & belichter" />
                <h3>Jordy van Leeuwen</h3>
                <h4>Consultant & belichter</h4>

            </div>
            <div className={styles.teammember}>
                <Image
                    src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Team/Nelson-Pinton.jpg"
                    height={720}
                    width={480}
                    style={{ objectFit: "cover" }}

                    alt="Nelson Pinton - Sound designer & componist" />
                <h3>Nelson Pinton</h3>
                <h4>Sound designer & componist</h4>
            </div>
            <div className={styles.teammember}>
                <Image
                    src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Team/Roger-Silveira.jpg"
                    height={720}
                    width={480}
                    style={{ objectFit: "cover" }}

                    alt="Roger Silveira - Motion designer" />
                <h3>Roger Silveira</h3>
                <h4>Motion designer</h4>
            </div>
            <div className={styles.teammember}>
                <Image
                    src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Team/Daniel-Lopes.jpeg"
                    height={720}
                    width={480}
                    style={{ objectFit: "cover" }}

                    alt="Daniel Lopes - Colorist" />
                <h3>Daniel Lopes</h3>
                <h4>Colorist</h4>
            </div>
        </section>
    )
}
export default Team
