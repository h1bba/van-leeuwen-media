'use client'
import React from "react";
import SelectedWork from '../components/work/SelectedWork'
import Ctabanner from '../components/ctabanner/Ctabanner'
import styles from './portfolio.module.css'
import Head from "next/head";
import { Mulish } from 'next/font/google'
const mulish = Mulish({ subsets: ['latin'] })


const Home = () => {
    return (
        <>
            <Head>
                <title>Portfolio | Van Leeuwen Media</title>
            </Head>
            <main className={mulish.className}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'white', zIndex: '2', position: 'relative' }}>
                    <SelectedWork />
                    <Ctabanner />
                </div>
            </main>
        </>
    );
}

export default Home;
