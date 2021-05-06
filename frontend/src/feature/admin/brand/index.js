import React, { useState, useEffect } from "react";
import "./style.css";
import { Images } from "./../../../config/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faSitemap,
  faPlu,
  faPlus,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import Menu_AdminPage from "./../../../components/menu_adminpage";
import {
  Table,
  Popconfirm,
  message,
  Button,
  Modal,
  Form,
  Input,
  Select,
  InputNumber,
} from "antd";
import arr_data_brand from "./../../../mock/data_brand";
import branchesApi from "./../../../api/branchesApi";
const { Option } = Select;

function Brand(props) {
  //api
  //getAll
  const [branchList, setBranchList] = useState([]);
  useEffect(() => {
    const fetchBranchList = async () => {
      try {
        const response = await branchesApi.getAll();
        console.log("Fetch branch successfully: ", response.data);
        setBranchList(response.data);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchBranchList();
  }, []);
  //form
  const [table, setTable] = useState([]);
  const onFinish = (values) => {
    const fetchCreateBranch = async () => {
      try {
        const response = await branchesApi.createbranch(values);
        console.log("Fetch branch succesfully: ", response);
        settabledata([...branchList, response]);
        console.log("tabledata: ", branchList);
      } catch (error) {
        console.log("failed to fetch branch list: ", error);
      }
    };
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //select
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  //input_num
  function onChange_inputnum(value) {
    console.log("changed", value);
  }
  function confirm(e) {
    console.log(e);
    message.success("Click on Yes");
  }

  function cancel(e) {
    console.log(e);
    message.error("Click on No");
  }
  const columns = [
    {
      title: "Vị trí",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Tên chi nhánh",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Số lầu",
      dataIndex: "numberOfStages",
      key: "numberOfStages",
    },
    {
      title: "Số phòng",
      dataIndex: "numberOfRooms",
      key: "numberOfRooms",
    },
    {
      title: "Chủ trọ",
      dataIndex: "ownerId",
      key: "ownerId",
    },
    {
      title: "Cơ sở vật chất",
      dataIndex: "facilityIds",
      key: "facilityIds",
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
            onClick={showModal_1}
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
                  okText="THÊM MỚI"
                  cancelText="HỦY BỎ"
                  footer={null}
                >
                  <Form
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                  >
                    <Form.Item label="Vị trí" name="location">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Tên chi nhánh" name="description">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Số lầu" name="numberOfStages">
                      <InputNumber
                        min={1}
                        max={10}
                        onChange={onChange_inputnum}
                      />
                    </Form.Item>
                    <Form.Item label="Số phòng" name="numberOfRooms">
                      <InputNumber
                        min={1}
                        max={10}
                        onChange={onChange_inputnum}
                      />
                    </Form.Item>
                    <Form.Item label="Chủ trọ" name="ownerId">
                      {/* <Select value={branchList.ownerId.fullName} /> */}
                    </Form.Item>
                    {/* <Form.Item></Form.Item> */}
                    <div style={{ display: "flex" }}>
                      <Button type="primary" htmlType="submit">
                        THÊM MỚI
                      </Button>
                      <div style={{ paddingLeft: "10px" }}>
                        <Button type="default">HỦY BỎ</Button>
                      </div>
                    </div>
                  </Form>
                </Modal>
                {/* <Popconfirm
                  title="BẠN CÓ CHẮC MUỐN XÓA DỮ LIỆU KHÔNG?"
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Có"
                  cancelText="Không"
                >
                  <button className="detailed-btn">XÓA NHIỀU</button>
                </Popconfirm> */}
              </div>
            </div>

            <div
              style={{
                paddingTop: "30px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              <Table columns={columns} bordered dataSource={branchList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Brand;
