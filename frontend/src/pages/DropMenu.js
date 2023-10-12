import React, { useState } from 'react';
import dummy from '../db/centerData.json';
import CenterList from '../selfCheck/CenterList';

const DropMenu = () => {
  /* const onClick = (e) => {
    setkey(e.target.key);
  };

  const [showCanvos, setShowCanvos] = useState(false);
  const [key, setkey] = useState('');
  const addToCanvos = () => {
    setShowCanvos(true);
  }; */

  return (
    /*<div>
      <select onClick={onClick} value={key}>
        <optgroup label="시 / 도">
          {dummy.locationDo.map((item) => (
            <option onClick={addToCanvos} value={item.title} key={item.id}>
              {item.title}
            </option>
          ))}
        </optgroup>
      </select>
      {showCanvos && <CenterList keys={key} />}
    </div> */
    <div></div>
  );
};

export default DropMenu;
