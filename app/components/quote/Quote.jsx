import React from 'react'
import styles from './Quote.module.css'
import { motion } from "framer-motion"

const Quote = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className={styles.quotecontainer}>
            <p className={styles.quotetext}>Breng jouw visie tot leven
                met onze creatieve high-end media oplossingen</p>
        </motion.div>
    )
}

export default Quote