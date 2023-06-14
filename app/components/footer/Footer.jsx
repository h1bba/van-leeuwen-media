import React from 'react'
import Faq from '../faq/Faq.jsx'
import styles from './Footer.module.css'
import Link from 'next/link.js'

export const Footer = () => {
    return (
        <>
            <div className={styles.footerflex}>
                <div className={styles.footercontainer}>
                    <ul>
                        <li><Link href="/">Ons werk</Link></li>
                        <li><Link href="/">Diensten</Link></li>
                        <li><Link href="/">Over ons</Link></li>
                        <li><Link href="/">Contact</Link></li>
                    </ul>

                    <ul>
                        <li>Zakelijk contact</li>
                        <li>info@vanleeuwenmedia.nl</li>
                        <li>+31 6 12 34 56 78</li>
                        <li>1234AB, Amsterdam</li>
                    </ul>

                    <ul>
                        <li>Insta</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer
