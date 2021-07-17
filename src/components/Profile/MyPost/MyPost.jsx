import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/state";
import s from "./MyPost.module.css";
import Post from "./Post/Post";
const MyPost = (props) => {
  let postElements = props.postData.map((post) => (
    <Post message={post.message} likeCount={post.likeCount} />
  ));

  let NewPostElement = React.createRef(); //создаем ссылку на элемент стучимся к DOM element

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = NewPostElement.current.value; // получаем данные с textarea
    //let action = { type: "UPDATE-NEW-POST-TEXT", newText: text };
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
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
