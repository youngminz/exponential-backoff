import React, { useState, useRef } from "react";
import classNames from "classnames/bind";

import styles from "./Input.module.scss";
const cx = classNames.bind(styles);

const Input = ({
  label,
  value,
  type,
  placeholder,
  onChange,
  addons,
  maxLength,
  minLength
}) => {
  const [active, setActive] = useState(false);
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
      className={cx("Input", { active })}
      onClick={() => handleWrapperClick()}
    >
      {label && <label>{label}</label>}
      <div className={cx("inner-wrapper")}>
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
        {addons && <div className={cx("addons")}>{addons}</div>}
      </div>
    </div>
  );
};

export default Input;
