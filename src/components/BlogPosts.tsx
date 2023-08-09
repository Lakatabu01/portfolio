import React from "react";
import { Posts, Posts2, Posts1, Posts3, Posts4, Posts5 } from "./PhotoImports";

const BlogPosts: React.FC = () => {
  return (
    <section className="blog-posts">
      <h2>Recent blog posts</h2>

      <div className="blog-flex">
        <div className="each-blog">
          <img
            className="project-image pic"
            sizes="(max-width: 600px) 80vw, (max-width: 1400px) 30vw, 800px"
            srcSet={`
        ${Posts} 200w,
        ${Posts1} 607w,
        ${Posts2} 640w
`}
            src={Posts2}
            alt=""
          />

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
            ipsam.
          </p>
        </div>

        <div className="each-blog">
          <img
            className="project-image pic"
            sizes="(max-width: 600px) 80vw, (max-width: 1400px) 30vw, 800px"
            srcSet={`
${Posts3} 200w,
${Posts4} 456w,
${Posts5} 640w
`}
            src={Posts5}
            alt=""
          />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            quibusdam.
          </p>
        </div>
      </div>
    </section>
  );
};
export default BlogPosts;
