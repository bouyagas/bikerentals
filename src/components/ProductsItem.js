import React from 'react';

const ProductsItem = ({ bike, handleAddItem }) => {
  return (
    <div className="column is-4">
      <div className="box">
        <div className="card">
          <div className="card-image">
            <figure className="image is-5by4">
              <img src={bike.image} alt="bike" />
            </figure>
          </div>

          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title  is-size-4 has-text-centered">
                  {bike.name}
                </p>
                <p className="subtitle  is-size-4 has-text-centered">{`$${bike.price}`}</p>
                <button
                  className="button is-primary is-medium is-pulled-right "
                  onClick={() => handleAddItem(bike.id)}
                >
                  <i className="fas fa-plus-circle"></i>
                </button>
                <p className="title is-size-4 is-capitalized">
                  {bike.product_type}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
