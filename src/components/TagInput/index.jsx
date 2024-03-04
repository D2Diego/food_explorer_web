import React from "react";
import { TagsInput } from "react-tag-input-component";
import "./styles.css";

const TagInput = ({ selected, setSelected, name, placeHolder }) => {
  return (
    <div>
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
