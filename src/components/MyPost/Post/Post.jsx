import React from "react";
import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={s.item}>
      <span>{props.message}</span>
      <span>like</span>
      <span>DisLike</span>
    </div>
  );
};

export default Post;
