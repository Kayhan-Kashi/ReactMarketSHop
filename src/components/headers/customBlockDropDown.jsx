import React, { Component } from "react";

class CustomBlockDropDown extends Component {
  state = {};

  renderChildren(children) {
    const result = (
      <table>
        <tbody>
          <tr>
            {React.Children.map(children, (i) => {
              return <td>{i}</td>;
            })}
          </tr>
        </tbody>
      </table>
    );
    return result;
  }

  render() {
    const { children } = this.props;
    return this.renderChildren(children);
  }
}

export default CustomBlockDropDown;
