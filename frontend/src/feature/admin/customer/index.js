import React, { useState } from "react";
import "./style.css";
import Menu_AdminPage from "./../../../components/menu_adminpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faSitemap,
  faPlu,
  faPlus,
  faTrash,
  faEdit,
  faBed,
} from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-regular-svg-icons";
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
} from "antd";
import moment from "moment";
import { UploadOutlined } from "@ant-design/icons";
const { Option } = Select;

function Customer() {
  //Confirm
  function confirm(e) {
    console.log(e);
    message.success("Click on Yes");
  }

  function cancel(e) {
    console.log(e);
    message.error("Click on No");
  }
  //Modal-Buttom Thêm Mới
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible_1, setIsModalVisible_1] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const showModal_1 = () => {
    setIsModalVisible_1(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleOk_1 = () => {
    setIsModalVisible_1(false);
  };

  const handleCancel_1 = () => {
    setIsModalVisible_1(false);
  };
  //DateFormat
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  //Radio
  const [value, setValue] = React.useState(1);

  const onChange_radio = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  //image
  //rangepicker
  const { RangePicker } = DatePicker;
  //table
  const columns = [
    {
      title: "Tên khách",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số điện thoại",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Hình thức",
      dataIndex: "formable",
      key: "formable",
    },
    {
      title: "Chi nhánh",
      dataIndex: "brand",
      key: "brand",
    },
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
      title: "Ngày vào",
      dataIndex: "date_start",
      key: "date_start",
    },
    {
      title: "Ngày ra",
      dataIndex: "date_leave",
      key: "date_leave",
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
            onClick={showModal}
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
            onOk={handleOk}
            onCancel={handleCancel}
            visible={isModalVisible}
            okText="LƯU LẠI"
            cancelText="HỦY BỎ"
          >
            <Form>
              <Form.Item label="Chi Nhánh" name="Brand">
                <Select
                  defaultValue="Chi Nhánh"
                  style={{ width: "220px", marginRight: "20px" }}
                >
                  <Option value="Chi Nhánh 1">Chi Nhánh 1</Option>
                  <Option value="Chi Nhánh 2">Chi Nhánh 2</Option>
                  <Option value="Chi Nhánh 3">Chi Nhánh 3</Option>
                  <Option value="Chi Nhánh 4">Chi Nhánh 4</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Họ và tên" name="Name">
                <Input />
              </Form.Item>
              <div style={{ display: "flex", width: "100%" }}>
                <div>
                  <Form.Item label="Ngày sinh" name="Date">
                    <DatePicker onChange={onChange} />
                  </Form.Item>
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <Form.Item label="Email" name="Email">
                    <Input />{" "}
                  </Form.Item>
                </div>
              </div>
              <div style={{ display: "flex", width: "100%" }}>
                <div>
                  <Form.Item label="Số ĐT" name="Phone">
                    <Input />
                  </Form.Item>
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <Form.Item label="Giới Tính" name="Sex">
                    <Radio.Group onChange={onChange} value={value}>
                      <Radio value={1}>Nam</Radio>
                      <Radio value={2}>Nữ</Radio>
                    </Radio.Group>
                  </Form.Item>
                </div>
              </div>
              <div style={{ display: "flex", width: "100%" }}>
                <div>
                  <Form.Item label="CMND" name="IdentityCard">
                    <Input />
                  </Form.Item>
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <Form.Item label="Công Việc" name="Job">
                    <Input />
                  </Form.Item>
                </div>
              </div>
              <Form.Item label="Ghi Chú" name="Notification">
                <Input />
              </Form.Item>
              <Form.Item label="Ảnh đại diện" name="img">
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture"
                >
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "Cao Việt Hưng",
      number: "0901632176",
      formable: "Theo Ngày",
      brand: "Chi Nhánh 1",
      room: "001",
      floor: "01",
      date_start: "2021/2/08",
      date_leave: "2021/12/12",
    },
    {
      key: "2",
      name: "Cao Việt Hưng",
      number: "0901632176",
      formable: "Theo Ngày",
      brand: "Chi Nhánh 1",
      room: "001",
      floor: "01",
      date_start: "2021/2/08",
      date_leave: "2021/12/12",
    },
    {
      key: "3",
      name: "Cao Việt Hưng",
      number: "0901632176",
      formable: "Theo Ngày",
      brand: "Chi Nhánh 1",
      room: "001",
      floor: "01",
      date_start: "2021/2/08",
      date_leave: "2021/12/12",
    },
  ];
 

  return (
    <div>
      <div
        style={{ width: "100%", height: "100vmax", backgroundColor: "#efefef" }}
      >
        <div style={{ height: "100px" }}>
          <Menu_AdminPage />
        </div>
        <div className="box-cover">
          <div style={{ display: "block", width: "100%" }}>
            <div className="horizontal">
              <div className="topic-customer">
                <FontAwesomeIcon icon={faBed} size="2x" color="#007c7e" />
                <div className="content-1">QUẢN LÝ KHÁCH THUÊ</div>
              </div>
              <div className="box-right">
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
                <div>
                  <Select
                    defaultValue="Chi Nhánh"
                    style={{ width: "220px", marginRight: "20px" }}
                  >
                    <Option value="Chi Nhánh 1">Chi Nhánh 1</Option>
                    <Option value="Chi Nhánh 2">Chi Nhánh 2</Option>
                    <Option value="Chi Nhánh 3">Chi Nhánh 3</Option>
                    <Option value="Chi Nhánh 4">Chi Nhánh 4</Option>
                  </Select>
                </div>
              </div>
            </div>
            <div
              style={{ float: "right", display: "flex", paddingTop: "10px",paddingBottom:"20px" }}
            >
              <button className="btn-top-right" onClick={showModal}>
                THÊM MỚI
              </button>
              <Modal
                title="Thêm mới"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Thêm mới"
                cancelText="Hủy bỏ"
              >
                <Form>
                  <Form.Item label="Chi Nhánh" name="Brand">
                    <Select
                      defaultValue="Chi Nhánh"
                      style={{ width: "220px", marginRight: "20px" }}
                    >
                      <Option value="Chi Nhánh 1">Chi Nhánh 1</Option>
                      <Option value="Chi Nhánh 2">Chi Nhánh 2</Option>
                      <Option value="Chi Nhánh 3">Chi Nhánh 3</Option>
                      <Option value="Chi Nhánh 4">Chi Nhánh 4</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Họ và tên" name="Name">
                    <Input />
                  </Form.Item>
                  <div style={{ display: "flex", width: "100%" }}>
                    <div>
                      <Form.Item label="Ngày sinh" name="Date">
                        <DatePicker onChange={onChange} />
                      </Form.Item>
                    </div>
                    <div style={{ paddingLeft: "20px" }}>
                      <Form.Item label="Email" name="Email">
                        <Input />{" "}
                      </Form.Item>
                    </div>
                  </div>
                  <div style={{ display: "flex", width: "100%" }}>
                    <div>
                      <Form.Item label="Số ĐT" name="Phone">
                        <Input />
                      </Form.Item>
                    </div>
                    <div style={{ paddingLeft: "20px" }}>
                      <Form.Item label="Giới Tính" name="Sex">
                        <Radio.Group onChange={onChange} value={value}>
                          <Radio value={1}>Nam</Radio>
                          <Radio value={2}>Nữ</Radio>
                        </Radio.Group>
                      </Form.Item>
                    </div>
                  </div>
                  <div style={{ display: "flex", width: "100%" }}>
                    <div>
                      <Form.Item label="CMND" name="IdentityCard">
                        <Input />
                      </Form.Item>
                    </div>
                    <div style={{ paddingLeft: "20px" }}>
                      <Form.Item label="Công Việc" name="Job">
                        <Input />
                      </Form.Item>
                    </div>
                  </div>
                  <Form.Item label="Ghi Chú" name="Notification">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Ảnh đại diện" name="img">
                    <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture"
                    >
                      <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                  </Form.Item>
                </Form>
              </Modal>
              <Popconfirm
                title="Bạn có chắc muốn xóa dữ liệu này không?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Có"
                cancelText="Không"
              >
                {" "}
                <button className="btn-top-right">XÓA NHIỀU</button>
              </Popconfirm>
              <button className="btn-top-right" onClick={showModal_1}>
                TÌM KIẾM
              </button>
              <Modal
                title="Tìm kiếm"
                visible={isModalVisible_1}
                onOk={handleOk_1}
                onCancel={handleCancel_1}
                okText="Tìm kiếm"
                cancelText="Hủy bỏ"
              >
                <Form>
                  <Form.Item label="Chi Nhánh" name="Brand">
                    <Select
                      defaultValue="Chi Nhánh"
                      style={{ width: "220px", marginRight: "20px" }}
                    >
                      <Option value="Chi Nhánh 1">Chi Nhánh 1</Option>
                      <Option value="Chi Nhánh 2">Chi Nhánh 2</Option>
                      <Option value="Chi Nhánh 3">Chi Nhánh 3</Option>
                      <Option value="Chi Nhánh 4">Chi Nhánh 4</Option>
                    </Select>
                  </Form.Item>
                  <div style={{ display: "flex", width: "100%" }}>
                    <div>
                      <Form.Item label="Phòng" name="Room">
                        <Select
                          defaultValue="Chọn Phòng"
                          style={{ width: "150px" }}
                        >
                          <Option value="Phòng 1">Phòng 1</Option>
                          <Option value="Phòng 2">Phòng 2</Option>
                          <Option value="Phòng 3">Phòng 3</Option>
                          <Option value="Phòng 4">Phòng 4</Option>
                        </Select>{" "}
                      </Form.Item>
                    </div>
                    <div style={{ paddingLeft: "20px" }}>
                      <Form.Item label="Hình thức" name="Formable">
                        <Select
                          defaultValue="Chọn Hình Thức Thuê"
                          style={{ width: "150px", marginRight: "20px" }}
                        >
                          <Option value="day">Thuê theo ngày</Option>
                          <Option value="week">Thuê theo tuần</Option>
                          <Option value="month">Thuê theo tháng</Option>
                        </Select>{" "}
                      </Form.Item>
                    </div>
                  </div>
                  <Form.Item label="Ngày Đến - Ngày Đi" name="Days">
                    <RangePicker style={{ width: "250px" }} />
                  </Form.Item>
                </Form>
              </Modal>
            </div>
            <div style={{paddingBottom:"10px"}}>
              <Table dataSource={data} columns={columns} bordered />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
