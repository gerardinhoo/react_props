import React from 'react';
import Post from "../Post/Post";
import blogPosts from "../../data";
import "./Posts.css"


 const Posts = () => {
  return (
    <div className="posts-container">
      {blogPosts.map((blog, i) => {
        return <Post key={i} post={blog} i={i} />
      })}
    </div>
  )
}

export default Posts
