import React, { Component } from "react";
import { getFinalStyles } from "../../util/auxStyles.js";

class Header extends Component {
  state = {};

  //#region styles
  div_DefaultStyle = {
    lineHeight: "35px",
    boxSizing: "border-box",
    // overflow: "auto",
  };

  li_DefaultStyle = {
    bordeColor: "#ccc",
    padding: "0 10px",
    float: "right",
    listStyleType: "none",
    borderLeft: "1px dotted #5b9ad4",
    position: "relative",
  };

  ul_DefaultStyle = {
    listStyle: "none",
    padding: "0",
    margin: "0",
    boxSizing: "border-box",
  };

  //#endregion

  //#region methods
  renderLi(children) {
    const result = React.Children.map(children, (i) => (
      <li
        className={i.props.className}
        style={getFinalStyles(this.li_DefaultStyle, i.props.liStyle)}
      >
        {i}
      </li>
    ));
    return result;
  }
  //#endregion

  render() {
    const { children, headerId } = this.props;
    return (
      <nav>
        <div className={`container`}>
          <div style={this.div_DefaultStyle} id={headerId}>
            <ul style={this.ul_DefaultStyle}>{this.renderLi(children)}</ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
