import React from 'react'
import styles from "./index.module.css"
import map from "../../assests/images/mfr2.webp"
import notion from "../../assests/images/notionimg.png"

const BlogSection = () => {
  const blogs = [{
    name: "Difference between filter and map in JavaScript.",
    article: "https://medium.com/@amishagupta672/difference-between-filter-and-map-in-javascript-61ca3f4815b8",
    image: map,
    topic: "JAVASCRIPT",
    date: "February 10, 2023"
  },
  {
    name: "Why notion is important ? ",
    article: "https://medium.com/@amishagupta672/why-notion-is-important-70364b3fe8df",
    image: notion,
    topic: "Notion",
    date: "February 8, 2023"
  },
  ]
  return (
    <div id="blogs" className={styles.container}>
      <div className={styles.articleHeader}>
      <span>Blogs & Articles</span>
      </div>
      <div className={styles.blogSection}>
        {blogs.map((blog, index) => {
          return (
            <div key={index} className={styles.blogContainer}>
              <div className={styles.blogImage}>
                <img src={blog.image} width="100%" height="100%" alt="blog" />
              </div>
              <div className={styles.blog}>
                <a href={blog.article} rel="noreferrer" target="_blank"><h1>{blog.name}</h1></a>
                <div className={styles.date}>
                  <span>{blog.topic}</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BlogSection
