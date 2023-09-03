import React from 'react'
import styles from '../project.module.css'
import Arrow from '../../../public/SingleArrow.svg'
import Image from 'next/image'


const Sweetbob = () => {
  const video = 'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Sweetbob/Sweet+Bob.mp4'
  return (
    <>
      <div className={styles.page}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '2em' }}>
          <a href='/'>
            <Image src={Arrow} height={40} alt='' />
          </a>
          <h2 style={{ textAlign: 'center', fontSize: '3.375rem', fontWeight: '400' }}> Sweet Bob | Dare to share, goed geregeld</h2 >
        </div>
        <div className={styles.videocontainer}>
          <video autoPlay muted loop controls >
            <source src={video} type="video/mp4" />
          </video>
          <div className={styles.videoinfo}>
            <div className={styles.infoflex}>
              <div>
                <h3>Klant</h3>
                <p>Sweet Bob</p>
              </div>
              <div>
                <h3>Categorie</h3>
                <p>Commercial</p>
              </div>
              <div className={styles.diensten}>
                <ul>
                  <li>Video/film productie</li>
                  <li>Color grading</li>
                  <li>Sound design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.grid}>
            <div>
              <p>Of het nu gaat om het delen van ervaringen of het delen van de heerlijke Braziliaanse lekkernijen van Sweet Bob, het motto van Sweet Bob is altijd &quot;dare to share&quot;. Het was een fantastische uitdaging voor ons om dit concept tot leven te brengen in een pakkende commercial.</p>
            </div>
            <div className={styles.gridimgs}>
              <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Sweetbob/sweetbob1.jpg"></img>
            </div>

            <div className={styles.gridimgs}>
              <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Sweetbob/sweetbob2.jpg"></img>
            </div>
            <div>
              <p>In de commercial laten we zien hoe Sweet Bob de kracht heeft om je dag compleet te veranderen en zelfs je stemming te verbeteren.</p>
            </div>
            <div>
              <p>We tonen het verhaal van Marcelo die aanvankelijk inspiratieloos lijkt, maar wanneer Marcelo Sweet Bob bezoekt, wordt hij geïnspireerd om te delen. Het delen van ervaringen, positiviteit en lekkernijen. Dit allemaal onder het genot van &quot;Bossa Nova&quot; muziek en van de heerlijke omgeving &quot;de Jordaan&quot;.</p>
            </div>
            <div className={styles.gridimgs}>
              <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Sweetbob/sweetbob3.jpg"></img>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Sweetbob