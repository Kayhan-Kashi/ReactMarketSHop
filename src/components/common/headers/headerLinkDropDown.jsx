import React, { Component } from "react";
import $ from "jquery";
import _ from "lodash";
import { getFinalStyles } from "../../util/auxStyles.js";

class HeaderLinkDropDown extends Component {
  constructor(props) {
    super(props);
    this.parentDivId = _.uniqueId("parentDiv-");
    this.dropDownId = _.uniqueId("dropdown-");
    if (props.animationSpeed !== undefined) {
      this.animationSpeed = props.animationSpeed;
    }
  }

  state = {};
  animationSpeed = "slow";
  parentDivId = "";
  dropDownId = "";

  //#region styles
  dropDownDiv_DefaultStyles = {
    display: "none",
    float: "left",
    overflow: "hidden",
    lineHeight: "22px",
    background: "#fff",
    padding: "10px",
    position: "absolute",
    top: "35px",
    zIndex: "1013",
    margin: "0px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
  };

  title_DefaultStyles = {
    marginRight: "6px",
  };

  caretDownStyles = {
    position: "relative",
    top: "3px",
    marginRight: "4px",
  };
  //#endregion

  //#region methods
  showDropDown = (headerId) => {
    var screensize = $(window).width();
    if (screensize > 200)
      $(`#${this.dropDownId}`).slideDown(this.animationSpeed);
  };

  hideDropDown = () => {
    $(`#${this.dropDownId}`).stop(true, true).css("display", "none");
  };

  getTitle(title, externalTitleStyle) {
    if (typeof title === "string") {
      return (
        <button
          style={getFinalStyles(this.title_DefaultStyles, externalTitleStyle)}
          onMouseEnter={() => this.showDropDown("header")}
          className="btn-link dropdown-toggle"
          data-toggle="dropdown"
        >
          {title}
        </button>
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
      headerId,
    } = this.props;
    return (
      <div id={`${this.parentDivId}`} onMouseLeave={() => this.hideDropDown()}>
        <span onMouseEnter={() => this.showDropDown(headerId)}>
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
          className={`dropdown-menu`}
          style={getFinalStyles(
            this.dropDownDiv_DefaultStyles,
            externalDivStyle
          )}
          onMouseLeave={() => this.hideDropDown()}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default HeaderLinkDropDown;
