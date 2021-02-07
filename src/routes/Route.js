import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../config/Auth';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const currentUser = useContext(AuthContext);

  if (isPrivate) {
    if (currentUser.currentUser === false) {
      return <Redirect to="/login" />;
    }
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.protoTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
