import React from 'react'
import Image from 'next/image'
import Quote from '../components/quote/Quote'
import styles from './page.module.css'
import PhoneIcon from '../../public/phone.svg'
import MailIcon from '../../public/mail.svg'
import AddressIcon from '../../public/adres.svg'
import Idee from '../components/idee/Idee'

const Contact = () => {
    return (
        <div>
            <h2 style={{ fontSize: '48px', textAlign: 'center' }}>Contact</h2>
            <div className={styles.contactcontainer}>
                <div className={styles.contactperson}>
                    <div><img src="https://placehold.co/400x400" alt=''></img></div>
                    <h3>Fabio van Leeuwen</h3>
                    <h4>Functietitel</h4>
                </div>
                <div className={styles.grid}>
                    <div>
                        <Image className={styles.centersvg} src={MailIcon} alt='' />
                        <div>
                            <a href='mailto:info@vanleeuwenmedia.nl'><h3 style={{ marginTop: '0em' }}>Mail</h3></a>
                            <a href='mailto:info@vanleeuwenmedia.nl'><p>info@vanleeuwenmedia.nl</p></a>
                        </div>
                    </div>
                    <div>
                        <Image className={styles.centersvg} src={PhoneIcon} alt='' />
                        <div>
                            <a><h3>Telefoon</h3></a>
                            <a><p>+(31) 6 12 34 56 78</p></a>
                        </div>
                    </div>
                    <div>
                        <Image className={styles.centersvg} src={AddressIcon} alt='' />
                        <div>
                            <h3>Adres</h3>
                            <p>1234AB, Amsterdam</p>
                        </div>
                    </div>
                    <div>
                        <h4>KVK</h4>
                        <p>lorem ipsum</p>
                    </div>
                    <div>
                        <h4>BTW</h4>
                        <p>lorem ipsum</p>
                    </div>
                    <div>
                        <h4>BTW</h4>
                        <p>lorem ipsum</p>
                    </div>
                </div>
            </div>
            <Idee />
            <Quote />

        </div>
    )
}

export default Contact