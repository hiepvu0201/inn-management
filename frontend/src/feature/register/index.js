import React from "react";
import { Input, Radio, Select,Checkbox,Button } from "antd";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
function register() {
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  function onChange_accept(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <div>
      <div className="form-register">
        <div className="form-box">
          <div style={{ width: "100%",height:"auto", display: "block" }}>
            <div className="sign-up">ĐĂNG KÝ</div>
            <div className="username">Username</div>
            <div
              style={{
                width: "90%",
                paddingLeft: "20px",
                paddingTop: "5px",
                paddingBottom: "10px",
              }}
            >
              <Input placeholder="Nhập username" />
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
              <Input.Password placeholder="Nhập mật khẩu" />
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
              <Input placeholder="Nhập email" />
            </div>
            <div className="username">Họ và tên</div>
            <div
              style={{
                width: "90%",
                paddingLeft: "20px",
                paddingTop: "5px",
                paddingBottom: "10px",
              }}
            >
              <Input placeholder="Nhập họ và tên" />
            </div>
            <div className="username">CMND</div>
            <div
              style={{
                width: "90%",
                paddingLeft: "20px",
                paddingTop: "5px",
                paddingBottom: "10px",
              }}
            >
              <Input placeholder="Nhập CMND" />
            </div>
            <div className="username">Giới tính</div>
            <div
              style={{
                width: "90%",
                paddingLeft: "20px",
                paddingTop: "5px",
                paddingBottom: "10px",
                textAlign: "left",
              }}
            >
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>Nam</Radio>
                <Radio value={2}>Nữ</Radio>
              </Radio.Group>
            </div>
            <div className="username">Số điện thoại</div>
            <div
              style={{
                width: "90%",
                paddingLeft: "20px",
                paddingTop: "5px",
                paddingBottom: "10px",
              }}
            >
              <Input placeholder="Nhập số điện thoại" />
            </div>
            <div className="username">Nghề ngiệp</div>
            <div
              style={{
                width: "90%",
                paddingLeft: "20px",
                paddingTop: "5px",
                paddingBottom: "10px",
              }}
            >
              <Input placeholder="Nhập nghề nghiệp" />
            </div>
            <div className="username">Địa chỉ</div>
            <div
              style={{
                width: "90%",
                paddingLeft: "20px",
                paddingTop: "5px",
                paddingBottom: "10px",
                textAlign: "left",
              }}
            >
              <Input placeholder="Nhập địa chỉ" />
            </div>
            <div className="username">Quyền</div>
            <div
              style={{
                width: "90%",
                paddingLeft: "20px",
                paddingTop: "5px",
                paddingBottom: "10px",
              }}
            >
              <Select style={{width:"100%"}} placeholder="Quyền người dùng" />
            </div>
            <div
              style={{
                width: "90%",
                paddingLeft: "20px",
                paddingTop: "5px",
                paddingBottom: "30px",
                textAlign: "left",
              }}
            >
              <Checkbox onChange={onChange}>
                Đồng ý với điều khoản sử dụng
              </Checkbox>
            </div>
            <div
              // style={{
              //   width: "100%",
              //   height: "auto",
              //   display: "flex",
              //   justifyContent: "center",
              //   paddingTop: "10px",
              //   paddingRight: "10px",
              //   paddingBottom: "20px",
              // }}
              className="btnbtn"
            >
              <Button
                className="detailed-btn"
                // style={{
                //   width: "335px",
                //   height: "auto",
                //   fontSize: "15px",
                //   backgroundColor: "#0c61f2",
                //   color: "white",
                //   fontFamily: "'Open Sans', sans-serif",
                // }}
              >
                ĐĂNG KÝ
              </Button>
            </div>
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
                className="btn-btn"
                // style={{
                //   fontSize: "18px",
                //   color: "white",
                //   fontFamily: "Open Sans', sans-serif",
                // }}
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
