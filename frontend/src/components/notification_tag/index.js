import React from 'react'

function Notification_tag(props) {
    return (
      <div>
        <div
          style={{
            width: "100%",
            height: "auto",
            backgroundColor: "white",
            display: "block",
            textAlign: "left",
            paddingLeft: "10px",
          }}
        >
          <div
            style={{
              width: "60%",
              height: "auto",
              fontFamily: "PT Sans, sans-serif",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
          {props.name}
            {/* Nghỉ lễ 30-4 và 1-5 */}
          </div>
          <div
            style={{
              width: "60%",
              height: "auto",
              fontFamily: "PT Sans, sans-serif",
              fontSize: "15px",
            }}
          >
          {props.description}
            {/* Ngày 30-4 và 1-5 mọi hoạt động xin được phép ngưng{" "} */}
          </div>
          <div
            style={{
              width: "60%",
              height: "auto",
              fontFamily: "PT Sans, sans-serif",
              fontSize: "12px",
              fontStyle:"italic"
            }}
          >
          {props.createdDate}
            {/* 2021-05-15T18:46:21.652+00:00{" "} */}
          </div>
        </div>
      </div>
    );
}

export default Notification_tag