import React, { Component } from "react";
import HeaderLink from "./headerLink";
import styles from "./telHeaderLink.module.css";

class TelHeaderlink extends Component {
  state = {};
  render() {
    const { children } = this.props;
    return (
      <HeaderLink style={{ top: "-1px" }}>
        {children}
        {
          <i
            style={{ marginRight: "7px" }}
            className={`fa fa-phone ${styles.faPhone}`}
          ></i>
        }
      </HeaderLink>
    );
  }
}

export default TelHeaderlink;
