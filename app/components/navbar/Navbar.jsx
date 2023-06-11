import Link from "next/link";
import React from "react";


const Header = () => {
    return (
        <div>
            <Link href="/">Logo</Link>
            <Link href="/about">Ons werk</Link>
            <Link href="/services">Diensten</Link>
            <Link href="/about">Over Ons</Link>
            <Link href="/contact">Contact</Link>
        </div>
    )
}

export default Header