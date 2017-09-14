import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

const renderProducts = productList => (
  _.map(productList, product => (
    <li key={product.id}> {product.name} </li>
  ))
);

const ProductList = props => (
  <ul>
    { renderProducts(props.products) }
  </ul>
);

function mapStateToProps({ products }) {
  return { products };
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

ProductList.defaultProps = {
  products: [],
};


export default connect(mapStateToProps)(ProductList);
