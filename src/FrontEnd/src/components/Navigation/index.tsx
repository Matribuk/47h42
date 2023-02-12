import React from 'react';
import { Link } from 'react-router-dom';

const NavigationButtons = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <Link to="/page1">
        <button>Page 1</button>
      </Link>
      <Link to="/page2">
        <button>Page 2</button>
      </Link>
      <Link to="/page3">
        <button>Page 3</button>
      </Link>
    </div>
  );
};

export default NavigationButtons;
