'use client'
import React from 'react'
import styles from './Idee.module.css'


const Idee = () => {
    return (
        <div className={styles.idee}>
            <h2>Hoe <span style={{ color: 'var(--var-color-orange)' }}>het</span> werkt</h2>
            <div className={styles.ideecontainer}>
                <div className={styles.leftidee}>

                    <div></div>

                </div>
                <div className={styles.rightidee}>
                    <h3>Idee</h3>
                    <a>Lorem ipsum dolor sit amet consectetur. Magna pulvinar fermentum vel duis. Erat magna orci vel rutrum donec sed nullam. Aliquet in fames ut nunc amet. Sed scelerisque eu leo nulla bibendum pharetra praesent ut</a>
                </div>
            </div>
        </div>
    )
}

export default Idee