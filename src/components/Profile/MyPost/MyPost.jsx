import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";
const MyPost = (props) => {
  return (
    <div className={s.postBlock}>
      <h1>My Post</h1>

      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>

      <div className={s.posts}>
        <Post message="hi, how are you" likeCount="0" />
        <Post message="Its my first post" likeCount="23" />
      </div>
    </div>
  );
};

export default MyPost;
