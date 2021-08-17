import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


let mapStateToPropsForRedirect = (state) => ({
     isAuth: state.auth.isAuth, // флаг из State если пользователь зарегистрирован
});

export const withAuthRedirect = (Component) => // когда вызываем withAuthRedirect получаем две контейнерные компоненты RedirectComponent и ConnectedAuthRedirectComponent
{

     // Создаем контейнерную компоненту 
     class RedirectComponent extends React.Component
     {
          render()
          {
               if (!this.props.isAuth) return <Redirect to='/login' />

               return <Component{...this.props} />
          }
     }


     // RedirectComponent делаем обвертку для того чтобы connect к STORE 
     let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
          RedirectComponent
     );

     return ConnectedAuthRedirectComponent;
}