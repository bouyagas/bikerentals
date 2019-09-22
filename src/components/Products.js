import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';
import ProductsItem from './ProductsItem';

const Products = props => {
  const handleAddItem = id => {
    props.addToCart(id);
  };

  const bikeList = props.bikes.products.map(bike => (
    <ProductsItem key={bike.id} bike={bike} handleAddItem={handleAddItem} />
  ));

  return (
    <div>
      <h1 className="title is-1 has-text-centered">Our Items</h1>
      <div className="columns is-multiline">{bikeList}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    bikes: state.bikes,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
