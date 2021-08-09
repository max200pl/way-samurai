import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";

const mapStateToProps = (state) => {
  // берем данные из State и засовываем в Props презентационной компоненте
  return {
    posts: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  // будем передавать наши CallBack в презентационную компоненту
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },

    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
