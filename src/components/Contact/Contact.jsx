import React,{useState} from "react"
import styles from './Contact.module.css'
import {getImageUrl} from "../../utils"

export const Contact=()=>
    {
        return(
            <footer id='contact' className={styles.container}>
                <div className={styles.text}>
                    <h3>contact</h3>
                    <p>feel free to reach out!</p>
                </div>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <img src={getImageUrl('contact/emailIcon.png')} alt='email'/>
                        <a href="mailto:sumedharaghu@gmail.com">sumedharaghu@gmail.com</a>

                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl('contact/linkedinIcon.png')} alt='linkedin'/>
                        <a href='https://www.linkedin.com/in/sumedha-raghu-684624174/'>linked.com/sumedharaghu</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl('contact/githubIcon.png')} alt='github'/>
                        <a href='https://github.com/S1998raghu/'>github/sumedharaghu</a>
                    </li>
                </ul>
            </footer>
        );
    };
