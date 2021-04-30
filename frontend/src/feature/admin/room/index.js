import React, { useState } from "react";
import "./style.css";
import Menu_AdminPage from "./../../../components/menu_adminpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faBed,
  faSearch,
  faPlus,
  faFile,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
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
  Tabs,
  Collapse,
  Popover,
} from "antd";
const { TabPane } = Tabs;
const { Panel } = Collapse;
function Room() {
  //radio
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  //Popconfirm
  //Popconfirm
  function confirm(e) {
    console.log(e);
    message.success("Click on Yes");
  }

  function cancel(e) {
    console.log(e);
    message.error("Click on No");
  }
  function confirm_1(e) {
    console.log(e);
    message.success("Click on Yes");
  }

  function cancel_1(e) {
    console.log(e);
    message.error("Click on No");
  }
  //collapse
  function callback(key) {
    console.log(key);
  }
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
  const [isModalVisible_3, setIsModalVisible_3] = useState(false);
  const showModal_3 = () => {
    setIsModalVisible_3(true);
  };
  const handleOk_3 = () => {
    setIsModalVisible_3(false);
  };

  const handleCancel_3 = () => {
    setIsModalVisible_3(false);
  };
  const [isModalVisible_4, setIsModalVisible_4] = useState(false);
  const showModal_4 = () => {
    setIsModalVisible_4(true);
  };
  const handleOk_4 = () => {
    setIsModalVisible_4(false);
  };

  const handleCancel_4 = () => {
    setIsModalVisible_4(false);
  };
  //inputnumber
  function onChange_inputnum2(value) {
    console.log("changed", value);
  }
  //Tab
  function callback(key) {
    console.log(key);
  }
  //table
  const columns = [
    {
      title: "Lầu",
      dataIndex: "floor",
      key: "floor",
    },
    {
      title: "Tên phòng",
      dataIndex: "room",
      key: "room",
    },
    {
      title: "Số người",
      dataIndex: "num_people",
      key: "num_people",
    },
    {
      title: "Người đại diện",
      dataIndex: "present",
      key: "present",
    },
    {
      title: "Tình trạng phòng",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Diện tích",
      dataIndex: "square",
      key: "square",
    },
    {
      title: "Chi nhánh",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Đơn giá",
      dataIndex: "bill",
      key: "bill",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
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
              <div style={{ display: "flex" }}>
                <Form.Item label="Chi Nhánh" name="brand">
                  <Select
                    defaultValue="Chi Nhánh"
                    style={{ width: "120px", marginRight: "40px" }}
                  >
                    <Option value="Chi Nhánh 1">Chi Nhánh 1</Option>
                    <Option value="Chi Nhánh 2">Chi Nhánh 2</Option>
                    <Option value="Chi Nhánh 3">Chi Nhánh 3</Option>
                    <Option value="Chi Nhánh 4">Chi Nhánh 4</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Tình trạng phòng" name="status">
                  <Select defaultValue="Tình trạng" style={{ width: "100px" }}>
                    <Option value="Tình trạng phòng 1">Còn trống</Option>
                    <Option value="Tình trạng phòng 2">Hết chỗ</Option>
                  </Select>
                </Form.Item>
              </div>

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
                  <Form.Item label="Người đại diện" name="present">
                    <Input placeholder="Nhập tên người đại diện" />
                  </Form.Item>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div>
                  <Form.Item label="Số người" name="num_people">
                    <InputNumber
                      min={0}
                      max={10}
                      defaultValue={0}
                      onChange={onChange_inputnum2}
                    />
                  </Form.Item>
                </div>
                <div style={{ paddingLeft: "30px" }}>
                  <Form.Item label="Tầng" name="floor">
                    <Select
                      defaultValue="Chọn số tầng"
                      style={{ width: "230px" }}
                    >
                      <Option value="Tầng 1">Tầng 1</Option>
                      <Option value="Tầng 2">Tầng 2</Option>
                      <Option value="Tầng 3">Tầng 3</Option>
                      <Option value="Tầng 4">Tầng 4</Option>
                    </Select>
                  </Form.Item>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div>
                  <Form.Item label="Diện tích" name="square">
                    <Input placeholder="Nhập số diện tích" />
                  </Form.Item>
                </div>
                <div style={{ paddingLeft: "10px" }}>
                  <Form.Item label="Đơn giá" name="bill">
                    <Input placeholder="Nhập đơn giá" />
                  </Form.Item>
                </div>
              </div>
              <Form.Item label="Mô tả" name="description">
                <Input placeholder="Nhập mô tả" />
              </Form.Item>
            </Form>
          </Modal>
          <div
            style={{ paddingLeft: "10px", lineHeight: "1px" }}
            onClick={showModal_4}
          >
            <FontAwesomeIcon icon={faFile} color="blue" />
          </div>{" "}
          <Modal
            title={
              <div style={{ display: "flex" }}>
                <FontAwesomeIcon icon={faUserPlus} size="1x" color="#007c7e" />{" "}
                <div
                  style={{
                    fontFamily: "PT Sans, sans-serif",
                    fontSize: "20px",
                    color: "#007c7e",
                    paddingLeft: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Chi tiết
                </div>
              </div>
            }
            onOk={handleOk_4}
            onCancel={handleCancel_4}
            visible={isModalVisible_4}
            okText="CHỈNH SỬA"
            cancelText="HỦY BỎ"
          >
            <Form>
              <Form.Item label="Thành viên 01" name="name_mem_1">
                <Input
                  placeholder="Nguyễn Hùng Duy"
                  style={{ width: "350px" }}
                />
              </Form.Item>
              <Form.Item label="Thành viên 01" name="phone_mem_1">
                <Input
                  placeholder="0901632176"
                  style={{ width: "350px" }}
                />
              </Form.Item>
              <Form.Item label="Thành viên 02" name="name_mem_2">
                <Input
                  placeholder="Nguyễn Hùng Duy"
                  style={{ width: "350px" }}
                />
              </Form.Item>
              <Form.Item label="Thành viên 02" name="phone_mem_2">
                <Input
                  placeholder="0901632176"
                  style={{ width: "350px" }}
                />
              </Form.Item>
              <Form.Item label="Thành viên 03" name="name_mem_3">
                <Input
                  placeholder="Nguyễn Hùng Duy"
                  style={{ width: "350px" }}
                />
              </Form.Item>
              <Form.Item label="Thành viên 03" name="phone_mem_3">
                <Input
                  placeholder="0901632176"
                  style={{ width: "350px" }}
                />
              </Form.Item>
              <Form.Item label="Thành viên 04" name="name_mem_4">
                <Input
                  placeholder="Nguyễn Hùng Duy"
                  style={{ width: "350px" }}
                />
              </Form.Item>
              <Form.Item label="Thành viên 04" name="phone_mem_4">
                <Input
                  placeholder="0901632176"
                  style={{ width: "350px" }}
                />
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
      floor: "001",
      room: "Phòng 01",
      num_people: "04",
      status: "Còn trống",
      present: "Nguyễn Hùng Duy",
      square: "32 km2",
      brand: "Chi Nhánh 1",
      bill: "3.000.000VNĐ",
      description: "Phòng hư hai cái vòi sen",
    },
    {
      key: "2",
      floor: "001",
      room: "Phòng 01",
      num_people: "04",
      status: "Còn trống",
      present: "Nguyễn Hùng Duy",
      square: "32 km2",
      brand: "Chi Nhánh 1",
      bill: "3.000.000VNĐ",
      description: "Phòng hư hai cái vòi sen",
    },
    {
      key: "3",
      floor: "001",
      room: "Phòng 01",
      num_people: "04",
      status: "Còn trống",
      present: "Nguyễn Hùng Duy",
      square: "32 km2",
      brand: "Chi Nhánh 1",
      bill: "3.000.000VNĐ",
      description: "Phòng hư hai cái vòi sen",
    },
  ];
  return (
    <div>
      <div
        style={{ height: "100vmax", width: "100%", backgroundColor: "#efefef" }}
      >
        <div style={{ height: "100px" }}>
          <Menu_AdminPage />
        </div>
        <div className="box-bigger">
          <div style={{ display: "block", width: "100%" }}>
            <div className="box-smaller">
              <div className="content-left-room">
                <FontAwesomeIcon icon={faBed} size="2x" color="#007c7e" />
                <div className="content-detailed-left-room">QUẢN LÝ PHÒNG</div>
              </div>
              <div className="content-right-room">
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
              </div>
            </div>
            <div className="box-second-smaller">
              <div className="content-left-room-2">
                <div className="topic-status">Tình trạng phòng:</div>
                <div style={{ paddingTop: "5px", paddingLeft: "5px" }}>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1}>Còn trống</Radio>
                    <Radio value={2}>Hết chỗ</Radio>
                  </Radio.Group>
                </div>
              </div>
              <div className="content-right-room-2">
                <button
                  className="btn-top-right-room"
                  style={{ width: "150px" }}
                  onClick={showModal_3}
                >
                  Đổi người đại diện
                </button>
                <Modal
                  title={
                    <div style={{ display: "flex" }}>
                      <FontAwesomeIcon
                        icon={faEdit}
                        size="1x"
                        color="#007c7e"
                      />{" "}
                      <div
                        style={{
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                          color: "#007c7e",
                          paddingLeft: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        Đổi người đại diện
                      </div>
                    </div>
                  }
                  onOk={handleOk_3}
                  onCancel={handleCancel_3}
                  visible={isModalVisible_3}
                  okText="THAY ĐỔI"
                  cancelText="HỦY BỎ"
                >
                  <Form>
                    <Form.Item label="Tên phòng" name="room">
                      <Input placeholder="Phòng 01" />
                    </Form.Item>
                    <Form.Item label="Số người" name="num_people">
                      <Input placeholder="04" />
                    </Form.Item>
                    <Form.Item label="Người đại diện" name="present">
                      <Input placeholder="Nhập tên người đại diện" />
                    </Form.Item>
                  </Form>
                </Modal>
                <button className="btn-top-right-room" onClick={showModal}>
                  Thêm mới
                </button>
                <Modal
                  title={
                    <div style={{ display: "flex" }}>
                      <FontAwesomeIcon
                        icon={faPlus}
                        size="1x"
                        color="#007c7e"
                      />{" "}
                      <div
                        style={{
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                          color: "#007c7e",
                          paddingLeft: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        Thêm mới
                      </div>
                    </div>
                  }
                  onOk={handleOk}
                  onCancel={handleCancel}
                  visible={isModalVisible}
                  okText="THÊM MỚI"
                  cancelText="HỦY BỎ"
                >
                  <Form>
                    <Form.Item label="Chi Nhánh" name="brand">
                      <Select
                        defaultValue="Chi Nhánh"
                        style={{ width: "350px", marginRight: "40px" }}
                      >
                        <Option value="Chi Nhánh 1">Chi Nhánh 1</Option>
                        <Option value="Chi Nhánh 2">Chi Nhánh 2</Option>
                        <Option value="Chi Nhánh 3">Chi Nhánh 3</Option>
                        <Option value="Chi Nhánh 4">Chi Nhánh 4</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item label="Tình trạng phòng" name="status">
                      <Select
                        defaultValue="Tình trạng"
                        style={{ width: "350px" }}
                      >
                        <Option value="Tình trạng phòng 1">Còn trống</Option>
                        <Option value="Tình trạng phòng 2">Hết chỗ</Option>
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
                        <Form.Item label="Người đại diện" name="present">
                          <Input placeholder="Nhập tên người đại diện" />
                        </Form.Item>
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div>
                        <Form.Item label="Số người" name="num_people">
                          <InputNumber
                            min={0}
                            max={10}
                            defaultValue={0}
                            onChange={onChange_inputnum2}
                          />
                        </Form.Item>
                      </div>
                      <div style={{ paddingLeft: "30px" }}>
                        <Form.Item label="Tầng" name="floor">
                          <Select
                            defaultValue="Chọn số tầng"
                            style={{ width: "230px" }}
                          >
                            <Option value="Tầng 1">Tầng 1</Option>
                            <Option value="Tầng 2">Tầng 2</Option>
                            <Option value="Tầng 3">Tầng 3</Option>
                            <Option value="Tầng 4">Tầng 4</Option>
                          </Select>
                        </Form.Item>
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div>
                        <Form.Item label="Diện tích" name="square">
                          <Input placeholder="Nhập số diện tích" />
                        </Form.Item>
                      </div>
                      <div style={{ paddingLeft: "10px" }}>
                        <Form.Item label="Đơn giá" name="bill">
                          <Input placeholder="Nhập đơn giá" />
                        </Form.Item>
                      </div>
                    </div>
                    <Form.Item label="Mô tả" name="description">
                      <Input placeholder="Nhập mô tả" />
                    </Form.Item>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        paddingTop: "15px",
                        borderTop: "solid 2px #eef1f5",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faPlus}
                        size="1x"
                        color="#007c7e"
                      />
                      <div
                        style={{
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                          color: "#007c7e",
                          paddingLeft: "10px",
                          fontWeight: "bold",
                          marginTop: "-9px",
                        }}
                      >
                        Thêm thành viên{" "}
                      </div>
                    </div>
                    <Form>
                      <Form.Item label="Số lượng thành viên" name="num_peope">
                        <Input placeholder="02" style={{ width: "150px" }} />
                      </Form.Item>
                      <Form.Item label="Thành viên 01" name="name_mem_1">
                        <Input
                          placeholder="Nhập tên thành viên 01"
                          style={{ width: "350px" }}
                        />
                      </Form.Item>
                      <Form.Item label="Thành viên 01" name="phone_mem_1">
                        <Input
                          placeholder="Nhập sđt thành viên 01"
                          style={{ width: "350px" }}
                        />
                      </Form.Item>
                      <Form.Item label="Thành viên 02" name="name_mem_2">
                        <Input
                          placeholder="Nhập tên thành viên 02"
                          style={{ width: "350px" }}
                        />
                      </Form.Item>
                      <Form.Item label="Thành viên 02" name="phone_mem_2">
                        <Input
                          placeholder="Nhập sđt thành viên 02"
                          style={{ width: "350px" }}
                        />
                      </Form.Item>
                      <Form.Item label="Thành viên 03" name="name_mem_3">
                        <Input
                          placeholder="Nhập tên thành viên 03"
                          style={{ width: "350px" }}
                        />
                      </Form.Item>
                      <Form.Item label="Thành viên 03" name="phone_mem_3">
                        <Input
                          placeholder="Nhập sđt thành viên 03"
                          style={{ width: "350px" }}
                        />
                      </Form.Item>
                      <Form.Item label="Thành viên 04" name="name_mem_4">
                        <Input
                          placeholder="Nhập tên thành viên 04"
                          style={{ width: "350px" }}
                        />
                      </Form.Item>
                      <Form.Item label="Thành viên 04" name="phone_mem_4">
                        <Input
                          placeholder="Nhập sđt thành viên 04"
                          style={{ width: "350px" }}
                        />
                      </Form.Item>
                    </Form>
                  </Form>
                </Modal>
                <button className="btn-top-right-room" onClick={showModal_1}>
                  Tìm kiếm
                </button>
                <Modal
                  title={
                    <div style={{ display: "flex" }}>
                      <FontAwesomeIcon
                        icon={faSearch}
                        size="1x"
                        color="#007c7e"
                      />{" "}
                      <div
                        style={{
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                          color: "#007c7e",
                          paddingLeft: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        Tìm kiếm
                      </div>
                    </div>
                  }
                  onOk={handleOk_1}
                  onCancel={handleCancel_1}
                  visible={isModalVisible_1}
                  okText="TÌM KIẾM"
                  cancelText="HỦY BỎ"
                >
                  <Form.Item label="Chi Nhánh" name="brand">
                    <Select
                      defaultValue="Chi Nhánh"
                      style={{ width: "350px", marginRight: "40px" }}
                    >
                      <Option value="Chi Nhánh 1">Chi Nhánh 1</Option>
                      <Option value="Chi Nhánh 2">Chi Nhánh 2</Option>
                      <Option value="Chi Nhánh 3">Chi Nhánh 3</Option>
                      <Option value="Chi Nhánh 4">Chi Nhánh 4</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Tình trạng phòng" name="status">
                    <Select
                      defaultValue="Tình trạng"
                      style={{ width: "320px" }}
                    >
                      <Option value="Tình trạng phòng 1">Còn trống</Option>
                      <Option value="Tình trạng phòng 2">Hết chỗ</Option>
                    </Select>
                  </Form.Item>
                  <div style={{ display: "flex" }}>
                    <div>
                      <Form.Item label="Giá từ" name="price_1">
                        <Input
                          placeholder="Nhập giá từ"
                          style={{ width: "150px" }}
                        />
                      </Form.Item>
                    </div>
                    <div style={{ paddingLeft: "10px" }}>
                      <Form.Item label="Giá đến" name="price_2">
                        <Input
                          placeholder="Nhập giá đến"
                          style={{ width: "150px" }}
                        />
                      </Form.Item>
                    </div>
                  </div>
                </Modal>
                <Popconfirm
                  title="BẠN CÓ CHẮC MUỐN XÓA DỮ LIỆU KHÔNG?"
                  onConfirm={confirm_1}
                  onCancel={cancel_1}
                  okText="Có"
                  cancelText="Không"
                >
                  <button className="btn-top-right-room">Xóa nhiều</button>
                </Popconfirm>
              </div>
            </div>
            <Table columns={columns} dataSource={data} bordered />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Room;
