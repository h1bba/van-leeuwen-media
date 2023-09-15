import React from 'react'
import styles from '../project.module.css'
import Arrow from '../../../public/SingleArrow.svg'
import Image from 'next/image'


const LKQtime = () => {
  const video = 'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQtime/Lkq+Tijdlijn.mp4'
  return (
    <>
      <div className={styles.page}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '2em' }}>
          <a href='/'>
            <Image src={Arrow} height={40} alt='' />
          </a>
          <h2 style={{ textAlign: 'center', fontSize: '3.375rem', fontWeight: '400' }}> LKQ | The future is now</h2 >
        </div>
        <div className={styles.videocontainer}>
          <video autoPlay muted loop controls >
            <source src={video} type="video/mp4" />
          </video>
          <div className={styles.videoinfo}>
            <div className={styles.infoflex}>
              <div>
                <h3>Klant</h3>
                <p>LKQ</p>
              </div>
              <div>
                <h3>Categorie</h3>
                <p>Corporate</p>
              </div>
              <div className={styles.diensten}>
                <ul>
                  <li>Motion design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.grid}>
            <div>
              <p>LKQ had de wens om een visueel verhaal te vertellen over de snelle vooruitgang van de tijd waarbij ze de boodschap wilden overbrengen : &quot;the future is now&quot;. Doormiddel van een vlotte reeks aan innovaties namen we de kijkers mee op een reis door de tijd, waarbij we belangrijke mijlpalen en technologische ontwikkelingen illustreerden.</p>
            </div>
            <div className={styles.gridimgs}>
              <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQtime/LKQtime1.jpg"></img>
            </div>

            <div className={styles.gridimgs}>
              <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQtime/LKQtime2.jpg"></img>
            </div>
            <div>
              <p>Van oude voertuigen tot geavanceerde technologieën en innovatieve oplossingen, de video benadrukte de constante evolutie en vooruitgang in de autowereld. Door deze transformatie te laten zien, wilden we de kijkers inspireren en laten nadenken over de mogelijkheden en kansen die het heden en de toekomst bieden.</p>
            </div>
            <div>
              <p>Naar mate de video vordert gaan de innovaties steeds sneller, hiermee reflecteren we op het feit dat we door de jaren heen ook steeds sneller zijn gaan innoveren.

                “The future is now!”</p>
            </div>
            <div className={styles.gridimgs}>
              <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/LKQtime/LKQtime3.jpg"></img>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default LKQtime