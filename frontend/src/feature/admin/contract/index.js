import React, { useState } from "react";
import "./style.css";
import Menu_AdminPage from "./../../../components/menu_adminpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faPlug } from "@fortawesome/free-solid-svg-icons";
import {
  faSave,
  faMoneyBillAlt,
  faHandshake,
} from "@fortawesome/free-regular-svg-icons";
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
function Contract() {
  //radio
  const [value, setValue] = React.useState(1);
  const [value1, setValue1] = React.useState(1);
  const [value2, setValue2] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const onChange_1 = (e) => {
    console.log("radio checked", e.target.value);
    setValue1(e.target.value);
  };
  const onChange_2 = (e) => {
    console.log("radio checked", e.target.value);
    setValue2(e.target.value);
  };

  //Modal
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
  const [isModalVisible_3, setIsModalVisible_3] = useState(false);

  const showModal_3 = () => {
    setIsModalVisible(true);
  };
  const handleOk_3 = () => {
    setIsModalVisible(false);
  };

  const handleCancel_3 = () => {
    setIsModalVisible(false);
  };
  //datepicker
  const { RangePicker } = DatePicker;

  //table
  //Table
  //table
  const data = [
    {
      key: "1",
      room: "001",
      floor: "02",
      name_customer: "Duy",
      name_host: "Trí",
      duration: "2 tháng",
      date: "21-02-2020",
      voucher: "30%",
      money_before: "500.000VNĐ",
      money_rest: "2.000.000VNĐ",
      form: "Theo tháng",
    },
    {
      key: "2",
      room: "001",
      floor: "02",
      name_customer: "Duy",
      name_host: "Trí",
      duration: "2 tháng",
      date: "21-02-2020",
      voucher: "30%",
      money_before: "500.000VNĐ",
      money_rest: "2.000.000VNĐ",
      form: "Theo tháng",
    },
    {
      key: "3",
      room: "001",
      floor: "02",
      name_customer: "Duy",
      name_host: "Trí",
      duration: "2 tháng",
      date: "21-02-2020",
      voucher: "30%",
      money_before: "500.000VNĐ",
      money_rest: "2.000.000VNĐ",
      form: "Theo tháng",
    },
  ];
  const columns = [
    {
      title: "Phòng",
      dataIndex: "room",
      key: "room",
    },
    {
      title: "Lầu",
      dataIndex: "floor",
      key: "floor",
    },
    {
      title: "Tên người thuê",
      dataIndex: "name_customer",
      key: "name_customer",
    },
    {
      title: "Tên chủ trọ",
      dataIndex: "name_host",
      key: "name_host",
    },
    {
      title: "Thời hạn HĐ",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Ngày ký HĐ",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Khuyến mãi",
      dataIndex: "voucher",
      key: "voucher",
    },
    {
      title: "Tiền đặt cọc",
      dataIndex: "money_before",
      key: "money_before",
    },
    {
      title: "Tiền còn lại",
      dataIndex: "money_rest",
      key: "money_rest",
    },
    {
      title: "Hình thức thuê",
      dataIndex: "form",
      key: "form",
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
                  defaultValue="Chọn Phòng"
                  style={{ width: "320px", marginRight: "40px" }}
                >
                  <Option value="Phòng 1">Phòng 1</Option>
                  <Option value="Phòng 2">Phòng 2</Option>
                  <Option value="Phòng 3">Phòng 3</Option>
                  <Option value="Phòng 4">Phòng 4</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Chi Nhánh" name="brand">
                <Select
                  defaultValue="Chọn Chi Nhánh"
                  style={{ width: "300px", marginRight: "40px" }}
                >
                  <Option value="Chi Nhánh 1">Chi Nhánh 1</Option>
                  <Option value="Chi Nhánh 2">Chi Nhánh 2</Option>
                  <Option value="Chi Nhánh 3">Chi Nhánh 3</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Lầu" name="floor">
                <Select
                  defaultValue="Chọn Lầu"
                  style={{ width: "340px", marginRight: "40px" }}
                >
                  <Option value="Lầu 1">Lầu 1</Option>
                  <Option value="Lầu 2">Lầu 2</Option>
                  <Option value="Lầu 3">Lầu 3</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Hình thức thuê" name="label">
                <Radio.Group
                  onChange={onChange_2}
                  value={value2}
                  style={{ paddingLeft: "10px" }}
                >
                  <Radio value={1}>Theo tuần</Radio>
                  <Radio value={2}>Theo ngày</Radio>
                  <Radio value={3}>Theo năm</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Tên khách thuê" name="name_customer">
                <Input
                  placeholder="Nhập tên khách thuê trọ"
                  style={{ width: "280px" }}
                />
              </Form.Item>
              <Form.Item label="Tên chủ trọ" name="name_host">
                <Input
                  placeholder="Nhập tên chủ trọ"
                  style={{ width: "310px" }}
                />
              </Form.Item>
              <Form.Item label="Thời hạn HĐ" name="duration">
                <Input
                  placeholder="Nhập thời hạn HĐ"
                  style={{ width: "310px" }}
                />
              </Form.Item>
              <Form.Item label="Ngày bắt đầu - Ngày kết thúc" name="date">
                <RangePicker />
              </Form.Item>
              <Form.Item label="Khuyến mãi" name="voucher">
                <Input
                  placeholder="Nhập mã khuyến mãi"
                  style={{ width: "310px" }}
                />
              </Form.Item>
            </Form>
          </Modal>
          <div
            style={{ paddingLeft: "10px", lineHeight: "1px" }}
            onClick={showModal_3}
          >
            <FontAwesomeIcon icon={faTrash} color="red" />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="sum_box">
        <div style={{ height: "120px" }}>
          <Menu_AdminPage />
        </div>
        <div className="box-contract">
          <div style={{ display: "block", width: "100%" }}>
            <div className="box-cover-contract">
              <div className="content-left-contract">
                <FontAwesomeIcon icon={faHandshake} size="2x" color="#007c7e" />
                <div className="content-detailed-left-contract">
                  QUẢN LÝ ĐIỆN - NƯỚC
                </div>
              </div>
              <div className="content-right-contract">
                <div>
                  <Select
                    defaultValue="Lầu"
                    style={{ width: "220px", marginRight: "40px" }}
                  >
                    <Option value="Phòng 1">Phòng 1</Option>
                    <Option value="Phòng 2">Phòng 2</Option>
                    <Option value="Phòng 3">Phòng 3</Option>
                    <Option value="Phòng 4">Phòng 4</Option>
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
            <div className="box-radio">
              <div style={{ display: "block", width: "55%", height: "auto" }}>
                <div className="content-detailed-left-contract-radio">
                  Loại HĐ:
                  <Radio.Group
                    onChange={onChange}
                    value={value}
                    style={{ paddingLeft: "10px" }}
                  >
                    <Radio value={1}>Theo tuần</Radio>
                    <Radio value={2}>Theo tháng</Radio>
                    <Radio value={3}>Theo năm</Radio>
                    <Radio value={4}>Tất cả</Radio>
                  </Radio.Group>
                </div>
                {/* <div className="content-detailed-left-contract-radio" style={{paddingRight:"50px"}} >
                    Trạng thái:
                    <Radio.Group onChange={onChange_1} value={value1} style={{paddingLeft:"10px"}}>
                    <Radio value={1}>Còn hiệu lực</Radio>
                    <Radio value={2}>Hết hiệu lực</Radio>
                    <Radio value={3}>Tất cả</Radio>

                  </Radio.Group>
                </div> */}
              </div>
              <div style={{ width: "40%", height: "auto" }}>
                <div
                  style={{
                    height: "auto",
                    float: "right",
                    width: "70%",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: "30%",
                      height: "auto",
                      paddingLeft: "15px",
                    }}
                  >
                    <div className="btn-hover-right">Thêm mới</div>
                  </div>
                  <div
                    style={{
                      width: "30%",
                      height: "auto",
                      paddingLeft: "15px",
                    }}
                  >
                    <div className="btn-hover-right">Tìm kiếm</div>
                  </div>
                  <div
                    style={{
                      width: "30%",
                      height: "auto",
                      paddingLeft: "15px",
                    }}
                  >
                    <div className="btn-hover-right">Xóa nhiều</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                justifyContent: "1",
              }}
            >
              <div style={{ width: "50%", height: "auto", float: "left" }}>
                <div className="content-detailed-left-contract-radio">
                  Trạng thái:
                  <Radio.Group
                    onChange={onChange_1}
                    value={value1}
                    style={{ paddingLeft: "10px" }}
                  >
                    <Radio value={1}>Còn hiệu lực</Radio>
                    <Radio value={2}>Hết hiệu lực</Radio>
                    <Radio value={3}>Tất cả</Radio>
                  </Radio.Group>
                </div>
              </div>
            </div>
            <Table columns={columns} dataSource={data} bordered />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contract;
