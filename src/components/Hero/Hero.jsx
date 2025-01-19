import React,{useState} from "react";
import {getImageUrl} from "../../utils";
import styles from "./Hero.module.css";

export const Hero=()=>
    {
        return (
            <section className={styles.container}>

            <div className={styles.content}>

            <h3 className={styles.title}>Hi, I am Sumedha Raghu</h3>
            <p className={styles.description}>I've graduated in December 2024 with a MS in computer science. I am looking for full-time opportunities. Reach out if you would like to know more about me! </p>
            <a href='mailto:sumedharaghu@gmail.com' className={styles.email}>Contact Me</a>

            </div>
            <img src={getImageUrl('hero/myimg1.png')}
            alt="Her"
            className={styles.heroine}/>
            <div className={styles.topBlur}/>
            <dib className={styles.bottomBlur}/>
            </section>
             
        );
    } 