import React, { useState, useRef } from "react";
import "./Input.scss";

const Input = ({
  label,
  value,
  type = "text",
  placeholder,
  onChange,
  addons,
  maxLength,
  minLength,
}) => {
  /**
   * wrapper div를 클릭해도 input으로 포커스 되는기능 구현
   */
  const inputRef = useRef();
  const handleWrapperClick = () => {
    inputRef.current.focus();
  };

  const handleChange = e => {
    if (onChange && onChange instanceof Function) {
      onChange(e);
    }
  };

  return (
    <div className="parameter" onClick={() => handleWrapperClick()}>
      {label && <label>{label}</label>}
      <div className="inner-wrapper">
        <input
          ref={inputRef}
          type={type}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          minLength={minLength}
          onChange={e => handleChange(e)}
        />
        {addons && <div>{addons}</div>}
      </div>
    </div>
  );
};

export default Input;
