"use client"
import React from 'react'
import Link from 'next/link.js'
import Insta from '../../../public/insta.svg'
import LinkedIn from '../../../public/linkedin.svg'
import Image from 'next/image.js'


export const Footer = () => {
    return (
        <>

            <footer style={{ zIndex: '0' }}>
                <div className='footerflex'>
                    <div className='footercontainer'>
                        <ul>
                            <li style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Menu</li>
                            <li><Link href="/portfolio">Ons werk</Link></li>
                            <li><Link href="/services">Diensten</Link></li>
                            <li><Link href="/about">Over ons</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>

                        <ul>
                            <li style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Juridisch</li>
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                        </ul>

                        <ul>
                            <li style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Contact</li>
                            <li>info@vanleeuwenmedia.com</li>
                            <li>+31 6 40 34 35 54</li>
                            <li>1501TD, Zaandam</li>
                            <li>Pieterpauwstraat 70</li>
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
