import React from "react";
import { Posts3, Posts4, Posts5 } from "./PhotoImports";
import { posts6, posts7, posts8 } from "./PhotoImports";

const BlogPosts: React.FC = () => {
  return (
    <section className="blog-posts">
      <h2>Recent blog posts</h2>

      <div className="blog-flex">
        <div className="each-blog">
          <img
            className="project-image pic"
            sizes="(max-width: 600px) 90vw, (max-width: 1400px) 30vw, 800px"
            srcSet={`
${Posts3} 200w,
${Posts4} 456w,
${Posts5} 640w
`}
            src={Posts5}
            alt="picture representing blog information"
          />

          <div className="blog-details">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              quibusdam.
            </p>
            <div>
              <p className="preview">Preview &#8594; </p>
            </div>
          </div>
        </div>

        <div className="each-blog">
          <img
            className="project-image pic"
            sizes="(max-width: 600px) 90vw, (max-width: 1400px) 30vw, 800px"
            srcSet={`
            ${posts6} 200w,
            ${posts7} 501w,
            ${posts8} 640w
`}
            src={posts8}
            alt="picture representing blog information"
          />

          <div className="blog-details">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              quibusdam.
            </p>
            <div>
              <p className="preview">Preview &#8594; </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogPosts;
