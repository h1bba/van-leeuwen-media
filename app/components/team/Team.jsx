import React from 'react'
import styles from './Team.module.css'
import Image from 'next/image'


export const Team = () => {
    return (


        <div style={{ paddingBottom: '4em' }}>
            <section className={styles.teamcontainer}>
                <div className={styles.teammember}>
                    <Image
                        src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Team/Fabio-van-Leeuwen.jpg"
                        height={720}
                        width={480}
                        style={{ objectFit: "cover" }}

                        alt="Fabio van Leeuwen - Producent & Video creator" />
                    <h3 className={styles.naam}>Fabio van leeuwen</h3>
                    <h4>Producent & video creator</h4>
                </div>
                <div className={styles.teammember}>
                    <Image
                        src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Team/Jordy-van-Leeuwen.jpg"
                        height={720}
                        width={480}
                        style={{ objectFit: "cover" }}

                        alt="Jordy van Leeuwen - Consultant & belichter" />
                    <h3 className={styles.naam}>Jordy van Leeuwen</h3>
                    <h4>Consultant & belichter</h4>

                </div>
                <div className={styles.teammember}>
                    <Image
                        src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Team/Nelson-Pinton.jpg"
                        height={720}
                        width={480}
                        style={{ objectFit: "cover" }}

                        alt="Nelson Pinton - Sound designer & componist" />
                    <h3 className={styles.naam}>Nelson Pinton</h3>
                    <h4>Sound designer & componist</h4>
                </div>
                <div className={styles.teammember}>
                    <Image
                        src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Team/Roger-Silveira.jpg"
                        height={720}
                        width={480}
                        style={{ objectFit: "cover" }}

                        alt="Roger Silveira - Motion designer" />
                    <h3 className={styles.naam}>Roger Silveira</h3>
                    <h4>Motion designer</h4>
                </div>
                <div className={styles.teammember}>
                    <Image
                        src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Team/Daniel-Lopes.jpeg"
                        height={720}
                        width={480}
                        style={{ objectFit: "cover" }}

                        alt="Daniel Lopes - Colorist" />
                    <h3 className={styles.naam}>Daniel Lopes</h3>
                    <h4>Colorist</h4>
                </div>
            </section>
        </div>
    )
}
export default Team
