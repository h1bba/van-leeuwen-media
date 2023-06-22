import React from 'react'
import styles from './ServicesComp.module.css'
import { BsFillPaletteFill } from 'react-icons/bs'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { BsSpeakerFill } from 'react-icons/bs'
import { BsSunriseFill } from 'react-icons/bs'

const ServicesComp = () => {
    return (
        <div>
            <div className={styles.gridcontainer}>
                <div>
                    <div className={styles.ph}></div>
                </div>
            </div>
            <div className={styles.servicescontainer}>
                <h2 className={styles.h2animate}><span className="color-orange-bold">“</span>Elevate your brand with our <span className="color-orange">creative</span> video solutions<span className="color-orange-bold">”</span></h2>
                <div className={styles.servicesflex}>
                    <div className={styles.servicesbadge}>
                        <BsFillCameraVideoFill /><h2 className={styles.servicetitle}>Film/video</h2>
                        <p className={styles.servicedesc}>Lorem ipsum dolor sit amet consectetur. Varius ridiculus porta scelerisque metus ipsum arcu orci. Magna dolor quam malesuada ac nunc pharetra et elementum. Mattis et convallis pellentesque elementum vel. Blandit pretium eget ut sed amet euismod volutpat.</p>
                    </div>

                    <div className={styles.servicesbadge}>
                        <BsSunriseFill /><h2 className={styles.servicetitle}>Motion design</h2>
                        <p className={styles.servicedesc}>Lorem ipsum dolor sit amet consectetur. Varius ridiculus porta scelerisque metus ipsum arcu orci. Magna dolor quam malesuada ac nunc pharetra et elementum. Mattis et convallis pellentesque elementum vel. Blandit pretium eget ut sed amet euismod volutpat.</p>
                    </div>

                    <div className={styles.servicesbadge}>
                        <BsFillPaletteFill /><h2 className={styles.servicetitle}>Color Grading</h2>
                        <p className={styles.servicedesc}>Lorem ipsum dolor sit amet consectetur. Varius ridiculus porta scelerisque metus ipsum arcu orci. Magna dolor quam malesuada ac nunc pharetra et elementum. Mattis et convallis pellentesque elementum vel. Blandit pretium eget ut sed amet euismod volutpat.</p>

                    </div>

                    <div className={styles.servicesbadge}>
                        <BsSpeakerFill /><h2 className={styles.servicetitle}>Sound design</h2>
                        <p className={styles.servicedesc}>Lorem ipsum dolor sit amet consectetur. Varius ridiculus porta scelerisque metus ipsum arcu orci. Magna dolor quam malesuada ac nunc pharetra et elementum. Mattis et convallis pellentesque elementum vel. Blandit pretium eget ut sed amet euismod volutpat.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesComp