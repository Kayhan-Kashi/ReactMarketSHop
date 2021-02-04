import React, { Component } from "react";
import HeaderLinkDropDown from "../common/headers/headerLinkDropDown";
import englishFlag from "../../image/flags/gb.png";
import arabicFlag from "../../image/flags/ar.png";

class LanguageDropDown extends Component {
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

  lastLiStyle = {
    paddingRight: "8px",
    fontSize: "12px",
  };

  imgStyle = {
    marginLeft: "5px",
  };

  btnStyle = {
    fontSize: "12px",
  };

  state = {};
  render() {
    const { headerId } = this.props;
    return (
      <HeaderLinkDropDown
        title={
          <button
            className="btn btn-link"
            style={{ padding: "0px", color: "#333333", fontSize: "11px" }}
          >
            <img
              style={{ marginLeft: "4px" }}
              src={englishFlag}
              alt="انگلیسی"
              title="انگلیسی"
            />
            {"انگلیسی"}
          </button>
        }
        dropDownDivStyles={{ padding: "0px" }}
        animationSpeed="fast"
        headerId={headerId}
      >
        <ul style={this.ulStyle}>
          <li style={this.liStyle}>
            <button className="btn btn-link" style={this.btnStyle}>
              <img
                style={this.imgStyle}
                src={englishFlag}
                alt="انگلیسی"
                title="انگلیسی"
              />
              {"انگلیسی"}
            </button>
          </li>
          <li style={this.liStyle}>
            <button className="btn btn-link" style={this.btnStyle}>
              <img
                style={this.imgStyle}
                src={arabicFlag}
                alt="عربی"
                title="عربی"
              />
              {"عربی"}
            </button>
          </li>
        </ul>
      </HeaderLinkDropDown>
    );
  }
}

export default LanguageDropDown;
