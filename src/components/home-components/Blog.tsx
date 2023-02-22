import { Link } from "react-router-dom";
import blogItems from "../../data/blogdata";

import classes from "./styles/blog.module.css";

const Blog = () => {
  return (
    <section className={classes.ourBlog}>
      <h1>Our Blog</h1>
      <div className={classes.ourBlogsContainer}>
        <div className={classes.slideshow}>
          <div className={classes.slideshowSlider}>
            {blogItems.map((blog) => (
              <div className={classes.blog} key={blog.id}>
                <img src={blog.blogImage} alt="" />
                <div className={classes.contentContainer}>
                  <div className={classes.content}>
                    <div>
                      <h2>{blog.title}</h2>
                      <h3>{blog.summary}</h3>
                      <p>{`${
                        blog.description.length > 50
                          ? `${blog.description.slice(0, 50)}...`
                          : blog.description
                      }`}</p>
                    </div>

                    <div className={classes.readMoreBtn}>
                      <Link to="">Read More</Link>
                    </div>
                  </div>
                  <div className={classes.authorContainer}>
                    <address>
                      <p>By {blog.author}</p>
                      <p>{blog.createdAt}</p>
                    </address>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
