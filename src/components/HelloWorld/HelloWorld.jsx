import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HelloWorld = ({ className }) => (
  <div className={className}>Hello World</div>
);

HelloWorld.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(HelloWorld)`
  text-align:center;
  font-size:100px;
  background-color: #333;
  color: papayawhip;
`;
