// 'use client'
import React from "react";
import SelectedWork from './components/work/SelectedWork'
import Ctabanner from './components/ctabanner/Ctabanner'
// import AnimatedCursor from 'react-animated-cursor'

const Home = () => {



  return (
    <>
      <SelectedWork />
      <Ctabanner />
      {/* <AnimatedCursor
          innerSize={20}
          outerSize={20}
          color='255, 133, 0'
          outerAlpha={0.2}
          innerScale={0.5}
          outerScale={5}
        /> */}
    </>

  );
}

export default Home;
