import React from "react";
import SelectedWork from './components/work/SelectedWork'
import Ctabanner from './components/ctabanner/Ctabanner'
import { Mulish } from 'next/font/google'
const mulish = Mulish({ subsets: ['latin'], weight: ['400', '700'] })



const Home = () => {



  return (
    <>
      <SelectedWork />
      <Ctabanner />
    </>

  );
}

export default Home;
