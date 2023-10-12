import React, { useState } from 'react';
import dummy from '../db/centerData.json';
import CenterList from '../selfCheck/CenterList';

const DropMenuSe = () => {
  const onChange = (e) => {
    setkey(e.target.key);
  };

  const [showCanvos, setShowCanvos] = useState(false);
  const [key, setkey] = useState('');
  const addToCanvos = () => {
    setShowCanvos(true);
  };

  return (
    <div>
      <select onChange={onChange} value={key}>
        <optgroup label="시 / 군 / 구">
          {dummy.locationSe.map((item) => (
            <option
              onChange={addToCanvos}
              value={item.title}
              key={item.localid}
            >
              {item.title}
            </option>
          ))}
        </optgroup>
      </select>
      <CenterList keys={key} />
    </div>
  );
};

export default DropMenuSe;
