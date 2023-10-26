import React from "react";
import SelectedWork from './components/work/SelectedWork'
import Ctabanner from './components/ctabanner/Ctabanner'
import { Mulish } from 'next/font/google'
import styles from './page.module.css'
const mulish = Mulish({ subsets: ['latin'] })

const Home = () => {

  return (
    <>
    <main className={mulish.className}>
      <div style={{width: '100%', height: '100%', backgroundColor: 'white', zIndex: '2', position: 'relative'}}>
      <SelectedWork />
      <Ctabanner />
      </div>
    </main>
    </>
  );
}

export default Home;
