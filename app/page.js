import React from "react";
import SelectedWork from './components/work/SelectedWork'
import Ctabanner from './components/ctabanner/Ctabanner'
import { Mulish } from 'next/font/google'
const mulish = Mulish({ subsets: ['latin'] })



const Home = () => {



  return (
    <main className={mulish.className}>
      <SelectedWork />
      <Ctabanner />
    </main>

  );
}

export default Home;
