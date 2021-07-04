import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";
const MyPost = (props) => {
  let postData = [
    { id: 1, message: "hi, how are you", likeCount: 12 },
    { id: 2, message: "Its my first post", likeCount: 10 },
  ];

  let postElements = postData.map((post) => (
    <Post message={post.message} likeCount={post.likeCount} />
  ));
  return (
    <div className={s.postBlock}>
      <h1>My Post</h1>

      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>

      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPost;
