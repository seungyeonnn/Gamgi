import React, { useState } from 'react';
import dummy from '../db/centerData.json';
import CenterList from './CenterList';

const DropdownBox = () => {
  const sizes = ['Small', 'Medium', 'Large'];
  const [value, setValue] = useState('Medium');

  return <div></div>;
};

export default DropdownBox;
