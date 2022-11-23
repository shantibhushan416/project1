import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./colorOptions.css";
const animatedComponents = makeAnimated();

const options = [
  { value: "produto 01", label: "red" },
  { value: "produto 02", label: "green" },
  { value: "produto 03", label: "blue" },
  { value: "produto 04", label: "pink" },
  { value: "produto 05", label: "yellow" },
  { value: "produto 06", label: "green" },
  { value: "produto 07", label: "grey" },
  { value: "produto 08", label: "violet" },
];

export const MultiSelect = () => {
  return (
    <>
      <Select
        defaultValue={[options[0], options[2]]}
        components={animatedComponents}
        isMulti
        options={options}
        className="select"
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        isLoading={false}
        isRtl={false}
        closeMenuOnSelect={false}
      />
    </>
  );
};
