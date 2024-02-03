// src/components/product/Product.jsx
import React from 'react';
import Ratings from '../Screens/Ratings';
import products from '../Screens/products';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { AiFillHeart } from 'react-icons/ai';

import './product.css'; // Add your CSS file import here

function Product({ product }) {
  return (
    // <div className='listingSection'>
    //   <div className="heading flex">
        <div className="secContainer flex">
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} xl={3}>
              <div className='my-3 p-3 rounded productBox'>
                <AiFillHeart className="icon" />
                <Link to={`/product/${product._id}`}>
                  <img src={product.image} alt={`Image of ${product.name}`} className='productImage' />
                </Link>
                <div className='productInfo'>
                  <Link to={`/product/${product._id}`} className='productName'>
                    <strong>{product.name}</strong>
                  </Link>
                  <div className='ratings'>
                    <Ratings value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                  </div>
                  <div className='price'>
                    ${product.price}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </div>
    //   </div>
    // </div>
  );
}

export default Product;
