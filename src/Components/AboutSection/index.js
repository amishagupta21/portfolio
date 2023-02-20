import React from 'react'
import styles from "./index.module.css"

const AboutSection = () => {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.aboutContainer}>
        <div className={styles.about}>
          <span>About Me</span>
          <span>I transform documented ideas into functioning scalable tech products.Passionate about using latest Technology. I keep things simple, clean and efficient.I love to trek into the mountains and explore new places.</span>
        </div>
        <div className={styles.experience}>
          <span>Work Experience</span>
          <div className={styles.companyInfo}>
            <div className={styles.workExperience}>
              <div className={styles.companyName}>
                <span>PCDS InfoTech - IT solutions company</span>
              </div>
              <div className={styles.role}>
                <div className={styles.rolecontainer}>
                  <h1>Role:
                    <span> Frontend Developer</span>
                  </h1>
                </div>
                <h1>Work:
                  <span> Build web apps using React, Redux, API , react-router. Worked with Function Component.Designed Pixel-clear UI from scratch.</span>
                </h1>
              </div>
            </div>
            <div className={styles.workExperience}>
              <div className={styles.companyName}>
                <span>RNBOLD - IT solutions company </span>
              </div>
              <div className={styles.role}>
                <div className={styles.rolecontainer}>
                  <h1>Role:</h1><span>Junior php developer</span>
                </div>
                <div className={styles.work}>
                <h1>Work:
                  <span>Handle complete Frontend
                    development.
                    Tested functionality of the
                    application code on multiple web
                    browsers.Worked on Phpmyadmin</span></h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
