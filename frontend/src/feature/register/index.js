import React from "react";
import {
  Input,
  Form,
  Button,
  message,
  notification,
  Radio,
  Select,
  Checkbox,
} from "antd";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import authApi from "./../../api/authApi";
import { WarningOutlined, CheckCircleFilled } from "@ant-design/icons";
import {Link} from "react-router-dom"
function register() {
  const onFinish = (values) => {
    const register = async () => {
      try {
        console.log("value", values);
        const response = await authApi.signup(values);
        console.log("Fetch register user successfully: ", response);

        notification.success({
          message: "Đăng ký thành công",
          icon: <CheckCircleFilled style={{ color: "#20da9b" }} />,
          description: `${response.data}`,
          placement: "topRight",
        });
      } catch (error) {
        console.log("failed to register ưser: ", error.response);
        console.log(JSON.parse(error.response.config.data).userName);
        if (error.response.data === "Lỗi: Người dùng đã tồn tại!") {
          notification.error({
            message: `Đăng ký thất bại`,
            icon: <WarningOutlined style={{ color: "#f26051" }} />,
            description: `Tài khoản ${
              JSON.parse(error.response.config.data).userName
            } đã tồn tại`,
            placement: "topRight",
          });
        } else if (error.response.data === "Lỗi: Email đã tồn tại!") {
          notification.error({
            message: `Đăng ký thất bại`,
            icon: <WarningOutlined style={{ color: "#f26051" }} />,
            description: `Email ${
              JSON.parse(error.response.config.data).email
            } đã tồn tại`,
            placement: "topRight",
          });
        }
      }
    };
    register();
  };

  return (
    <div>
      <div className="form-register">
        <div className="form-boxres">
          <div style={{ width: "100%", height: "auto", display: "block" }}>
            <div className="sign-up">ĐĂNG KÝ</div>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <div className="username">Username</div>
              <div className="input-username">
                <Form.Item name="userName">
                  <Input placeholder="Nhập username" />
                </Form.Item>
              </div>
              <div className="username">Email</div>
              <div className="input-username">
                <Form.Item name="email">
                  <Input placeholder="Nhập email" />
                </Form.Item>
              </div>
              <div className="username">Mật khẩu</div>
              <div className="inputpw">
                <Form.Item name="password" className="abc">
                  <Input.Password placeholder="Nhập mật khẩu" />
                </Form.Item>
              </div>
              <div className="btn-register">
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                  className="detailed-btn-register"
                  >
                    ĐĂNG KÝ
                  </Button>
                </Form.Item>
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
                  fontSize: "15px",
                  color: "white",
                  fontFamily: "'Source Sans Pro', sans-serif",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <FontAwesomeIcon icon={faUserPlus} color="white" /> Bạn chưa có
                tài khoản,
                <Link to="/login">
                  <div
                    style={{
                      fontSize: "15px",
                      color: "white",
                      fontFamily: "'Source Sans Pro', sans-serif",
                    }}
                  >
                    ĐĂNG NHẬP NGAY
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default register;
