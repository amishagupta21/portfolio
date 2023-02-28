import React, { useState } from 'react'
import styles from "./index.module.css"
import hamburgerIcon from "../../assests/icons/hamburger.png"
const NavigationBar = () => {
    
        const [openNavOptions, setOpenNavOptions] = useState(false);

        const optionToggler = () => setOpenNavOptions(!openNavOptions);
      
        const options = ["home", "about", "skills", "projects", "blogs", "contact"];
      
        return (
          <header className={styles.container}>
            <h1 className={styles.logo}>
              Amisha<span>Gupta</span>
            </h1>
            <nav className={styles.nav}>
              {options.map((option, index) => {
                return (
                  <a key={index} href={`#${option}`}>
                    <span>{option}</span>
                  </a>
                );
              })}
            </nav>
            <img
              onClick={optionToggler}
              className={styles.hamburger}
              src={hamburgerIcon}
              alt="hamburger Icon"
            />
            {openNavOptions && (
              <div className={styles.dropdownOptions}>
                <nav className={styles.dropdownNav}>
                  {options.map((option, index) => {
                    return (
                      <a key={index} onClick={optionToggler} href={`#${option}`}>
                        <span>{option}</span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            )}
          </header>
        );
      };


export default NavigationBar
