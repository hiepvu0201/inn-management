import React from "react";
import "./style.css";
import { Images } from "../../config/image";
import { Input, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
function login() {
  return (
    <div>
      <div className="form-login">
        <div className="form-box">
          <div style={{ width: "100%", display: "block" }}>
            <div className="sign-in">ĐĂNG NHẬP</div>
            <div className="username">Tên đăng nhập</div>
            <div
              style={{ width: "90%", paddingLeft: "20px", paddingTop: "10px" }}
            >
              <Input placeholder="Nhập email" />
            </div>
            <div className="username">Mật khẩu</div>
            <div
              style={{ width: "90%", paddingLeft: "20px", paddingTop: "10px" }}
            >
              <Input placeholder="Nhập mật khẩu" />
            </div>
            <div className="forgetPW">Quên mật khẩu</div>
            <div
              className="box-btn"
              // style={{
              //   width: "100%",
              //   height: "auto",
              //   display: "flex",
              //   justifyContent: "center",
              //   paddingTop: "10px",
              //   paddingRight: "10px",
              //   paddingBottom: "20px",
              // }}
            >
              <Button
                className="btn-detailed"
                // style={{
                //   width: "335px",
                //   height: "auto",
                //   fontSize: "15px",
                //   backgroundColor: "#4485bc",
                //   color: "white",
                //   fontFamily: "Noto Sans JP, sans-serif",
                // }}
              >
                ĐĂNG NHẬP
              </Button>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "inline-flex",
                justifyContent: "center",
                backgroundColor: "#007c7e",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontFamily: "'Source Sans Pro', sans-serif"
                }}
              >
                <FontAwesomeIcon icon={faUserPlus} color="white" /> Bạn chưa có
                tài khoản,ĐĂNG KÝ  NGAY
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
