import React, { useState, useEffect } from "react";
import "./style.css";
import { Images } from "../../config/image";
import { Input, Button, Form } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import authApi from "./../../api/authApi";
import Cookies from "js-cookie";
import { fakeAuth } from "../../fakeAuth";
import { Link, Redirect, useHistory } from "react-router-dom";

function Login(props) {
  const [loginstate, setloginstate] = useState([]);
  const [Directstate, setDirectstate] = useState({
    redirectToReferrer: false,
  });
  const onFinish = (values) => {
    const login = async () => {
      try {
        console.log("value", values);
        const response = await authApi.signin(values);
        console.log("Fetch login user successfully: ", response);
        fakeAuth.authenticate(() => {
          setDirectstate(() => ({
            redirectToReferrer: true,
          }));
        });
        console.log("<<", response.data.accessToken);
        Cookies.set("Bearer", response.data.accessToken);
        Cookies.set("id", response.data.id);
        Cookies.set("userName", response.data.username);
        Cookies.set("roles", response.data.roles[0]);
      } catch (error) {
        console.log("failed to login ưser: ", error.response);
      }
    };

    login();
  };
  const { from } = props.location.state || { from: { pathname: "/" } };
  const { redirectToReferrer } = Directstate;
  if (redirectToReferrer === true) {
    return <Redirect to={from} />;
  }
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
              <div className="usernamelog">Username</div>
              <div className="input-usernamelogin">
                <Form.Item name="userName">
                  <Input placeholder="Nhập username" />
                </Form.Item>
              </div>
              <div className="username">Mật khẩu</div>
              <div className="inputpw-log">
                <Form.Item name="password">
                  <Input.Password placeholder="Nhập mật khẩu" />
                </Form.Item>
              </div>
              <div className="btn-registerab">
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="detailed-btn-registerab"
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
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <FontAwesomeIcon icon={faUserPlus} color="white" /> Bạn chưa có
                tài khoản,
                <Link to="/register">
                  <div
                    style={{
                      fontSize: "15px",
                      color: "white",
                      fontFamily: "'Source Sans Pro', sans-serif",
                    }}
                  >
                    ĐĂNG KÝ NGAY
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

export default Login;
