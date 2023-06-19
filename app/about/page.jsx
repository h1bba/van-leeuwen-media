import React from 'react'
import Quote from '../components/quote/Quote'
import styles from './page.module.css'
import Team from '../components/team/Team'
import Faq from '../components/faq/Faq'

const About = () => {
    return (
        <div>
            <h2 style={{ textAlign: 'center', fontSize: '48px' }}>Over ons</h2>
            <Quote />
            <div className={styles.grid}>
                <div>
                    <h3>Headline</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Varius ridiculus porta scelerisque metus ipsum arcu orci. Magna dolor quam malesuada ac nunc pharetra et elementum. Mattis et convallis pellentesque elementum vel. Blandit pretium eget ut sed amet euismod volutpat.</p>
                </div>
                <div>
                    <img src="https://placehold.co/800x300" alt=''></img>
                </div>
            </div>

            <div className={styles.grid2}>
                <div>
                    <img src="https://placehold.co/300x300" alt=''></img>
                </div>
                <div>
                    <h3>Headline</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Magna pulvinar fermentum vel duis. Erat magna orci vel rutrum donec sed nullam. Aliquet in fames ut nunc amet. Sed scelerisque eu leo nulla bibendum pharetra praesent ut. At malesuada phasellus euismod id varius dui pellentesque. Egestas tellus arcu pellentesque tortor tristique vehicula ornare morbi. Malesuada donec metus vitae non vitae proin. Ultrices interdum in suspendisse in neque diam et est in. Vulputate egestas turpis vestibulum ipsum proin nulla hac vitae. Eget congue a id potenti magna. Maecenas magna velit est posuere.</p></div>
            </div>
            <h2 style={{ textAlign: 'center', fontSize: '48px' }}>Team</h2>
            <Team />
            <Quote />
            <Faq />
        </div >
    )
}

export default About