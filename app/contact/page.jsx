import React from 'react'
import Quote from '../components/quote/Quote'
import styles from './page.module.css'

const Contact = () => {
    return (
        <div>
            <h2 style={{ fontSize: '48px', textAlign: 'center' }}>Contact</h2>
            <Quote />
            <div className={styles.grid}>
                <div></div>
                <div style={{ padding: '2em' }}>
                    <h3 style={{ marginTop: '0em' }}>Mail</h3>
                    <p>info@vanleeuwenmedia.nl</p>

                    <h3>Telefoon</h3>
                    <p>+(31) 6 12 34 56 78</p>

                    <h3>Adres</h3>
                    <p>1234AB, Amsterdam</p>

                    <h4>KVK</h4>
                    <p>lorem ipsum</p>

                    <h4>BTW</h4>
                    <p>lorem ipsum</p>
                </div>
            </div>


        </div>
    )
}

export default Contact