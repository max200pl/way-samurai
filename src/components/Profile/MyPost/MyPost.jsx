import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";
const MyPost = (props) => {
  let postElements = props.postData.map((post) => (
    <Post message={post.message} likeCount={post.likeCount} />
  ));

  let NewPostElement = React.createRef();

  let addPost = () => {
    let text = NewPostElement.current.value;
    props.addPost(text);
  };

  let onPostChange = () => {
    let text = NewPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postBlock}>
      <h1>My Post</h1>

      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={NewPostElement}
            value={props.newPostText}
          />
        </div>
        <button onClick={addPost}>Add post</button>
      </div>

      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPost;
