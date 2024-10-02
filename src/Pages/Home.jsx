import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Home Page</h1>
      <div className="links-container">
        <Link to={'/signup'} className="home-link">Sign Up</Link> <br /><br />
        <Link to={'/login'} className="home-link">Login</Link> <br /><br />
        <Link to={'/product'} className="home-link">Add Product</Link> <br /><br />
        <Link to={'/allproduct'} className="home-link">All Products</Link> <br /><br />
      </div>
    </div>
  );
}

export default Home;
