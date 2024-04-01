import React from 'react'
import styles from "./index.module.css"
import live from "../../assests/icons/live.svg"
import git from "../../assests/icons/giticon.svg"
import youtube from "../../assests/images/youtubess.PNG"
import taskify from "../../assests/images/taskifyportfolio.PNG"
import weather from "../../assests/images/weather.PNG"
import spotify from "../../assests/images/spotifyimg.PNG"
import finder from "../../assests/images/finder.PNG"
import unikaksha from "../../assests/images/unikaksha.PNG"
import adminpanel from "../../assests/images/adminpanel.jpeg"
import digitalCoffee from "../../assests/images/digitalcoffee.PNG"
import chat from "../../assests/images/chat1.PNG"


const ProjectSection = () => {
    const projects = [
        {
            image:chat,
            github: "https://github.com/amishagupta21/Chat-application",
            video: "https://chatterapplication1.netlify.app/login",
            name: "Real-time chat application ",
            about: "Online chat is any kind of communication over the Internet that offers a real-time transmission of text messages from sender to receiver",
            tech: "ReactJs, JavaScript, HTML/CSS, Firebase, React-Router"
        },
        {
            image: digitalCoffee,
            github: "https://github.com/amishagupta21/DigitalCoffee",
            video: "https://meetwithcoffee.netlify.app/lobby.html",
            name: "Digital Coffee : Talk and Enjoy",
            about: "peer-to-peer video call application with lobby where we can join the room and invite another user with some kind of room id into our room",
            tech: "WebRTC, ReactJs, JavaScript, HTML/CSS, Redux, React-Router,Redux Saga"
        },
        {
            image:unikaksha ,
            github: "https://github.com/amishagupta21",
            video: "https://app.unikaksha.com/",
            name: "Unikaksha : Ed-Tech Platform",
            about: "Student Registration for different courses platform with stepper process with Authentication.",
            tech: "ReactJs, JavaScript, HTML/CSS, Redux, React-Router"
        },
        {
            image: adminpanel,
            github: "https://github.com/amishagupta21",
            video: "https://admin.unikaksha.com",
            name: "Unikaksha : Admin Panel",
            about: "Create and manage your tasks in just one place.",
            tech: "ReactJs, JavaScript, HTML/CSS, Redux, React-Router,Redux Saga"
        },
        {
            image: taskify,
            github: "https://github.com/amishagupta21/weather-app",
            video: "https://lnkd.in/dysjPu-C",
            name: "Taskify : Task Application",
            about: "Create and manage your tasks in just one place.",
            tech: "ReactJs, JavaScript, HTML/CSS, Redux, React-Router,Persists"
        },
        {
            image: youtube,
            github: "https://github.com/amishagupta21/Youtube-Clone",
            video: "https://lnkd.in/dE2sGevK",
            name: " Youtube Clone",
            about: "Search Videos, Watch Searched videos, Watch Comments and Titles, Watch Suggested Videos, Play videos of your choice",
            tech: "ReactJs, JavaScript, HTML/CSS, Hooks, React-Router, Axios, API"
        },
        {
            image: weather,
            github: "https://github.com/amishagupta21/weather-app",
            video: "https://www.youtube.com/watch?v=0b2Jab0PxRo&ab_channel=AmishaGupta",
            name: "Weather Web App",
            about: "Real-time weather with the help of API. I have taken an approach of designing first and then coding would follow.Search any city Weather.",
            tech: "ReactJs, Vaniall JavaScript, HTML/CSS, Hooks, React-Router, Axios, API"
        },
        {
            image: spotify,
            video: "https://spotify-listen-your-favourite.netlify.app/",
            github: "https://github.com/amishagupta21/spotify_clone",
            name: "Spotify Clone",
            about: "Search Songs, Watch Searched Songs, Play Songs of your choice.",
            tech: "ReactJs, Vaniall JavaScript, HTML/CSS, Hooks, React-Router, Axios, API"
        },
        {
            image: finder,
            video: "https://youtu.be/uvT0SB7FwCQ",
            github: "https://github.com/amishagupta21/Finder",
            name: "Finder - News Search",
            about: "Search News, Watch Searched News, Search News of any City.",
            tech: "ReactJs, Vaniall JavaScript, HTML/CSS, Hooks, React-Router, Axios, API"
        },

    ]
    return (
        <div id="projects" className={styles.container}>
        <h1 className={styles.title}>My Work & Projects</h1>
        <p className={styles.description}>Take a moment to view some of my latest projects. All the project below were built by me from the ground up.</p>
        <div className={styles.projects}>
            {projects.map((project, index) => {
                return (
                    <div key={index} className={styles.project}>
                        <img className={styles.projectImage} src={project.image} alt="project" />
                        <h1>{project.name}</h1>
                        <h2><span>Tech Stack: </span>{project.tech}</h2>
                        <div className={styles.links}>
                            <div className={styles.link}>
                                <img src={live} height={15} width={15} alt="liveicon" />
                                <a href={project.video} rel="noreferrer" target="_blank">Live Preview</a>
                            </div>
                            <div className={styles.link}>
                                <img src={git} height={15} width={15} alt="giticon" />
                                <a href={project.github} rel="noreferrer" target="_blank">View Code</a>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    </div>
    )
}

export default ProjectSection
