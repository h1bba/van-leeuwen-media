import React from 'react'
import styles from './Quote.module.css'

const Quote = () => {
    return (
        <div className={styles.quotecontainer}>
            <p className='herotxt'>Niet je standaard studio,<br></br> wel de <span className='color-orange'>juiste</span>.</p>
        </div>
    )
}

export default Quote