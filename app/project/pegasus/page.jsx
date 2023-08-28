import React from 'react'
import styles from '../project.module.css'
import Arrow from '../../../public/SingleArrow.svg'
import Image from 'next/image'


const Pegasus = () => {
  const pegasusvideo = 'https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Pegasus/Pegasus.mp4'
  return (
    <>
      <div className={styles.page}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '2em' }}>
          <a href='/'>
            <Image src={Arrow} height={40} alt='' />
          </a>
          <h2 style={{ textAlign: 'center', fontSize: '3.375rem', fontWeight: '400' }}> Pegasus | Jouw paard onze zorg</h2 >
        </div>
        <div className={styles.videocontainer}>
          <video autoPlay muted loop controls >
            <source src={pegasusvideo} type="video/mp4" />
          </video>
          <div className={styles.videoinfo}>
            <div className={styles.infoflex}>
              <div>
                <h3>Klant</h3>
                <p>Pegasus</p>
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
              <p>Bij Paardensportcentrum Pegasus draait alles om de zorg voor jouw paard. Het doel van de commercial was om op een boeiende manier in beeld te brengen hoe jouw paard bij Pegasus in goede handen is.</p>
            </div>
            <div className={styles.gridimgs}>
              <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Pegasus/Pegasus1.jpg"></img>
            </div>

            <div className={styles.gridimgs}>
              <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Pegasus/Pegasus2.jpg"></img>
            </div>
            <div>
              <p>Het avontuur begint wanneer het meisje zich verslaapt, bij aankomst ontdekt ze dat haar paard niet in de stal staat, wat meteen voor een spannend conflict zorgt. Een gevoel van bezorgdheid overvalt haar, maar al snel wordt duidelijk dat ze zich geen zorgen hoeft te maken.</p>
            </div>
            <div>
              <p>Een verzorgster van Pegasus had haar paard al meegebracht voor een ontspannen ritje. Met deze wending wilden we benadrukken dat de slogan &quot;Uw paard, onze zorg&quot; geen loze woorden zijn. In de video laten we zien dat jouw paard bij Pegasus in goede handen is.</p>
            </div>
            <div className={styles.gridimgs}>
              <img src="https://vanleeuwenmedia.s3.eu-central-1.amazonaws.com/Pegasus/Pegasus3.jpg"></img>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Pegasus