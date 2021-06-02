import React from "react";
import { Input,  Form, Button,message,notification } from "antd";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import authApi from './../../api/authApi'
function register() {
   const onFinish = (values) => {
    const register = async () => {
      try {
        console.log("value", values);
        const response = await authApi.signup(values);
        console.log("Fetch register user successfully: ", response);
        notification.success({
        
           description:`${response.data}`,
          placement: "topRight",
        }
        );
      } catch (error) {
        console.log("failed to register ưser: ", error);
      }
    };
    register();
  };
  return (
    <div>
      <div className="form-register">
        <div className="form-box">
          <div style={{ width: "100%", display: "block" }}>
            <div className="sign-up">ĐĂNG KÝ</div>
            <Form
              onFinish={onFinish}
              name="basic"
              initialValues={{ remember: true }}
            >
              <div className="username">Username</div>
              <div
                style={{
                  width: "90%",
                  paddingLeft: "20px",
                  paddingTop: "5px",
                  paddingBottom: "10px",
                }}
              >
                <Form.Item name="userName">
                  <Input placeholder="Nhập họ và tên" />
                </Form.Item>
              </div>
              <div className="username">Email</div>
              <div
                style={{
                  width: "90%",
                  paddingLeft: "20px",
                  paddingTop: "5px",
                  paddingBottom: "10px",
                }}
              >
                <Form.Item name="email">
                  <Input placeholder="Nhập email" />
                </Form.Item>
              </div>
              <div className="username">Mật khẩu</div>
              <div
                style={{
                  width: "90%",
                  paddingLeft: "20px",
                  paddingTop: "5px",
                  paddingBottom: "10px",
                }}
              >
                <Form.Item name="password">
                  <Input placeholder="Nhập password" />
                </Form.Item>
              </div>
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
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    width: "335px",
                    height: "auto",
                    fontSize: "15px",
                    backgroundColor: "#0c61f2",
                    color: "white",
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                >
                  ĐĂNG KÝ
                </Button>
              </div>
            </Form>

            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#007c7e",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  fontSize: "18px",
                  color: "white",
                  fontFamily: "Open Sans', sans-serif",
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

export default register;
