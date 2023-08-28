'use client'
import React from "react";
import SelectedWork from '../components/work/SelectedWork'
import Ctabanner from '../components/ctabanner/Ctabanner'
import { Mulish } from 'next/font/google'
const mulish = Mulish({ subsets: ['latin'] })
import AnimatedCursor from "react-animated-cursor"


const Home = () => {
    return (

        <main className={mulish.className}>
            <AnimatedCursor
                innerSize={15}
                outerSize={15}
                color="255, 133, 0"
                outerAlpha={0.4}
                innerScale={0.7}
                outerScale={5}
            />
            <div style={{ width: '100%', height: '100%', backgroundColor: 'white', zIndex: '2', position: 'relative' }}>
                <SelectedWork />
                <Ctabanner />
            </div>
        </main>

    );
}

export default Home;
