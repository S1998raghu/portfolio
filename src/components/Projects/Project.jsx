import React from "react";
import styles from './Project.module.css';
import {ProjectCard} from './ProjectCard';
import project from '../../data/projects.json'

export const Project=()=>{
    
        return (
<section className={styles.container} id='projects'>
<h3 className={styles.title}>Projects</h3>
<div className={styles.projects}>
    {project.map((project,id)=>{
        return <ProjectCard key={id} project={project}/>;
    })}
</div>
</section>
        );
    };