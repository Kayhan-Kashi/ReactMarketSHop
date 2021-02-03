import React, { Component } from "react";
import HeaderLink from "../common/headers/headerLink";

class UserHeader extends Component {
  state = {};
  render() {
    return (
      <div style={{ borderRight: "1px dotted #5b9ad4", paddingRight: "5px" }}>
        <HeaderLink style={{ marginLeft: "10px" }} href="#">
          ثبت نام
        </HeaderLink>
        <HeaderLink
          style={{ paddingRight: "12px", borderRight: "1px dotted #5b9ad4" }}
          href="#"
        >
          ورود
        </HeaderLink>
      </div>
    );
  }
}

export default UserHeader;
