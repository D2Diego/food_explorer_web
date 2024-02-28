import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

import './styles.css'

const tagInput = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <h1></h1>
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="fruits"
        placeHolder="Digite aqui"
      />
    </div>
  );
};

export default tagInput;