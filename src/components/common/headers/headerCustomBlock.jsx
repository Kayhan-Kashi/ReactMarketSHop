import React from "react";
import styles from "./headerCustomBlock.module.css";

const HeaderCustomBlock = ({ imgLink, title, text, btnLink, float }) => {
  return (
    <div style={{ width: "260px", height: "300px", float: `${float}` }}>
      <table>
        <tbody>
          <tr>
            <td>
              <img alt={imgLink} width="250px" height="130px" src={imgLink} />
            </td>
          </tr>
          <tr>
            <td>
              <h4>{title}</h4>
            </td>
          </tr>
          <tr>
            <td>{text}</td>
          </tr>
          <tr>
            <td>
              <strong>
                <a
                  className={`btn btn-default btn-sm ${styles.aText}`}
                  href={btnLink}
                >
                  ادامه مطلب
                </a>
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HeaderCustomBlock;
