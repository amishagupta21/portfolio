import React from 'react'
import styles from "./index.module.css"

const AboutSection = () => {
  return (
    <div id="about" className={styles.container}>
      <span className={styles.title}>About Me</span>
      <p className={styles.description}>I transform documented ideas into functioning scalable tech products. Passionate about using the latest technology. I keep things simple, clean, and efficient. I love to trek into the mountains and explore new places.</p>
          
      <span className={styles.title}>Work Experience</span>
      <div className={styles.companyInfo}>
      <div className={styles.company}>
          <span className={styles.companyName}>
            CODESHASTRA
          </span>

          <div className={styles.role}>
            <h1><span>Role: </span>Tech Developer</h1>
            <h1><span>Work: </span>Build web apps using React, Redux, API, react-router. Worked on Admin Panel with Redux Saga,Firebase for Authentication. Designed Pixel-clear UI.</h1>
          </div>
        </div>
        <div className={styles.company}>
          <span className={styles.companyName}>
            PCDS InfoTech - IT solutions company
          </span>

          <div className={styles.role}>
            <h1><span>Role: </span>Frontend Developer</h1>
            <h1><span>Work: </span>Build web apps using React, Redux, API, react-router. Worked with Function Component. Designed Pixel-clear UI from scratch.</h1>
          </div>
        </div>

        <div className={styles.company}>
          <span className={styles.companyName}>
            RNBOLD - IT solutions company
          </span>
          <div className={styles.role}>
            <h1><span>Role: </span>Junior PHP Developer</h1>
            <h1><span>Work: </span>Handle complete frontend development. Tested functionality of the application code on multiple web browsers. Worked on PhpMyAdmin.</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection;
