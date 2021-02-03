import React, { Component } from "react";
import $ from "jquery";
import styles from "./headerLinkDropDown.module.css";
import _ from "lodash";

class HeaderLinkDropDown extends Component {
  constructor(props) {
    super(props);
    this.dropDownId = _.uniqueId("drop-down-");
    if (props.animationSpeed !== undefined) {
      this.animationSpeed = props.animationSpeed;
    }
  }

  state = {};
  animationSpeed = "slow";
  dropDownId = "";

  show = () => {
    var screensize = $(window).width();
    if (screensize > 991)
      $(`#${this.dropDownId}`).slideDown(this.animationSpeed);
  };

  hide = () => {
    $(`#${this.dropDownId}`).stop(true, true).css("display", "none");
  };

  dropDownDiv_DefaultStyles = {
    display: "none",
    overflow: "hidden",
    lineHeight: "22px",
    background: "#fff",
    padding: "10px",
    position: "absolute",
    top: "35px",
  };

  titleStyle = {
    marginRight: "6px",
  };

  getFinalStyles(internalStyles, externalStyles) {
    const styles = internalStyles;
    if (externalStyles !== undefined) {
      Object.keys(externalStyles).forEach((key) => {
        styles[key] = externalStyles[key];
      });
    }
    return styles;
  }

  getTitle(title, externalTitleStyle) {
    if (typeof title === "string") {
      return (
        <a
          onMouseEnter={this.show}
          href={"http://www.kuff.com"}
          style={this.getFinalStyles(this.titleStyle, externalTitleStyle)}
        >
          {title}
        </a>
      );
    } else {
      return title;
    }
  }

  render() {
    const {
      title,
      children,
      dropDownDivStyles: externalDivStyle,
      titleStyle: externalTitleStyle,
    } = this.props;
    return (
      <div onMouseLeave={this.hide}>
        <span onMouseEnter={this.show}>
          {this.getTitle(title, externalTitleStyle)}
          <i
            id="caret"
            className={`fa fa-caret-down ${styles.caretDown}`}
            aria-hidden="true"
          ></i>
        </span>

        <div
          id={this.dropDownId}
          className={`drop-down-menu`}
          style={this.getFinalStyles(
            this.dropDownDiv_DefaultStyles,
            externalDivStyle
          )}
          onMouseLeave={this.hide}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default HeaderLinkDropDown;
