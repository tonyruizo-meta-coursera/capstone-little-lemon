import React from 'react';

const PrimaryBtn = (props) => {
  const { children, onClick } = props;
  return (
    <button onClick={onClick} className='primary-btn'>{children}</button>
  );
};

export default PrimaryBtn;
