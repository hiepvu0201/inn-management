import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
function Component_NgangTrangHong(props) {
  return (
    <div>
      <div className="content11">
        {/* 1 */}
        <div style={{ display: "block" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="icon-hover-11">
              {/* <FontAwesomeIcon icon={faUsers} size="2x" color="#eb2f5b" /> */}
              {props.icon}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="topic">
            {/* Quản lý khách thuê */}
            {props.topic1}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="content">
              {/* Chức năng quản lý thông tin khách thuê, gồm các thông tin cá nhân, */}
              {/* thông tin liên hệ. */}
              {props.content1}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component_NgangTrangHong;
