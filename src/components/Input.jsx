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
  minLength
}) => {
  const [active, setActive] = useState(false);
  /**
   * wrapper div를 클릭해도 input으로 포커스 되는기능 구현
   */
  const inputRef = useRef();
  const handleWrapperClick = () => {
    setActive(true);
    inputRef.current.focus();
  };

  const handleChange = e => {
    if (onChange && onChange instanceof Function) {
      onChange(e);
    }
  };

  return (
    <div
      className={`Input ${active ? "active" : ""}`}
      onClick={() => handleWrapperClick()}
    >
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
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
        />
        {addons && <div className="addons">{addons}</div>}
      </div>
    </div>
  );
};

export default Input;
