import React from 'react'
import styles from './Team.module.css'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

export const Team = () => {
    return (


        <section className={styles.teamcontainer}>
            <Fade cascade damping={0.2}>
                <div className={styles.teammember}>
                    <h3 className={styles.naam}>Fabio van Leeuwen</h3>

                    <Image
                        src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Team/Fabio-van-Leeuwen.jpg"
                        height={720}
                        width={480}
                        style={{ objectFit: "cover" }}

                        alt="Fabio van Leeuwen - Producent & Video creator" />
                    <h4>Producent & video creator</h4>
                </div>
                <div className={styles.teammember}>
                    <h3 className={styles.naam}>Jordy van Leeuwen</h3>

                    <Image
                        src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Team/Jordy-van-Leeuwen.jpg"
                        height={720}
                        width={480}
                        style={{ objectFit: "cover" }}

                        alt="Jordy van Leeuwen - Consultant & belichter" />
                    <h4>Consultant & belichter</h4>
                </div>
                <div className={styles.teammember}>
                    <h3 className={styles.naam}>Nelson Pinton</h3>
                    <Image
                        src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Team/Nelson-Pinton.jpg"
                        height={720}
                        width={480}
                        style={{ objectFit: "cover" }}
                        alt="Nelson Pinton - Sound designer & componist" />
                    <h4>Sound designer & componist</h4>
                </div>
                <div className={styles.teammember}>
                    <h3 className={styles.naam}>Roger Silveira</h3>
                    <Image
                        src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Team/Roger-Silveira1.jpg"
                        height={720}
                        width={480}
                        style={{ objectFit: "cover" }}

                        alt="Roger Silveira - Motion designer" />
                    <h4>Motion designer</h4>
                </div>
                <div className={styles.teammember}>
                    <h3 className={styles.naam}>Daniel Lopes</h3>
                    <Image
                        src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Team/Daniel-Lopes.jpeg"
                        height={720}
                        width={480}
                        style={{ objectFit: "cover" }}

                        alt="Daniel Lopes - Colorist" />
                    <h4>Colorist</h4>
                </div>
            </Fade>
        </section>
    )
}
export default Team
