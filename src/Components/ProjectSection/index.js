import React from 'react'
import styles from "./index.module.css"
import live from "../../assests/icons/live.svg"
import git from "../../assests/icons/giticon.svg"
import youtube from "../../assests/images/youtubess.PNG"
import taskify from "../../assests/images/taskifyportfolio.PNG"
import weather from "../../assests/images/weather.PNG"
import spotify from "../../assests/images/spotifyimg.PNG"
import finder from "../../assests/images/finder.PNG"

const ProjectSection = () => {
    const projects = [
        {    
            image:taskify,
            github:"https://github.com/amishagupta21/weather-app",
            video:"https://lnkd.in/dysjPu-C",
            name: "Taskify : Task Application",
            about: "Create and manage your tasks in just one place.",
            tech: "ReactJs, JavaScript, HTML/CSS, Redux, React-Router, Redux-Persists"
        },
        {   
            image:youtube,
            github:"https://github.com/amishagupta21/Youtube-Clone",
            video:"https://lnkd.in/dE2sGevK",
            name: " Youtube Clone",
            about: "Search Videos, Watch Searched videos, Watch Comments and Titles, Watch Suggested Videos, Play videos of your choice",
            tech: "ReactJs, JavaScript, HTML/CSS, Hooks, React-Router, Axios, API"
        },
        {
            image:weather,
            github:"https://github.com/amishagupta21/weather-app",
            video:"https://www.youtube.com/watch?v=0b2Jab0PxRo&ab_channel=AmishaGupta",
            name: "Weather Web App",
            about: "Real-time weather with the help of API. I have taken an approach of designing first and then coding would follow.Search any city Weather.",
            tech: "ReactJs, Vaniall JavaScript, HTML/CSS, Hooks, React-Router, Axios, API"
        },
        { 
            image:spotify,
            video:"https://spotify-listen-your-favourite.netlify.app/",
            github:"https://github.com/amishagupta21/spotify_clone",
            name: "Spotify Clone",
            about: "Search Songs, Watch Searched Songs, Play Songs of your choice.",
            tech: "ReactJs, Vaniall JavaScript, HTML/CSS, Hooks, React-Router, Axios, API"
        },
        {
            image:finder,
            video:"https://youtu.be/uvT0SB7FwCQ",
            github:"https://github.com/amishagupta21/Finder",
            name: "Finder - News Search",
            about: "Search News, Watch Searched News, Search News of any City.",
            tech: "ReactJs, Vaniall JavaScript, HTML/CSS, Hooks, React-Router, Axios, API"
        },

    ]
    return (
        <div id="projects" className={styles.container}>
            <div className={styles.aboutSkill}>
                <span>My Work & Projects</span>
                <span>Take a moment to view some of my latest projects. All the project below were built by me from the ground up.</span>
            </div>
            <div className={styles.projectContainer}>
                {projects.map((project,index) => {
                    return (
                        <div key={index} className={styles.project}>
                            <div className={styles.projectImage}>
                                 <img src={project.image} height={150} width={260} alt="project"/>
                            </div>

                            <div className={styles.aboutProjectImage}>
                                <h1>{project.name}</h1>
                                <h2><span>Tech Stack: </span>{project.tech}</h2>
                            </div>
                              <div className={styles.projectLink}>
                                 <div className={styles.liveLink}>
                                    <img src={live} height={15} width={15} alt="liveicon"/>
                                    <a href={project.video} rel="noreferrer" target="_blank"><span>Live Preview</span></a>
                                 </div>
                                 <div className={styles.githubLink}>
                                    <img src={git} height={15} width={15} alt="giticon"/>
                                    <a href={project.github} rel="noreferrer" target="_blank"><span>View Code</span></a>
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
