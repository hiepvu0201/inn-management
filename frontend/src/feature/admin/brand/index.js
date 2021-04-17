import React, { useState } from "react";
import "./style.css";
import { Images } from "./../../../config/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faSitemap,
  faPlu,
  faPlus,
  faTrash,
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import Menu_AdminPage from "./../../../components/menu_adminpage";
import { Table, Popconfirm, message, Modal, Form, Input } from "antd";
import arr_data_brand from "./../../../mock/data_brand";
function Brand(props) {
  function confirm(e) {
    console.log(e);
    message.success("Click on Yes");
  }

  function cancel(e) {
    console.log(e);
    message.error("Click on No");
  }
  const data = [
    {
      key: "1",
      name: "Chi Nhánh 1",
      floor: "2",
      address: "2 Võ Văn Ngân",
      name_host: "Vũ Văn Thái",
      description: "Sạch sẽ",
    },
    {
      key: "2",
      name: "Chi Nhánh 2",
      floor: "3",
      address: "5 Võ Văn Ngân",
      name_host: "Vũ Văn Thái",
      description: "Sạch sẽ",
    },
    {
      key: "3",
      name: "Chi Nhánh 3",
      floor: "2",
      address: "2 Võ Văn Ngân",
      name_host: "Vũ Văn Thái",
      description: "Sạch sẽ",
    },
  ];
  const columns = [
    {
      title: "Tên Chi Nhánh",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số Lầu",
      dataIndex: "floor",
      key: "Floor",
    },
    {
      title: "Địa Chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tên Chủ Nhà",
      dataIndex: "name_host",
      key: "name_host",
    },
    {
      title: "Mô Tả",
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
          <div style={{ paddingLeft: "10px", lineHeight: "1px" }} onClick={showModal_1}>
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
            onOk={handleOk_1}
            onCancel={handleCancel_1}
            visible={isModalVisible_1}
            okText="LƯU LẠI"
            cancelText="HỦY BỎ"
          >
            <Form>
              <Form.Item label="Tên Tòa Nhà" name="Name">
                <Input />
              </Form.Item>
              <Form.Item label="Số Lầu" name="Floor">
                <Input />
              </Form.Item>
              <Form.Item label="Số Phòng" name="Room">
                <Input />
              </Form.Item>
              <Form.Item label="Địa Chỉ" name="Address">
                <Input />
              </Form.Item>
              <Form.Item label="Ghi Chú" name="Notification">
                <Input />
              </Form.Item>
            </Form>
          </Modal>
        </div>
      ),
    },
  ];
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
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100vmax",
          backgroundColor: "#efefef",
        }}
      >
        <div style={{ height: "100px" }}>
          <Menu_AdminPage />
        </div>
        <div className="rectangle">
          <div style={{ display: "block", width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "auto",
                paddingTop: "10px",
              }}
            >
              <div className="topic-left">
                <FontAwesomeIcon icon={faSitemap} size="2x" color="#007c7e" />
                <div className="content">QUẢN LÝ DANH SÁCH NHÀ TRỌ</div>
              </div>
              <div className="btn-right">
                <button className="detailed-btn" onClick={showModal}>
                  THÊM MỚI
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
                  okText="LƯU LẠI"
                  cancelText="HỦY BỎ"
                >
                  <Form>
                    <Form.Item label="Tên Tòa Nhà" name="Name">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Số Lầu" name="Floor">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Số Phòng" name="Room">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Địa Chỉ" name="Address">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Ghi Chú" name="Notification">
                      <Input />
                    </Form.Item>
                  </Form>
                </Modal>
                <Popconfirm
                  title="BẠN CÓ CHẮC MUỐN XÓA DỮ LIỆU KHÔNG?"
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Có"
                  cancelText="Không"
                >
                  <button className="detailed-btn">XÓA NHIỀU</button>
                </Popconfirm>
              </div>
            </div>

            <div style={{ paddingTop: "30px",paddingLeft:"15px",paddingRight:"15px" }}>
              <Table columns={columns} bordered dataSource={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Brand;
