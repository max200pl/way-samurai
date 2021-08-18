import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPost.module.css";
import Post from "./Post/Post";
const MyPost = (props) => {
  let postElements = props.posts.map((post) => (
    <Post message={post.message} likeCount={post.likeCount} key={post.id} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostTex);
  };

  return (
    <div className={s.postBlock}>
      <h1>My Post</h1>

      <AddPostFormRedux onSubmit={onAddPost} />

      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

const addNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newPostTex" />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({
  form: "ProfileAddNewPostForm",
})(addNewPostForm);

export default MyPost;
