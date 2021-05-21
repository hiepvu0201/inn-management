import React from 'react'

function Reportissues_tag(props) {
    return (
      <div>
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            backgroundColor: "white",
            boxShadow: "2px 5px gray",
            paddingLeft: "15px",
            paddingTop:"10px",
            paddingBottom:"10px"
          }}
        >
          <div style={{ width: "100%", display: "flex" }}>
            <div
              style={{
                width: "6%",
                fontFamily: "PT Sans, sans-serif",
                fontWeight: "bold",
                fontSize: "15px",
                textAlign: "left",
              }}
            >
              Tiêu đề:
            </div>
            <div
              style={{
                width: "94%",
                fontFamily: "PT Sans, sans-serif",
                fontSize: "15px",
                textAlign: "left",
              }}
            >
              {/* Phòng trừ Covid */}
              {props.title}
            </div>
          </div>
          <div style={{ width: "100%", display: "flex" }}>
            <div
              style={{
                width: "5%",
                fontFamily: "PT Sans, sans-serif",
                fontWeight: "bold",
                fontSize: "15px",
                textAlign: "left",
              }}
            >
              Mô tả:
            </div>
            <div
              style={{
                width: "95%",
                fontFamily: "PT Sans, sans-serif",
                fontSize: "15px",
                textAlign: "left",
                paddingRight: "15px",
              }}
            >
              {/* Phòng trừ Covid */}
              {props.description}
            </div>
          </div>
          <div style={{ width: "100%", display: "flex" }}>
            <div
              style={{
                width: "8%",
                fontFamily: "PT Sans, sans-serif",
                fontWeight: "bold",
                fontSize: "15px",
                textAlign: "left",
              }}
            >
              Tình trạng:
            </div>
            <div
              style={{
                width: "92%",
                fontFamily: "PT Sans, sans-serif",
                fontSize: "15px",
                textAlign: "left",
                paddingRight: "15px",
              }}
            >
              {/* Phòng trừ Covid */}
              {props.status}
            </div>
          </div>
          <div style={{ width: "100%", display: "flex" }}>
            <div
              style={{
                width: "7%",
                fontFamily: "PT Sans, sans-serif",
                fontWeight: "bold",
                fontSize: "15px",
                textAlign: "left",
              }}
            >
              Ngày tạo:
            </div>
            <div
              style={{
                width: "93%",
                fontFamily: "PT Sans, sans-serif",
                fontSize: "15px",
                textAlign: "left",
                paddingRight: "15px",
              }}
            >
              {/* Phòng trừ Covid */}
              {props.createdDate}
            </div>
          </div>
          <div style={{ width: "100%", display: "flex" }}>
            <div
              style={{
                width: "12%",
                fontFamily: "PT Sans, sans-serif",
                fontWeight: "bold",
                fontSize: "15px",
                textAlign: "left",
              }}
            >
              Ngày giải quyết:
            </div>
            <div
              style={{
                width: "88%",
                fontFamily: "PT Sans, sans-serif",
                fontSize: "15px",
                textAlign: "left",
                paddingRight: "15px",
              }}
            >
              {/* Phòng trừ Covid */}
              {props.solvedDate}
            </div>
          </div>
          <div style={{ width: "100%", display: "flex" }}>
            <div
              style={{
                width: "18%",
                fontFamily: "PT Sans, sans-serif",
                fontWeight: "bold",
                fontSize: "15px",
                textAlign: "left",
              }}
            >
              Tên người tạo báo cáo:
            </div>
            <div
              style={{
                width: "82%",
                fontFamily: "PT Sans, sans-serif",
                fontSize: "15px",
                textAlign: "left",
                paddingRight: "15px",
              }}
            >
              {/* Phòng trừ Covid */}
              {props.reporter}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Reportissues_tag;
