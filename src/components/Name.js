import React from 'react';

const Name = (props) => {
  console.log(props);
  //   <div>{this.props.name}</div>;
  return <div>{props.name}</div>;
};

export default Name;
