import React from "react";
import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={s.item}>
      <span>{props.message}</span>
      <div className={s.post__likes}>
        <span>Like: {props.likeCount}</span>
        <span> ------------ </span>
        <span>Dis Like: {props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
