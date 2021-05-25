import React from 'react';
import { Route,Redirect } from 'react-router';

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };

export const PrivateRoute=({component: Component, ...rest})=>{
    return (
        <Route
          {...rest}
          render={props =>
            fakeAuth.isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location }
                }}
              />
            )
          }
        />
      );
}