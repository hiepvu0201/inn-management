import React, { useState, useEffect } from "react";
import "./style.css";
import Menu_AdminPage from "./../../../components/menu_adminpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { faSave, faMoneyBillAlt } from "@fortawesome/free-regular-svg-icons";
import monthlyincomesApi from "../../../api/monthlyincomesApi";
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
function Revenue() {
  //DatePicker
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  //inpurtnumber
  function onChange_inputnum(value) {
    console.log("changed", value);
  }
  //table
  const columns = [
    {
      title: "Tên khoản thu",
      dataIndex: "itemName",
      key: "itemName",
    },
    {
      title: "Số tiền thu",
      dataIndex: "earn",
      key: "earn",
    },

    {
      title: "",
      dataIndex: "",
      key: "x",
      render: () => (
        <div style={{ display: "flex" }}>
          <Popconfirm
            title="BẠN CÓ CHẮC MUỐN XÓA DỮ LIỆU KHÔNG?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Có"
            cancelText="Không"
          >
            <FontAwesomeIcon icon={faTrash} color="red" />
          </Popconfirm>
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
              <Form.Item label="Chi Nhánh" name="brand">
                <Select
                  defaultValue="Chi Nhánh"
                  style={{ width: "220px", marginRight: "40px" }}
                >
                  <Option value="Chi Nhánh 1">Chi Nhánh 1</Option>
                  <Option value="Chi Nhánh 2">Chi Nhánh 2</Option>
                  <Option value="Chi Nhánh 3">Chi Nhánh 3</Option>
                  <Option value="Chi Nhánh 4">Chi Nhánh 4</Option>
                </Select>
              </Form.Item>
              <div style={{ display: "flex" }}>
                <div>
                  <Form.Item label="Phòng" name="room">
                    <Select
                      defaultValue="Chọn Phòng"
                      style={{ width: "120px" }}
                    >
                      <Option value="Phòng 1">Phòng 1</Option>
                      <Option value="Phòng 2">Phòng 2</Option>
                      <Option value="Phòng 3">Phòng 3</Option>
                      <Option value="Phong 4">Phòng 4</Option>
                    </Select>
                  </Form.Item>
                </div>
                <div style={{ paddingLeft: "10px" }}>
                  <Form.Item label="Tên khoản thu" name="name">
                    <Input placeholder="Nhập tên khoản thu" />
                  </Form.Item>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div>
                  <Form.Item label="Ngày thu" name="date">
                    <DatePicker
                      onChange={onChange}
                      placeholder="Nhập Ngày Thu"
                    />
                  </Form.Item>
                </div>
                <div style={{ paddingLeft: "10px" }}>
                  <Form.Item label="Loại khoản thu" name="type">
                    <Input placeholder="Nhập loại khoản thu" />
                  </Form.Item>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div>
                  <Form.Item label="Số lượng" name="number">
                    <InputNumber
                      min={0}
                      max={10}
                      defaultValue={0}
                      onChange={onChange_inputnum}
                    />
                  </Form.Item>
                </div>
                <div style={{ paddingLeft: "10px" }}>
                  <Form.Item label="Số tiền thu" name="type">
                    <Input placeholder="Nhập số tiền thu" />
                  </Form.Item>
                </div>
              </div>
              <Form.Item label="Mô tả" name="description">
                <Input placeholder="Nhập mô tả" />
              </Form.Item>
            </Form>
          </Modal>
        </div>
      ),
    },
  ];
  //modal
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
  const [isModalVisible_1, setIsModalVisible_1] = useState(false);
  const showModal_1 = () => {
    setIsModalVisible_1(true);
  };
  const handleOk_1 = () => {
    setIsModalVisible_1(false);
  };

  const handleCancel_1 = () => {
    setIsModalVisible_1(false);
  };
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
  //Rangepicker
  const { RangePicker } = DatePicker;
  //Popconfirm
  function confirm(e) {
    console.log(e);
    message.success("Click on Yes");
  }

  function cancel(e) {
    console.log(e);
    message.error("Click on No");
  }
  const [moneyincomes, setMoneyincomes] = useState([]);
  useEffect(() => {
    const fetchMoneyincomesList = async () => {
      try {
        const response = await monthlyincomesApi.getAll();
        console.log("Fetch moneyincomes succesfully: ", response.data);
        setMoneyincomes(response.data);
      } catch (error) {
        console.log("failed to fetch product list: ", error);
      }
    };
    fetchMoneyincomesList();
  }, []);
  const onFinish = (values) => {
    const fetchCreatemoneyincomes = async () => {
      try {
        const response = await monthlyincomesApi.createMonthlyincomes(values);
        console.log("Fetch create monthlyincomes successfully: ", response);
        console.log("value ", values);
        setMoneyincomes([...moneyincomes,values])
        setIsModalVisible(false);

      } catch (error) {
        console.log("failed to create monthlyincomes: ", error);
      }
    };
    fetchCreatemoneyincomes();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <div
        style={{ backgroundColor: "#efefef", width: "100%", height: "100vmax" }}
      >
        <div style={{ height: "100px" }}>
          <Menu_AdminPage />
        </div>
        <div className="box-inner-cover">
          <div style={{ display: "block", width: "100%" }}>
            <div className="content-part1">
              <div className="detailed-left">
                <FontAwesomeIcon
                  icon={faMoneyBillAlt}
                  size="2x"
                  color="#007c7e"
                />
                <div className="content-detailed-left">QUẢN LÝ NGUỒN THU</div>
              </div>
              <div className="content-right-revenue">
                <div>
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
                <div style={{ paddingRight: "10px" }}>
                  <DatePicker
                    style={{ width: "150px" }}
                    onChange={onChange}
                    picker="month"
                    placeholder="Chọn Tháng"
                  />
                </div>
              </div>
            </div>
            <div className="content-right">
              <button className="btn-top-right-revenue" onClick={showModal}>
                Thêm mới
              </button>
              <Modal
                title="Thêm mới"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Thêm mới"
                cancelText="Hủy bỏ"
                footer={null}
              >
                <Form
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  initialValues={{ remember: true }}
                >
                  <Form.Item label="Chi Nhánh" name="brand">
                    <Select
                      defaultValue="Chi Nhánh"
                      style={{ width: "220px", marginRight: "40px" }}
                    >
                      <Option value="Chi Nhánh 1">Chi Nhánh 1</Option>
                      <Option value="Chi Nhánh 2">Chi Nhánh 2</Option>
                      <Option value="Chi Nhánh 3">Chi Nhánh 3</Option>
                      <Option value="Chi Nhánh 4">Chi Nhánh 4</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item label="Tên khoản thu" name="itemName">
                    <Input placeholder="Nhập tên khoản thu" />
                  </Form.Item>
                  <Form.Item label="Số tiền thu" name="earn">
                    <Input placeholder="Nhập số tiền" />
                  </Form.Item>
                  <div style={{ display: "flex" }}>
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Thêm mới
                      </Button>
                    </Form.Item>
                    <Form.Item style={{ paddingLeft: "15px" }}>
                      <Button type="default" onClick={handleCancel}>
                        Hủy bỏ
                      </Button>
                    </Form.Item>
                  </div>
                </Form>
              </Modal>
              <button className="btn-top-right-revenue" onClick={showModal_1}>
                Tìm kiếm
              </button>
              <Modal
                title="Tìm kiếm"
                visible={isModalVisible_1}
                onOk={handleOk_1}
                onCancel={handleCancel_1}
                okText="Tìm kiếm"
                cancelText="Hủy bỏ"
              >
                <Form.Item label="Ngày đến - Ngày đi" name="date">
                  <RangePicker />
                </Form.Item>
                <Form.Item label="Tên khoản thu" name="name">
                  <Input placeholder="Nhập tên khoản thu" />
                </Form.Item>
                <Form.Item label="Loại khoản thu" name="type">
                  <Input placeholder="Nhập loại khoản thu" />
                </Form.Item>
              </Modal>
              <Popconfirm
                title="Bạn có chắc muốn xóa dữ liệu này không?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Có"
                cancelText="Không"
              >
                <button className="btn-top-right-revenue">Xóa nhiều</button>
              </Popconfirm>
            </div>
            <div style={{ paddingLeft: "15px", paddingRight: "15px" }}>
              <Table
                dataSource={moneyincomes}
                columns={columns}
                bordered
                rowKey="id"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Revenue;
