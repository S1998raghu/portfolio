import React from "react";
import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About=()=>{
    return(
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>
                About Me
            </h2>
            <div className={styles.content}>
                <img src={getImageUrl('about/aboutImage.png')}
                alt='Me sitting with laptop' className={styles.image}/>
                <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                <img src={getImageUrl('about/cursorIcon.png')} alt='Cursor'/>
                <div className={styles.aboutItemText} >
                    <h3>Education</h3>
                        <ul><li>Completed Master of Science in Computer Science at USC viterbi college of engineering.</li>
                        <li>I am based in Los Angeles and am willing to relocate.</li>
                
                        <li>I have done my undergraduation in computer science from India.</li>
                        </ul>
                    
                </div>
                </li>
                {/* <li className={styles.aboutItem}>
                <img src={getImageUrl('about/cursorIcon.png')} alt='Server'/>
                <div className={styles.aboutItemText}>
                    <h4>Skills:-</h4>
                        <ul>
                            <li>
                            Languages: Python, SQL Server, JavaScript, HTML/CSS, C#, C++, PostgreSQL,Java
                            </li>
                            <li>Frameworks: Flask, AngularJS, REST API, Node JS, React, Scrapy, Selenium </li>
                            <li>GCP, MongoDB,github,docker,postman</li>

                            
                        </ul>
                    
                </div>
                </li>          */}

                <li className={styles.aboutItem}><img src={getImageUrl('about/cursorIcon.png')} alt='Cursor'/>
                <div className={styles.aboutItemText}>
                
                    <h3>Interests</h3>
                <ul>
                    <li>In my free time I love to cook, Go out on a drive or find a new nice place to hike!!</li>
                    </ul>
                </div>
            </li>            
            </ul>         
            </div>
        </section>
    )
}