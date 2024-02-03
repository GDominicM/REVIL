import React from 'react';
// import './listing.css';
// import { Link } from 'react-router-dom'
import { BsArrowRightShort } from 'react-icons/bs';
// import { AiFillHeart } from 'react-icons/ai';
// import { Col } from 'react-bootstrap'; // Importing Col component from react-bootstrap
// import './listing.scss';
// import '../../../Dashboard/dashboard.css'
// import products from '../../products';
// import Ratings from './Ratings';
// import Rating from './Rating';

export const Listing = () => {
  return (
    <div className='listingSection'>
      <div className="heading flex">
        <h1>Listing</h1>
        <button className='btn flex'>
          See All<BsArrowRightShort className="icon"/>   
        </button>
      </div>
    </div>
  );
};

export default Listing;
