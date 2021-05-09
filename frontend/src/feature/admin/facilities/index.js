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
import facilitiesApi from "./../../../api/facilitiesApi";
import branchéApi from "./../../../api/branchesApi";
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

function Facilities(props) {
  //api
  //getAll
  const [facilitiesList, setFacilitiesList] = useState([]);
  const [branchesList, setBranchesList] = useState([]);
  const [idSelected, setidSelected] = useState([]);

  const fetchfacilitiesList = async () => {
    try {
      const response = await facilitiesApi.getAll();
      console.log("Fetch facilities successfully: ", response.data);
      setFacilitiesList(response.data);
    } catch (error) {
      console.log("Failed to fetch facilities list: ", error);
    }
  };
  const fetchBranchesList = async () => {
    try {
      const response = await branchesApi.getAll();
      console.log("Fetch branches successfully: ", response.data);
      setBranchesList(response.data);
    } catch (error) {
      console.log("Failed to fetch branches list: ", error);
    }
  };
  useEffect(() => {
    fetchBranchesList();
    fetchfacilitiesList();
  }, []);
  //form
  const onFinish = (values) => {
    const dataCreate = {
      ...values,
      branchIds: idSelected,
    };
    console.log("dataCreate", dataCreate);

    const fetchCreateFacilities = async () => {
      try {
        const response = await facilitiesApi.createfacilities(dataCreate);
        console.log("Fetch facilities succesfully: ", response);
        setFacilitiesList([...facilitiesList, response.data]);
        console.log("DATA: ", response);
      } catch (error) {
        console.log("failed to fetch facilities list: ", error);
      }
    };
    fetchCreateFacilities();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //select
  function handleChange(value) {
    console.log(`selected branches id ${value}`);
    const branchesvalue = [value];
    setidSelected(branchesvalue);
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
      title: "Tên vật dụng",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Chất lượng",
      dataIndex: "quality",
      key: "quality",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
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
                    <Form.Item label="Tên vật liệu" name="name">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Chất lượng" name="quality">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Số lượng" name="quantity">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Chủ trọ">
                      <Select onChange={handleChange}>
                        {branchesList.map((branchesid) => (
                          <Select.Option
                            key={branchesid.id}
                            value={branchesid.id}
                          >
                            {branchesid.id}
                          </Select.Option>
                        ))}
                      </Select>
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
              <Table columns={columns} bordered dataSource={facilitiesList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Facilities;
