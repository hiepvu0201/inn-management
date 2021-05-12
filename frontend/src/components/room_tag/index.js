import React from "react";
import { Images } from "./../../config/image";
function Room_tag(props) {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "block" }}>
            <div style={{ paddingTop: "10px" }}>
              {/* <img src={Images.IMAGE_ROOM} /> */}
              <img src={props.image}/>
            </div>
            <div
              style={{
                width: "100%",
                fontSize: "15px",
                fontFamily: "PT Sans, sans-serif",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {/* Số 9-10, dãy b5 ngõ 7 Kim Mã Thượng */}
              {props.position}
            </div>

            <div
              style={{
                width: "100%",
                fontSize: "18px",
                fontFamily: "PT Sans, sans-serif",
                textAlign: "center",
                color:"red"
              }}
            >
              {/* 2000000VND */}
              {props.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room_tag;
