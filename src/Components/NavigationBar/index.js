import React from 'react'
import styles from "./index.module.css"

const NavigationBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}><span>Amisha</span><span>Gupta</span></div>
            <nav className={styles.navigationContainer}>
            <a href="#home"><span>HOME</span></a>
            <a href="#about"><span>ABOUT</span></a>
            <a href="#skills"><span>SKILLS</span></a>
            <a href="#projects"><span>PROJECTS</span></a>
            <a href="#blogs"><span>BLOGS</span></a>
            <a href="#contact"><span>CONTACT</span></a>
            </nav>
        </div>
    )
}

export default NavigationBar
