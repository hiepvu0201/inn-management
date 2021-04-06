import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital } from "@fortawesome/free-regular-svg-icons";
function Component_DocXanh(props) {
  return (
    <div>
      <div className="box-1">
        <div style={{ display: "block" }}>
          <div style={{ display: "flex", justifyContent: "center",paddingTop:"15px" }}>
            <div className="icon-hover-1">
              {/* <FontAwesomeIcon icon={faHospital} size="3x" color="#007c7e" /> */}
              {props.icon}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center",paddingTop:"10px" }}>
            <div className="topic-com-1">
            {/* Cơ sở vật chất */}
            {props.topic}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center",paddingTop:"10px" }}>
            <div  className="content-com-1">
              {/* Với quy mô các tòa nhà, số phòng lớn bạn cần quá nhiều thời gian */}
              {/* công sức để quản lý lưu trữ cũng như tìm kiếm thông tin dữ liệu. */}
            {props.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Component_DocXanh;
