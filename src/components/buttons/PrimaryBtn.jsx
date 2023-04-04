import React from 'react';

const PrimaryBtn = (props) => {
  const { children } = props;
  return (
    <button className='primary-btn'>{children}</button>
  );
};

export default PrimaryBtn;
