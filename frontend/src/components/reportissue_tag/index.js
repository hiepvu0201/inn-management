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
            paddingTop: "10px",
            paddingBottom: "10px",
            borderRadius: "8px",
            boxShadow: "0 1px 10px 0 rgb(0 0 0 / 12%)",
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
                paddingLeft:"87px"
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
                paddingLeft: "100px",
              }}
            >
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
                paddingLeft: "62px",
              }}
            >
              {props.status}
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
              Tên người tạo báo cáo:
            </div>
            <div
              style={{
                width: "88%",
                fontFamily: "PT Sans, sans-serif",
                fontSize: "15px",
                textAlign: "left",
                paddingLeft: "5px",
              }}
            >
              {props.reporter}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Reportissues_tag;
