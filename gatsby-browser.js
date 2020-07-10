/* eslint-disable import/prefer-default-export, react/prop-types */
import React from 'react';
import Provider from './provider';

export const wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>;
};
