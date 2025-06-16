import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '15px 30px',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    borderRadius: '8px',
    margin: '20px auto',
    width: 'fit-content',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  return (
    <div style={headerStyle}>Grocery List</div>
  );
};

export default Header;
