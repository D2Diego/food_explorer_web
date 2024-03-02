import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

import './styles.css'

const TagInput = ({ selected, setSelected, name, placeHolder }) => {

  return (
    <div>
      <h1></h1>
      <TagsInput
        value={selected}
        onChange={setSelected}
        name={name}
        placeHolder={placeHolder}
      />
    </div>
  );
};

export default TagInput;