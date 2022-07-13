import React from 'react'
import _ from 'lodash'
import { Redirect, Route } from 'react-router-dom';


const isAuthorized = () => {
    let flag = false;
    try {
        let state = JSON.parse(localStorage.getItem('state'))
        flag = !_.isEmpty(state?.login?.session?.jwtToken)
    } catch(err) {}
    return flag;
}
export default  ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthorized() ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}/>
)