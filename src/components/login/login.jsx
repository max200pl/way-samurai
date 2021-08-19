import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { login, logout } from "../../redux/auth-reducer";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import style from "./../common/FormsControls/FormsControls.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Login"}
          name={"email"}
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          validate={[required]}
          component={Input}
          type={"password"}
        />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} />
        remember me
      </div>

      {props.error && (
        <div className={style.formSummaryError}>{props.error}</div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe); // login это thunk
  };

  if (props.isAuth) {
    // редирект на страницу если пользователь зарегистрирован
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  // получаем данные с State для проверки на то что пользователь зарегистрирован
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login, logout })(Login);
