import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchProducts } from '../actions';

const Filter = props => (
  <button className="btn btn-primary" onClick={props.fetchProducts}>Get Products</button>
);

Filter.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
};

export default connect(null, { fetchProducts })(Filter);
