import React from 'react'
import styles from "./index.module.css"
import map from "../../assests/images/mfr2.webp"
import notion from "../../assests/images/notionimg.png"
import script from "../../assests/images/script.png"

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
  {
    name: "The concept for writing a script tag ",
    article: "https://medium.com/@amishagupta672/understand-the-concept-for-writing-a-script-tag-for-javascript-in-the-head-section-and-the-body-4e5ef56c07f2",
    image: script,
    topic: "JAVASCRIPT",
    date: "February 28, 2023"
  },
  ]
  return (
    <div id="blogs" className={styles.container}>
    <span className={styles.title}>Blogs & Articles</span>
    <div className={styles.blogs}>
      {blogs.map((blog, index) => {
        return (
          <a
            href={blog.article}
            rel="noreferrer"
            target="_blank"
            key={index}
            className={styles.blogContainer}
          >
            <img
              className={styles.blogImage}
              src={blog.image}
              width="100%"
              height="100%"
              alt="blog"
            />
            <div className={styles.blog}>
              <h1>{blog.name}</h1>
              <div className={styles.date}>
                <span>{blog.topic}</span>
                <span>{blog.date}</span>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  </div>
  )
}

export default BlogSection
