import React, { Component } from "react";
import HeaderLinkDropDown from "../common/headers/headerLinkDropDown";

class CurrencyDropDown extends Component {
  state = {};

  ulStyle = {
    right: "0",
    left: "auto",
    listStyle: "none",
    padding: "0px !important",
    marginBottom: "0px",
  };

  liStyle = {
    borderBottom: "1px solid #eee",
    paddingRight: "8px",
    fontSize: "12px",
  };

  imgStyle = {
    marginLeft: "5px",
  };

  btnStyle = {
    fontSize: "12px",
    color: "black",
  };

  render() {
    return (
      <HeaderLinkDropDown
        title="تومان"
        dropDownDivStyles={{ padding: "0px" }}
        animationSpeed="fast"
        titleStyle={{ color: "#333333", fontSize: "11px" }}
      >
        <ul style={this.ulStyle}>
          <li style={this.liStyle}>
            <button className="btn btn-link" style={this.btnStyle}>
              € Euro
            </button>
          </li>
          <li style={this.liStyle}>
            <button className="btn btn-link" style={this.btnStyle}>
              £ Pound Sterling
            </button>
          </li>
          <li style={this.liStyle}>
            <button className="btn btn-link" style={this.btnStyle}>
              $ USD
            </button>
          </li>
        </ul>
      </HeaderLinkDropDown>
    );
  }
}

export default CurrencyDropDown;
