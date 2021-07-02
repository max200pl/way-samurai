import React from "react";
import s from "./Post.module.css";
const Post = () => {
  return (
    <div className={s.item}>
      <span>post 1</span>
      <span>like</span>
      <span>DisLike</span>
    </div>
  );
};

export default Post;
