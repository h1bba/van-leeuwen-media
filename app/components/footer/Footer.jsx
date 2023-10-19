"use client"
import React from 'react'
import Link from 'next/link.js'
import Insta from '../../../public/insta.svg'
import LinkedIn from '../../../public/linkedin.svg'
import Image from 'next/image.js'
import Logo from '../../../public/logo.svg'
import { Mulish } from "next/font/google";
const mulish = Mulish({ subsets: ['latin'] })

export const Footer = () => {
    return (
        <>

            <footer className={mulish.className} style={{ zIndex: '0' }}>
                <div className='footerflex'>
                    <div className='footercontainer'>
                        <Image className='footerlogo' src={Logo} alt="vanleeuwenmedia® 2023" />
                        <ul>
                            <li className='footerhead'>Menu</li>
                            <li><Link href="/portfolio">Ons werk</Link></li>
                            <li><Link href="/services">Diensten</Link></li>
                            <li><Link href="/about">Over ons</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                        <ul>
                            <li className='footerhead'>Contact</li>
                            <li><a href="mailto:info@vanleeuwenmedia.com">info@vanleeuwenmedia.com</a></li>
                            <li>+31 6 40 34 35 54</li>
                            <li>1501TD, Zaandam</li>
                            <li>Pieterpauwstraat 70</li>
                        </ul>
                        <ul>
                            <li className='footerhead'>Juridisch</li>
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
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
