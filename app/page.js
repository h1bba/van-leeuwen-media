import React from "react";
import SelectedWork from './components/work/SelectedWork'
import Quote from './components/quote/Quote'
import Faq from './components/faq/Faq'
import ServicesComp from "./components/services/ServicesComp";


const Home = () => {
  return (
    <>
      <SelectedWork />
      <ServicesComp />
      <Quote />
      <Faq />


    </>

  );
}

export default Home;
