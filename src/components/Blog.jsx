import React from "react";
import "./blog.css"; // Adjust the path as necessary
import { FaNewspaper } from "react-icons/fa6";

const Blog = () => {
  return (
    <>
      <div className="Blogs">
        <h1 className="Blo">Explore our blogs</h1>
        <div className="ttx">
          <div>
            <p className="pro">
              Stay informed. Stay healthy. Your guide to better living.
            </p>
            <a href="/blog" className="bgl">
              View All Blogs
            </a>
          </div>
          <div className="icon">
            <FaNewspaper
              style={{
                background: "transparent",
                color: "#81c784",
                padding: "0.5rem",
                borderRadius: "0",
              }}
              size={65}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
