import React from "react";
import "./style.css";
import Menu_client from "./../../../components/menu_client";
import { Form, Input, Radio } from "antd";
function Info() {
  return (
    <div>
      <div
        style={{ backgroundColor: "white", width: "100%", height: "100vmax" }}
      >
        <div style={{ height: "110px" }}>
          <Menu_client />
        </div>
        <div className="box">
          <div className="container">
            <div className="title">Thông tin người dùng</div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: "30%",
                  height: "auto",
                  display: "block",
                }}
              >
                <Form>
                  <div>
                    <Form.Item label="username" name="username">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                      <Input />
                    </Form.Item>
                    <Form.Item name="fullName" label="Họ và tên:">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Giới tính" name="sex">
                      <div style={{ display: "block", paddingRight: "30px" }}>
                        <Radio.Group>
                          <Radio label="Male">Nam</Radio>
                          <Radio label="Female">Nữ</Radio>
                        </Radio.Group>
                      </div>
                    </Form.Item>
                    <Form.Item label="Nghề nghiệp" name="job">
                      <Input />
                    </Form.Item>
                    <Form.Item name="address" label="Địa chỉ">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Số điện thoại" name="phoneNo">
                      <Input />
                    </Form.Item>
                   
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Info;
