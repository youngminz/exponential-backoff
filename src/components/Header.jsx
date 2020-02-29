import React from "react";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx("Header")}>
      <h1>truncated exponential backoff simulator</h1>
      <p>
        Truncated exponential backoff is a standard error handling strategy for
        network applications in which a client periodically retries a failed
        request with increasing delays between requests. (Ref:{" "}
        <a href="https://cloud.google.com/storage/docs/exponential-backoff">
          Google Cloud Documentation
        </a>
        )
      </p>
      <p>The formula is following:</p>
      <code>
        &#123;current backoff&#125; = min(
        <br />
        &nbsp;&nbsp;&#123;min retry backoff&#125; * (2 ** (&#123;retry #&#125; -
        1)), <br />
        &nbsp;&nbsp;&#123;max retry backoff&#125;
        <br />)
      </code>
    </header>
  );
};

export default Header;
