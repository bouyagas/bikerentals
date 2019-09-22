import React from 'react';
import { connect } from 'react-redux';

const CheckOut = props => {
  return (
    <div>
      <p className="title  is-size-5 ">Total: ${props.total.toFixed(2)}</p>
      <br />
      <button
        className="button is-primary is-medium"
        onClick={() => alert('Thanks for your order')}
      >
        Checkout
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items: state.addedItems,
    total: state.total,
  };
};

export default connect(mapStateToProps)(CheckOut);
