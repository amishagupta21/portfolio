import React from 'react'
import styles from "./index.module.css"
import hello from "../../assests/icons/hello.jpg"
import myAvatar from "../.././assests/images/waving.png"

const HeroSection = () => {
  return (
    <div id="home" className={styles.container}>
    <div className={styles.about}>
        <h1>Hi <img src={hello} height={30} width={30} alt="hello" />,<br />
          I'm a Full Stack Developer
        </h1>
        <p>
          I am a programmer and love to write code daily.
          I am excited by solving challenges, bringing my ideas to life with code and looking for ways to help others make a difference.
        </p>
      <div className={styles.cta}>
        <button>Hire me</button>
        <button><a href='https://drive.google.com/file/d/1Ww8o3XgFsLETdb58Vn0xIPv50IXfDb1i/view?usp=drive_link' rel="noreferrer" target="_blank">Download CV</a></button>
      </div>
    </div>
    <div className={styles.imageContainer}>
      <img src={myAvatar} alt="Amisha Gupta's avatar" />
    </div>
  </div>
  )
}

export default HeroSection
