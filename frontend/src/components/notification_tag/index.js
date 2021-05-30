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
          </div>
        </div>
      </div>
    );
}

export default Notification_tag