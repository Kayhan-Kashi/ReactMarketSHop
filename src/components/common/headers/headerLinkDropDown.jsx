import React, { Component } from "react";
import $ from "jquery";
import _ from "lodash";
import { getFinalStyles } from "../../util/auxStyles.js";

class HeaderLinkDropDown extends Component {
  constructor(props) {
    super(props);
    this.parentDivId = _.uniqueId("parent-div-");
    this.dropDownId = _.uniqueId("drop-down-");
    if (props.animationSpeed !== undefined) {
      this.animationSpeed = props.animationSpeed;
    }
  }

  state = {};
  animationSpeed = "slow";
  parentDivId = "";
  dropDownId = "";

  dropDownDiv_DefaultStyles = {
    display: "none",
    overflow: "hidden",
    lineHeight: "22px",
    background: "#fff",
    padding: "10px",
    position: "absolute",
    top: "35px",
  };

  title_DefaultStyles = {
    marginRight: "6px",
  };

  caretDownStyles = {
    position: "relative",
    top: "3px",
    marginRight: "4px",
  };

  showAlt = () => {
    var dropDown = $(`#${this.dropDownId}`).parent().parent();
    var dropdownTop = $(`#${this.dropDownId}`).parent().parent().outerHeight();
    $(`#${this.dropDownId}`).css("top", dropdownTop);
    var screensize = $(window).width();
    if (screensize > 200)
      $(`#${this.dropDownId}`).slideDown(this.animationSpeed);
  };

  show = () => {
    var screensize = $(window).width();
    if (screensize > 200)
      $(`#${this.dropDownId}`).slideDown(this.animationSpeed);
  };

  hide = () => {
    $(`#${this.dropDownId}`).stop(true, true).css("display", "none");
  };

  // getFinalStyles(internalStyles, externalStyles) {
  //   const styles = internalStyles;
  //   if (externalStyles !== undefined) {
  //     Object.keys(externalStyles).forEach((key) => {
  //       styles[key] = externalStyles[key];
  //     });
  //   }
  //   return styles;
  // }

  getTitle(title, externalTitleStyle) {
    if (typeof title === "string") {
      return (
        <a
          onMouseEnter={this.show}
          href={"http://www.kuff.com"}
          style={getFinalStyles(this.title_DefaultStyles, externalTitleStyle)}
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
      <div id={`${this.parentDivId}`} onMouseLeave={this.hide}>
        <span onMouseEnter={this.showAlt}>
          {this.getTitle(title, externalTitleStyle)}
          <i
            id="caret"
            className={`fa fa-caret-down`}
            aria-hidden="true"
            style={this.caretDownStyles}
          ></i>
        </span>

        <div
          id={this.dropDownId}
          className={`drop-down-menu`}
          style={getFinalStyles(
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
