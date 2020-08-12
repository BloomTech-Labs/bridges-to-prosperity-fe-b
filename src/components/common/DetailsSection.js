import React from 'react';
import { Divider } from 'antd';

const Details = ({ props }) => {
  return (
    <>
      <Divider />
      <h3>{props.name}</h3>
      <p>{props.details}</p>
    </>
  );
};

export default Details;
