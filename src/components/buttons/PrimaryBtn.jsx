import React from 'react';

const PrimaryBtn = (props) => {
  const { children } = props;
  const style = {
    backgroundColor: 'var(--primary-color-1',
    border: 'none',
    borderRadius: '10px',
    padding: '10px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <button style={style}>{children}</button>
  );
};

export default PrimaryBtn;
