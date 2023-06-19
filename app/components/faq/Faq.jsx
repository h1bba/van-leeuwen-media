'use client'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './Faq.module.css';



export default function Faq() {
    return (
        <>
            <h2 className={styles.faqtext}>Frequently asked questions</h2>
            <div className={styles.faqflex}>
                <div className={styles.faqcontainer}>
                    <Accordion className={styles.faqlist}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ fill: '#FF8500', scale: 1.75 }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Title of the question</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ paddingLeft: '0', paddingRight: '48px' }}>
                            <Typography >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={styles.faqlist}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ fill: '#FF8500', scale: 1.75 }} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Title of the question</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ paddingLeft: '0', paddingRight: '48px' }}>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={styles.faqlist}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ fill: '#FF8500', scale: 1.75 }} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Title of the question</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ paddingLeft: '0', paddingRight: '48px' }}>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={styles.faqlist}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ fill: '#FF8500', scale: 1.75 }} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Title of the question</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ paddingLeft: '0', paddingRight: '48px' }}>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div>
                    <img className='br' src="https://placehold.co/600x400" alt=''></img>
                </div>
            </div>
        </>
    );
}