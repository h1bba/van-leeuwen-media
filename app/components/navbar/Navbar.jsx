import Link from "next/link";
import React from "react";
import Logo from '../../../public/logo.svg'
import Image from "next/image";

const Header = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
            <Link className="logo" href="/"
            ><Image src={Logo} alt=""></Image></Link>
            <Link href="/about">Ons werk</Link>
            <Link href="/services">Diensten</Link>
            <Link href="/about">Over Ons</Link>
            <Link href="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Header