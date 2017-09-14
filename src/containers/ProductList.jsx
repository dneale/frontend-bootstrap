import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

const renderProducts = productList => (
  _.map(productList, product => (
    <tr key={product.id}>
      <td>{product.name}</td>
      <td>{product.stock}</td>
      <td>{product.department}</td>
    </tr>
  ))
);

const ProductList = props => (
  <div className="container">
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Stock Level</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        { renderProducts(props.products) }
      </tbody>
    </table>
  </div>
);

function mapStateToProps({ products }) {
  return { products };
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
};

ProductList.defaultProps = {
  products: [],
};


export default connect(mapStateToProps)(ProductList);
