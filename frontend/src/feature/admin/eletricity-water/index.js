import React, { useState } from "react";
import "./style.css";
import Menu_AdminPage from "./../../../components/menu_adminpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faPlug } from "@fortawesome/free-solid-svg-icons";
import { faSave, faMoneyBillAlt } from "@fortawesome/free-regular-svg-icons";
import {
  Select,
  Popconfirm,
  message,
  Modal,
  Form,
  Input,
  DatePicker,
  Space,
  Radio,
  Upload,
  Button,
  Table,
  InputNumber,
} from "antd";
function Electricity_Water() {
  //radio
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const [value_4, setValue_4] = React.useState(4);

  const onChange_4 = (e) => {
    console.log("radio checked", e.target.value);
    setValue_4(e.target.value);
  };
  const [value_5, setValue_5] = React.useState(7);

  const onChange_5 = (e) => {
    console.log("radio checked", e.target.value);
    setValue_5(e.target.value);
  };
  const [value_find, setValue_find] = React.useState(1);

  const onChange_find = (e) => {
    console.log("radio checked", e.target.value);
    setValue_find(e.target.value);
  };
  //Datepicker
  function onChange_week(date, dateString) {
    console.log(date, dateString);
  }
  function onChange_find_week(date,dateString){
    console.log(date, dateString);

  }
  //modal
  const [isModalVisible_2, setIsModalVisible_2] = useState(false);

  const showModal_2 = () => {
    setIsModalVisible_2(true);
  };
  const handleOk_2 = () => {
    setIsModalVisible_2(false);
  };
  const handleCancel_2 = () => {
    setIsModalVisible_2(false);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  //table
  const data = [
    {
      key: "1",
      room: "001",
      electric_old: "100",
      electric_new: "300",
      water_old: "200",
      water_new: "400",
      electric_consump: "200",
      water_consump: "200",
      electric_sum: "600.000VNĐ",
      water_sum: "800.000VNĐ",
      sum: "1.400.000VNĐ",
      notify: "Vòi nước tắc nghẽn mong chủ trọ lưu ý",
    },
    {
      key: "2",
      room: "001",
      electric_old: "100",
      electric_new: "300",
      water_old: "200",
      water_new: "400",
      electric_consump: "200",
      water_consump: "200",
      electric_sum: "600.000VNĐ",
      water_sum: "800.000VNĐ",
      sum: "1.400.000VNĐ",
      notify: "Vòi nước tắc nghẽn mong chủ trọ lưu ý",
    },
    {
      key: "3",
      room: "001",
      electric_old: "100",
      electric_new: "300",
      water_old: "200",
      water_new: "400",
      electric_consump: "200",
      water_consump: "200",
      electric_sum: "600.000VNĐ",
      water_sum: "800.000VNĐ",
      sum: "1.400.000VNĐ",
      notify: "Vòi nước tắc nghẽn mong chủ trọ lưu ý",
    },
  ];
  //table
  const columns = [
    {
      title: "Phòng",
      dataIndex: "room",
      key: "room",
    },
    {
      title: "Số điện cũ",
      dataIndex: "electric_old",
      key: "electric_old",
    },
    {
      title: "Số điện mới",
      dataIndex: "electric_new",
      key: "electric_new",
    },
    {
      title: "Số nước cũ",
      dataIndex: "water_old",
      key: "electric_old",
    },
    {
      title: "Số nước mới",
      dataIndex: "water_new",
      key: "water_new",
    },
    {
      title: "Số điện tiêu thụ",
      dataIndex: "electric_consump",
      key: "electric_consump",
    },
    {
      title: "Số nước tiêu thụ",
      dataIndex: "water_consump",
      key: "water_consump",
    },
    {
      title: "Tổng tiền điện",
      dataIndex: "electric_sum",
      key: "electric_sum",
    },
    {
      title: "Tổng tiền nước",
      dataIndex: "water_sum",
      key: "water_sum",
    },
    {
      title: "Tổng tiền",
      dataIndex: "sum",
      key: "sum",
    },
    {
      title: "Ghi chú",
      dataIndex: "notify",
      key: "notify",
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: () => (
        <div style={{ display: "flex" }}>
          <div
            style={{ paddingLeft: "10px", lineHeight: "1px" }}
            onClick={showModal_2}
          >
            <FontAwesomeIcon icon={faEdit} />
          </div>
          <Modal
            title={
              <div style={{ display: "flex" }}>
                <FontAwesomeIcon icon={faEdit} size="1x" color="#007c7e" />{" "}
                <div
                  style={{
                    fontFamily: "PT Sans, sans-serif",
                    fontSize: "20px",
                    color: "#007c7e",
                    paddingLeft: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Chỉnh sửa
                </div>
              </div>
            }
            onOk={handleOk_2}
            onCancel={handleCancel_2}
            visible={isModalVisible_2}
            okText="LƯU LẠI"
            cancelText="HỦY BỎ"
          >
            <Form>
              <Form.Item label="Phòng" name="room">
                <Select
                  defaultValue="Chi Nhánh"
                  style={{ width: "220px", marginRight: "40px" }}
                >
                  <Option value="Phòng 1">Phòng 1</Option>
                  <Option value="Phòng 2">Phòng 2</Option>
                  <Option value="Phòng 3">Phòng 3</Option>
                  <Option value="Phòng 4">Phòng 4</Option>
                </Select>
              </Form.Item>
              <div style={{ display: "flex" }}>
                <div>
                  <Form.Item label="Số điện cũ" name="electric_old">
                    <Input placeholder="Nhập số điện cũ" />
                  </Form.Item>
                </div>
                <div style={{ paddingLeft: "5px" }}>
                  <Form.Item label="Số điện mới" name="electric_old">
                    <Input placeholder="Nhập số điện mới" />
                  </Form.Item>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div>
                  <Form.Item label="Số nước cũ" name="water_old">
                    <Input placeholder="Nhập số nước cũ" />
                  </Form.Item>
                </div>
                <div style={{ paddingLeft: "5px" }}>
                  <Form.Item label="Số nước mới" name="water_new">
                    <Input placeholder="Nhập số nước mới" />
                  </Form.Item>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div>
                  <Form.Item label="Số nước tiêu thụ" name="water_consump">
                    <Input placeholder="Nhập số nước tiêu thụ" />
                  </Form.Item>
                </div>
                <div style={{ paddingLeft: "5px" }}>
                  <Form.Item label="Số điện tiêu thụ" name="electric_consump">
                    <Input placeholder="Nhập số điện tiêu thụ" />
                  </Form.Item>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div>
                  <Form.Item label="Tổng tiền điện" name="water_sum">
                    <Input placeholder="Nhập tổng tiền điện" />
                  </Form.Item>
                </div>
                <div style={{ paddingLeft: "5px" }}>
                  <Form.Item label="Tổng tiền nước" name="electric_sum">
                    <Input placeholder="Nhập tổng tiền nước" />
                  </Form.Item>
                </div>
              </div>
              <Form.Item label="Tổng tiền" name="sum">
                <Input placeholder="Nhập tổng tiền" />
              </Form.Item>
              <Form.Item label="Ghi chú" name="notify">
                <Input placeholder="Nhập ghi chú" />
              </Form.Item>
            </Form>
          </Modal>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div
        style={{ width: "100%", height: "100vmax", backgroundColor: "#efefef"}}
      >
        <div style={{ height: "100px" }}>
          <Menu_AdminPage />
        </div>
        <div className="box-electric-water">
          <div style={{ display: "block", width: "100%" }}>
            <div className="box-cover-electric-water">
              <div className="content-left-electric-water">
                <FontAwesomeIcon icon={faPlug} size="2x" color="#007c7e" />
                <div className="content-detailed-left-electric-water">
                  QUẢN LÝ ĐIỆN - NƯỚC
                </div>
              </div>
              <div className="content-right-electric-water">
                <div>
                  <Select
                    defaultValue="Lầu"
                    style={{ width: "220px", marginRight: "40px" }}
                  >
                    <Option value="Lầu 1">Lầu 1</Option>
                    <Option value="Lầu 2">Lầu 2</Option>
                    <Option value="Lầu 3">Lầu 3</Option>
                    <Option value="Lầu 4">Lầu 4</Option>
                  </Select>
                </div>
                <div style={{ paddingRight: "10px" }}>
                  <Select
                    defaultValue="Chi Nhánh"
                    style={{ width: "220px", marginRight: "40px" }}
                  >
                    <Option value="Chi Nhánh 1">Chi Nhánh 1</Option>
                    <Option value="Chi Nhánh 2">Chi Nhánh 2</Option>
                    <Option value="Chi Nhánh 3">Chi Nhánh 3</Option>
                    <Option value="Chi Nhánh 4">Chi Nhánh 4</Option>
                  </Select>
                </div>
              </div>
            </div>
            <div className="box-radio-left-electric-water">
              <div className="content-left-electric-water">
                <div className="topic-electric-water">Theo loại phòng:</div>
                <div style={{ paddingTop: "5px", paddingLeft: "5px" }}>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1}>Tháng</Radio>
                    <Radio value={2}>Ngày</Radio>
                    <Radio value={3}>Tuần</Radio>
                  </Radio.Group>
                </div>
                <div className="topic-electric-water">Theo tháng:</div>
                <div style={{ paddingLeft: "10px" }}>
                  <DatePicker onChange={onChange_week} picker="month" />
                </div>
              </div>
              <div className="content-right-electric-water">
                <div style={{ paddingRight: "10px" }}>
                  <div className="btn-search" onClick={showModal}>
                    Tìm kiếm
                  </div>
                  <Modal
                    title="Tìm kiếm"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okText="Tìm kiếm"
                    cancelText="Hủy bỏ"
                  >
                      <div>
                        <Form.Item label="Phòng" name="room">
                          <Select
                            defaultValue="Chi Nhánh"
                            style={{ width: "360px", marginRight: "40px" }}
                          >
                            <Option value="Phòng 1">Phòng 1</Option>
                            <Option value="Phòng 2">Phòng 2</Option>
                            <Option value="Phòng 3">Phòng 3</Option>
                            <Option value="Phòng 4">Phòng 4</Option>
                          </Select>
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item label="Dữ liệu" name="data">
                          <Radio.Group
                            onChange={onChange_find}
                            value={value_find}
                          >
                            <Radio value={1}>Đã nhập</Radio>
                            <Radio value={2}>Chưa nhập</Radio>
                          </Radio.Group>
                        </Form.Item>
                      </div>
                      <Form.Item label="Tháng" name="month">
                      <DatePicker placeholder="Chọn tháng" style={{width:"400px"}} onChange={onChange_find_week} picker="month" />

                      </Form.Item>
                  </Modal>
                </div>
              </div>
            </div>
            <div className="box-status">
              <div
                className="topic-electric-water"
                style={{ paddingLeft: "10px" }}
              >
                Trạng thái phòng:
              </div>
              <div style={{ paddingTop: "5px", paddingLeft: "5px" }}>
                <Radio.Group onChange={onChange_4} value={value_4}>
                  <Radio value={4}>Đang ở</Radio>
                  <Radio value={5}>Trống</Radio>
                  <Radio value={6}>Tất cả</Radio>
                </Radio.Group>
              </div>
              <div
                className="topic-electric-water"
                style={{ paddingLeft: "10px" }}
              >
                Dữ liệu:
              </div>
              <div style={{ paddingTop: "5px", paddingLeft: "5px" }}>
                <Radio.Group onChange={onChange_5} value={value_5}>
                  <Radio value={7}>Tất cả</Radio>
                  <Radio value={8}>Đã nhập</Radio>
                  <Radio value={9}>Chưa nhập</Radio>
                </Radio.Group>
              </div>
            </div>
            <div style={{ float: "left", paddingTop: "10px",paddingLeft:"20px",paddingRight:"20px" }}>
              <Table dataSource={data} columns={columns} bordered />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Electricity_Water;
