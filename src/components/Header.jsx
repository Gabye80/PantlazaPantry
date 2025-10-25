import React from 'react';
import '../App.css';

function Header({ category, changeCategory }) {
  return (
    <div className="menu">
      <h1>Pantlaza's Pantry</h1>
      <p>Discover the newfound delicacies of Ixalan!</p>
      <div className="categories">
        <button onClick={() => changeCategory('Seafood')} className={category === 'Seafood' ? 'active' : ''}>Seafood</button>
        <button onClick={() => changeCategory('Dessert')} className={category === 'Dessert' ? 'active' : ''}>Desserts</button>
      </div>
    </div>
  );
}

export default Header;