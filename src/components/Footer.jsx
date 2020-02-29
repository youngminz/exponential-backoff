import React from "react";
import classNames from "classnames/bind";

import styles from "./Footer.module.scss";
const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx("Footer")}>
      <p>
        Truncated exponential backoff is a standard error handling strategy for
        network applications in which a client periodically retries a failed
        request with increasing delays between requests. (Ref:{" "}
        <a href="https://cloud.google.com/storage/docs/exponential-backoff">
          Google Cloud Documentation
        </a>
        )
      </p>
      <p>Formula:</p>
      <code>
        &#123;current backoff&#125; = min(
        <br />
        &nbsp;&nbsp;&#123;min retry backoff&#125; * (2 ** (&#123;retry #&#125; -
        1)), <br />
        &nbsp;&nbsp;&#123;max retry backoff&#125;
        <br />)
      </code>
      <p>
        Source Code:{" "}
        <a href="https://github.com/youngminz/exponential-backoff">
          https://github.com/youngminz/exponential-backoff
        </a>
      </p>
    </footer>
  );
};

export default Footer;
