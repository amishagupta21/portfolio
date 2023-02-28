import React from 'react'
import styles from "./index.module.css"
import html from "../.././assests/icons/html.svg"
import css from "../.././assests/icons/css.svg"
import javascript from "../.././assests/icons/js.svg"
import react from "../.././assests/icons/react.svg"
import redux from "../.././assests/icons/redux.svg"
import php from "../.././assests/icons/php.png"
import notion from "../.././assests/icons/notion.png"
import figma from "../.././assests/icons/figma.png"
import github from "../.././assests/icons/github.svg"
import git from "../.././assests/icons/git.svg"
import visual from "../.././assests/icons/visual.svg"
import canva from "../.././assests/icons/canva.jpg"

const SkillSection = () => {
    const skills = [
        {
            name: "html5",
            image: html
        },
        {
            name: "CSS3",
            image: css
        },
        {
            name: "JAVASCRIPT",
            image: javascript
        },
        {
            name: "REACT",
            image: react
        },
        {
            name: "REDUX",
            image: redux
        },
        {
            name: "PHP",
            image: php
        },
       
        {
            name: "NOTION",
            image: notion
        },
        {
            name: "FIGMA",
            image: figma
        },
        {
            name: "GITHUB",
            image: github
        },
        {
            name: "GIT",
            image: git
        },
        {
            name: "VS CODE",
            image: visual
        },
        {
            name: "CANVA",
            image: canva
        }
    ]
    return (
        <div id="skills" className={styles.container}>
        <h1>My Tech Stack</h1>
        <p>Technologies I’ve been working with recently</p>
        <div className={styles.skills}>
            {skills.map((skill,index) => {
                return (
                    <div key={index} className={styles.skill}>
                        <span>{skill.name}</span>
                        <img src={skill.image} height={40} width={40} alt={skill.name}/>
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export default SkillSection
