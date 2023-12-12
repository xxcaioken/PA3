import React from 'react';
import './Us.css';

const Us = () => {
  return (
    <div className="us-container">
      <header className="header">
        <h1>Welcome to Our Company</h1>
      </header>
      <section className="desc">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <img
        src="https://www.eowin.com/wp-content/uploads/2021/03/archive.png"
        alt="Archive"
        className="archive-image"
      />
    </div>
  );
};

export default Us;
