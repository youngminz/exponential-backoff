import React from "react";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx("Header")}>
      <h1>truncated exponential backoff simulator</h1>
    </header>
  );
};

export default Header;
