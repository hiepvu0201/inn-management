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
            boxShadow: "0 1px 10px 0 rgb(0 0 0 / 12%)",
            borderRadius: "8px",
            paddingTop: "15px",
            paddingBottom: "15px",
          }}
        >
         
          <div style={{ width: "100%", height: "auto", display: "flex" }}>
            <div
              style={{
                width: "7%",
                height: "auto",
                fontFamily: "PT Sans, sans-serif",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Tiêu đề:
            </div>
            <div
              style={{
                width: "93%",
                height: "auto",
                fontFamily: "PT Sans, sans-serif",
                fontSize: "20px",
              }}
            >
              {props.name}
            </div>
          </div>
          <div style={{ width: "100%", height: "auto", display: "flex" }}>
            <div
              style={{
                width: "7%",
                height: "auto",
                fontFamily: "PT Sans, sans-serif",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Mô tả:
            </div>
            <div
              style={{
                width: "93%",
                height: "auto",
                fontFamily: "PT Sans, sans-serif",
                fontSize: "20px",
              }}
            >
              {props.description}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Notification_tag