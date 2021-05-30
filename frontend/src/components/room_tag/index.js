import React from "react";
import { Images } from "./../../config/image";
import "./style.css";
import { Link } from "react-router-dom";

function Room_tag(props) {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: " #e6e6e6",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "block" }}>
            <div style={{ paddingTop: "10px" }}>
              <img
                src={`${props.images}`}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: "40%",
                  fontSize: "15px",
                  fontFamily: "PT Sans, sans-serif",
                  fontWeight: "bold",
                  color: "#3fcc68",
                }}
              >
                Số phòng:
              </div>
              <div
                style={{
                  width: "100%",
                  fontSize: "15px",
                  fontFamily: "PT Sans, sans-serif",
                }}
              >
                {props.roomNo}
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: "45%",
                  fontSize: "15px",
                  fontFamily: "PT Sans, sans-serif",
                  fontWeight: "bold",
                  color: "#3fcc68",
                }}
              >
                Chi nhánh:
              </div>
              <div
                style={{
                  width: "100%",
                  fontSize: "15px",
                  fontFamily: "PT Sans, sans-serif",
                }}
              >
                {props.location}
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: "20%",
                  fontSize: "15px",
                  fontFamily: "PT Sans, sans-serif",
                  fontWeight: "bold",
                  color: "#3fcc68",
                }}
              >
                Vị trí:
              </div>
              <div
                style={{
                  width: "100%",
                  fontSize: "15px",
                  fontFamily: "PT Sans, sans-serif",
                }}
              >
                {props.position}
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: "40%",
                  fontSize: "15px",
                  fontFamily: "PT Sans, sans-serif",
                  fontWeight: "bold",
                  color: "#3fcc68",
                }}
              >
                Thiết bị:
              </div>
              <div
                style={{
                  width: "100%",
                  fontSize: "15px",
                  fontFamily: "PT Sans, sans-serif",
                  paddingRight: "10px",
                }}
              >
                {props.facilities}
              </div>
            </div>
            <div style={{ textAlign: "center", paddingTop: "10px" }}>
              <Link
                to={{
                  pathname: `detailroom/${props.id}`,
                  state: {
                    id: props.id,
                    roomNo: props.roomNo,
                    position: props.position,
                    facilities: props.facilities,
                    location:props.location,
                    images: props.images,
                  },
                }}
              >
                <button className="btn"> Xem chi tiết</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Room_tag;
