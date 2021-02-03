import React, { Component } from "react";
import styles from "./headerLink.module.css";

class HeaderLink extends Component {
  state = {};
  render() {
    const { link, children, aStyle, ...rest } = this.props;
    return (
      <a className={`${styles.headerLink}`} href={link} {...rest}>
        {children}
      </a>
    );
  }
}

export default HeaderLink;
