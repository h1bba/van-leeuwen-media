import React from "react";
import SelectedWork from './components/work/SelectedWork'
import Ctabanner from './components/ctabanner/Ctabanner'
import { Mulish } from 'next/font/google'
const mulish = Mulish({ subsets: ['latin'] })
import AnimatedCursor from "react-animated-cursor"


const Home = () => {



  return (
    <>
    <div>
    <AnimatedCursor
      innerSize={24}
      outerSize={10}
      color='255, 133, 0'
      outerAlpha={0.1}

      innerScale={0.5}
      outerScale={4}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 12,
            outerSize: 12,
            color: '255, 255, 255',
            outerAlpha: 0.2,

            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
    />
    </div>
    <main className={mulish.className}>
      <div style={{width: '100%', height: '100%', backgroundColor: 'white', zIndex: '2', position: 'relative'}}>
      <SelectedWork />
      {/* <Ctabanner /> */}
      </div>
    </main>
    </>
  );
}

export default Home;
