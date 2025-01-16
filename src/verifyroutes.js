import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

const verifyroutes = ({ component: Component, ...rest }) => {
  const token = Cookies.get('access_token');

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default verifyroutes;
