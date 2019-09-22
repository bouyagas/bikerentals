import React from 'react';
import { connect } from 'react-redux';
import { addQuantity, subtractQuantity } from './actions/cartActions';
import CheckOut from './CheckOut';

const Cart = props => {
  const handleAddQuantity = id => {
    props.addQuantity(id);
  };

  const handleSubtractQuantity = id => {
    props.subtractQuantity(id);
  };

  let addedItems = props.items.length ? (
    props.items.map(item => {
      return (
        <li className="column is-4" key={item.id}>
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-128x128">
                    <img className="is-rounded" src={item.image} alt="bike" />
                  </figure>
                  <br />
                  <p className="title is-size-4 is-capitalized has-text-centered">
                    {item.product_type}
                  </p>
                </div>
                <div className="card-content is-pulled-right">
                  <p className="title  is-size-5 ">{item.name}</p>
                  <p className="subtitle  is-size-4">{`$${item.price}`}</p>
                  <p>Quantity: {item.quantity}</p>
                  <br />
                  <div>
                    <button
                      className="button  is-outlined"
                      onClick={() => handleAddQuantity(item.id)}
                    >
                      <i className="fas fa-sort-up"></i>
                    </button>
                    <button
                      className="button  is-outlined"
                      onClick={() => handleSubtractQuantity(item.id)}
                    >
                      <i className="fas fa-sort-down"></i>
                    </button>
                  </div>

                  <br />
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    })
  ) : (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <p className="title  is-size-5">Nothing.</p>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <h1 className="title is-1 has-text-centered">You have ordered</h1>
      <div className="columns is-multiline">{addedItems}</div>
      <br />
      <CheckOut />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items: state.addedItems,
    total: state.total,
    quantity: state.quantity,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
