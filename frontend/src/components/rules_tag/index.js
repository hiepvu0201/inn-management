import React from "react";

function Rules_tag(props) {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          backgroundColor: "white",
          boxShadow: "2px 5px gray",
        }}
      >
        <div style={{ width: "100%", display: "flex" }}>
          <div
            style={{
              width: "9%",
              fontFamily: "PT Sans, sans-serif",
              fontWeight: "bold",
              fontSize: "15px",
              textAlign: "left",
            }}
          >
            Tên nội quy:
          </div>
          <div
            style={{
              width: "91%",
              fontFamily: "PT Sans, sans-serif",
              fontSize: "15px",
              textAlign: "left",
            }}
          >
            {props.name}
          </div>
        </div>
        <div style={{ width: "100%", display: "flex" }}>
          <div
            style={{
              width: "10%",
              fontFamily: "PT Sans, sans-serif",
              fontWeight: "bold",
              fontSize: "15px",
              textAlign: "left",
            }}
          >
            Mô tả chi tiết:
          </div>
          <div
            style={{
              width: "90%",
              fontFamily: "PT Sans, sans-serif",
              fontSize: "15px",
              textAlign: "left",
              paddingRight: "15px",
            }}
          >
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules_tag;
