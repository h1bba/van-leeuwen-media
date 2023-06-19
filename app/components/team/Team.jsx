import React from 'react'
import styles from './Team.module.css'

export const Team = () => {
    return (
        <section className={styles.teamcontainer}>
            <div className={styles.teammember}>
                <img src="https://placehold.co/300x300" alt=''></img>
                <h3>Fabio van leeuwen</h3>
            </div>
            <div className={styles.teammember}>
                <img src="https://placehold.co/300x300" alt=''></img>
                <h3>Fabio van leeuwen</h3>
            </div>
            <div className={styles.teammember}>
                <img src="https://placehold.co/300x300" alt=''></img>
                <h3>Fabio van leeuwen</h3>
            </div>
            <div className={styles.teammember}>
                <img src="https://placehold.co/300x300" alt=''></img>
                <h3>Fabio van leeuwen</h3>
            </div>
            <div className={styles.teammember}>
                <img src="https://placehold.co/300x300" alt=''></img>
                <h3>Fabio van leeuwen</h3>
            </div>
        </section>
    )
}
export default Team
