import React from "react";
import classNames from "classnames/bind";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

import styles from "./App.module.scss";
const cx = classNames.bind(styles);

const App = () => {
  return (
    <div className={cx("App")}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
