import React, { Component } from "react";
import HeaderLink from "../headers/headerLink.jsx";

class EmailHeaderLink extends Component {
  state = {};
  render() {
    const { children } = this.props;
    return (
      <HeaderLink>
        {children}
        {<i style={{ marginRight: "7px" }} className={`fa fa-envelope`}></i>}
      </HeaderLink>
    );
  }
}

export default EmailHeaderLink;
