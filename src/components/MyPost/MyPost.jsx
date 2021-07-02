import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";
const MyPost = () => {
  return (
    <div>
      <h2>My posts</h2>
      <div className={s.newPost}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <h3>New posts</h3>
      <div className={s.posts}>
        <Post />
      </div>
      {/* posts */}
    </div>
  );
};

export default MyPost;
