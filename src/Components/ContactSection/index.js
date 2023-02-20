import React from 'react'
import styles from "./index.module.css"
import contact from "../../assests/images/contact1.png"
import email from "../../assests/images/email.png"
import location from "../../assests/images/location.png"
import linkdin from "../../assests/images/linkdin1.png"
import github from "../../assests/images/github.png"
import medium from "../../assests/images/medium.png"
import instagram from "../../assests/images/instagram.jpg"

const ContactSection = () => {
  const contacts = [
    {
      logo: contact,
      name: "Phone",
      about: "Let's have a call",
      contact: "9027994083"
    },
    {
      logo: email,
      name: "Email",
      about: "Drop me a line",
      contact: "amishagupta672@gmail.com"
    },
    {
      logo: location,
      name: "Location",
      map:"https://www.google.com/maps/place/Varanasi,+Uttar+Pradesh/@25.3207626,82.9911089,12z/data=!3m1!4b1!4m6!3m5!1s0x398e2db76febcf4d:0x68131710853ff0b5!8m2!3d25.3176452!4d82.9739144!16zL20vMDFqOTIy",
      about: "Varanasi , India",
      contact: "View on Google map"
    }
  ]
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.contactContainer}>
        <span>Contact Me</span>
        <span>I'm happy to answer any question you have or provide an estimate. Just send me a message in the form below with any questions you may have.</span>
      </div>
      <div className={styles.personalContactContainer}>
        {contacts.map(contact => {
          return (
            <div className={styles.contact}>
              <div className={styles.icon}>
                <img src={contact.logo} height={30} width={30} alt="contacticon" />
              </div>
              <div className={styles.contactfield}>
                <span>{contact.name}</span>
                <span>{contact.about}</span>
                <a href={contact.map} rel="noreferrer" target="_blank"><span>{contact.contact}</span></a>
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles.foooterContainer}>
        <div className={styles.socialMediaIcon}>
          <img src={linkdin} height={30} width={30} alt="icon" />
          <img src={github} height={30} width={30} alt="icon" />
          <img src={medium} height={30} width={30} alt="icon" />
          <img src={instagram} height={30} width={30} alt="icon" />
        </div>
        <div className={styles.design}>
          <span>© 2022 Developed By AmishaGupta</span>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
