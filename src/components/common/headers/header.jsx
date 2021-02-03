import React, { Component } from "react";
import styles from "./header.module.css";

class Header extends Component {
  state = {};

  renderLi(children) {
    return React.Children.map(children, (i) => (
      <li style={i.props.liStyle} className={styles.li}>
        {i}
      </li>
    ));
  }

  render() {
    const { children } = this.props;
    return (
      <nav>
        <div className={`container`}>
          <div style={{ lineHeight: "35px" }}>
            {/* <ul className={styles.ul}>
              {React.Children.map(children, (i) => (
                <li className={styles.li}>{i}</li>
              ))} */}
            {this.renderLi(children)}
            {/* </ul> */}
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
