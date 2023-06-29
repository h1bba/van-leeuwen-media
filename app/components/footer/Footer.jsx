"use client"
import React from 'react'
import Link from 'next/link.js'
import Insta from '../../../public/insta.svg'
import LinkedIn from '../../../public/linkedin.svg'
import Image from 'next/image.js'


export const Footer = () => {
    return (
        <>

            <footer style={{ zIndex: '0'}}>
                <div className='footerflex'>
                    <div className='ctacontainer'>
                        <div className='cta'>
                            <p>Waar wacht je op?</p>
                            <a>Contact</a>
                        </div>
                    </div>
                    <div className='footercontainer'>
                        <ul>
                            <li><Link href="/">Ons werk</Link></li>
                            <li><Link href="/">Diensten</Link></li>
                            <li><Link href="/">Over ons</Link></li>
                            <li><Link href="/">Contact</Link></li>
                        </ul>

                        <ul>
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                        </ul>

                        <ul>
                            <li>Zakelijk contact</li>
                            <li>info@vanleeuwenmedia.nl</li>
                            <li>+31 6 12 34 56 78</li>
                            <li>1234AB, Amsterdam</li>
                        </ul>


                        <ul className='socials'>
                            <li><Image src={Insta} alt='' /></li>
                            <li><Image src={LinkedIn} alt='' /></li>
                        </ul>

                        <ul className="info">
                            <li>vanleeuwenmedia® 2023</li>
                            <li>site by hibba</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
