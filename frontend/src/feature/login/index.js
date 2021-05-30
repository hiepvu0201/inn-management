import React, { useState, useEffect } from "react";
import "./style.css";
import { Images } from "../../config/image";
import { Input, Button, Form } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import userApi from "./../../api/usersApi";
function login() {
  const [loginstate, setloginstate] = useState([]);
  const login =async(values)=>{
    try {
      console.log("value", values);
      const response = await userApi.login(values);
      console.log("Fetch login user succesfully: ", response);
    } catch (error) {
      console.log("failed to login ưser: ", error);
    }
  }
  const onFinish = (values) => {
    
    login(values);
  };
  return (
    <div>
      <div className="form-login">
        <div className="form-box">
          <div style={{ width: "100%", display: "block" }}>
            <div className="sign-in">ĐĂNG NHẬP</div>
            <Form
              onFinish={onFinish}
              name="basic"
              initialValues={{ remember: true }}
            >
              <div className="username">Tên đăng nhập</div>
              <Form.Item
                name="userName"
                rules={[
                  { required: true, message: "Xin vui lòng nhập userName!" },
                ]}
              >
                <div
                  style={{
                    width: "90%",
                    paddingLeft: "20px",
                    paddingTop: "10px",
                  }}
                >
                  <Input placeholder="Nhập email" />
                </div>
              </Form.Item>
              <div className="username">Mật khẩu</div>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Xin vui lòng nhập mật khẩu!" },
                ]}
              >
                <div
                  style={{
                    width: "90%",
                    paddingLeft: "20px",
                    paddingTop: "10px",
                  }}
                >
                  <Input placeholder="Nhập mật khẩu" />
                </div>
              </Form.Item>

              <div className="forgetPW">Quên mật khẩu</div>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "10px",
                  paddingRight: "10px",
                  paddingBottom: "20px",
                }}
              >
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                      width: "335px",
                      height: "auto",
                      fontSize: "15px",
                      backgroundColor: "#4485bc",
                      color: "white",
                      fontFamily: "Noto Sans JP, sans-serif",
                    }}
                  >
                    ĐĂNG NHẬP
                  </Button>
                </Form.Item>
              </div>
            </Form>

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
                  fontFamily: "'Source Sans Pro', sans-serif",
                }}
              >
                <FontAwesomeIcon icon={faUserPlus} color="white" /> Bạn chưa có
                tài khoản,ĐĂNG KÝ NGAY
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
