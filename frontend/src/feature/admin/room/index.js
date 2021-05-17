import React, { useState, useEffect } from "react";
import "./style.css";
import { Images } from "../../../config/image";
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
import Menu_AdminPage from "../../../components/menu_adminpage";
import roomApi from "../../../api/roomApi";
import usersApi from "../../../api/usersApi";
import {
  Table,
  Popconfirm,
  message,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Spin,
  InputNumber,
} from "antd";
import arr_data_brand from "../../../mock/data_brand";
import facilitiesApi from "../../../api/facilitiesApi";
import electricityWaterApi from "../../../api/elctricitywaterApi";
import roomsApi from "../../../api/roomApi";
const { Option } = Select;

function Rooms(props) {
  //api
  //getAll
  const [roomList, setRoomList] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [facilitiesList, setFacilitiesList] = useState([]);
  const [electricitywatersList, setElectricitywaterList] = useState([]);

  const [idSelected, setidSelected] = useState([]);
  const [isloadingUpdate, setIsloadingUpdate] = useState(false);
  const [rowEdit, setRowEdit] = useState({});

  const fetchRoomList = async () => {
    try {
      const response = await roomApi.getAll();
      console.log("Fetch rooms successfully: ", response.data);
      setRoomList(response.data);

      setIsloadingUpdate(false);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch rooms list: ", error);
    }
  };
  const fetchUsersList = async () => {
    try {
      const response = await usersApi.getAll();
      console.log("Fetch users successfully: ", response.data);
      setUsersList(response.data);
    } catch (error) {
      console.log("Failed to fetch users list: ", error);
    }
  };
  const fetchFacilitiesList = async () => {
    try {
      const response = await facilitiesApi.getAll();
      console.log("Fetch facilities successfully: ", response.data);
      setFacilitiesList(response.data);
    } catch (error) {
      console.log("Failed to fetch facilities list: ", error);
    }
  };
  const fetchElectricitywaterList = async () => {
    try {
      const response = await electricityWaterApi.getAll();
      console.log("Fetch electricities successfully: ", response.data);
      setElectricitywaterList(response.data);
    } catch (error) {
      console.log("Failed to fetch electricities list: ", error);
    }
  };
  useEffect(() => {
    fetchElectricitywaterList();
    fetchFacilitiesList();
    fetchUsersList();
    fetchRoomList();
    // fetchBranchesList();
    // fetchfacilitiesList();
  }, []);
  //form
  const onFinish = (values) => {
    const dataCreate = {
      ...values,
      userIds: idSelected,
      facilityIds: selected_1,
      // electricityWaterIds: selected_2,
    };
    console.log("dataCreate", dataCreate);

    const fetchCreateRooms = async () => {
      try {
        const response = await roomsApi.createrooms(dataCreate);
        console.log("Fetch create rooms succesfully: ", response);
        setRoomList([...roomList, response.data]);
        console.log("DATA: ", response);
        setIsModalVisible(false);
      } catch (error) {
        console.log("failed to create rooms list: ", error);
      }
    };
    fetchCreateRooms();
  };
  const fetchUpdateRooms = async (edittv) => {
    //  const data_update = { id: rowEdit.id, data: dataUpdate };
    //  console.log("dataupdate", dataUpdate);
    setIsloadingUpdate(true);
    try {
      const response = await roomApi.updaterooms(edittv);
      console.log("Fetch update rooms successfully", response);
      console.log("edit data", edittv);
      fetchRoomList();
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to update rooms", error);
      setIsloadingUpdate(false);
    }
  };
  const onFinish_edit = (values) => {
    // console.log("Success", values);
    // fetchUpdateUsers(data_update);
    const dataUpdate = {
      ...values,
      userIds: idSelected,
      facilityIds: selected_1,
      electricityWaterIds: selected_2,
    };
    console.log("dataupdate", dataUpdate);
    const data_update = { id: rowEdit.id, data: dataUpdate };
    fetchUpdateRooms(data_update);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const fetchDeleteRooms = async (record) => {
    try {
      const response = await roomApi.deleterooms(record.id);
      console.log("Delete rooms successfully", response);
      setRoomList(roomList.filter((item) => item.id !== record.id));
    } catch (error) {
      console.log("Failed to delete facilities list", error);
    }
  };

  //select
  function handleChange(value) {
    console.log(`selected users ${value}`);
    const usersvalue = [value];
    setidSelected(usersvalue);
  }
  const [selected_1, setIdselected_1] = useState([]);
  function handleChange_1(value) {
    console.log(`selected facilities id ${value}`);
    const facilitiesvalue = [value];
    setIdselected_1(facilitiesvalue);
  }
  const [selected_2, setIdselected_2] = useState([]);
  function handleChange_2(value) {
    console.log(`selected electricity id ${value}`);
    const electricitiesvalue = [value];
    setIdselected_2(electricitiesvalue);
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
      title: "Số phòng",
      dataIndex: "roomNo",
      key: "roomNo",
    },
    {
      title: "Vị trí",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Khách thuê",
      dataIndex: "users",
      key: "users",
      render: (users) => <div>{users[0].fullName}</div>,
    },
    {
      title: "Thiết bị",
      dataIndex: "facilities",
      key: "facilities",
      render: (facilities) => <div>{facilities[0].name}</div>,
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <div style={{ display: "flex" }}>
          <Popconfirm
            title="BẠN CÓ CHẮC MUỐN XÓA DỮ LIỆU KHÔNG?"
            onConfirm={() => fetchDeleteRooms(record)}
            onCancel={cancel}
            okText="Có"
            cancelText="Không"
          >
            <FontAwesomeIcon icon={faTrash} color="red" />
          </Popconfirm>
          <div
            style={{ paddingLeft: "10px", lineHeight: "1px" }}
            onClick={() => {
              showModal_1(record);
            }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </div>
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

  const showModal_1 = (values) => {
    setIsModalVisible_1(true);
    console.log("values edit:", values);
    setRowEdit(values);
  };
  const handleOk_1 = () => {
    setIsModalVisible_1(false);
  };

  const handleCancel_1 = () => {
    setIsModalVisible_1(false);
  };
  return (
    <div>
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
        footer={null}
      >
        <Spin spinning={isloadingUpdate} size="large">
          <Form initialValues={{ remember: true }} onFinish={onFinish_edit}>
            <Form.Item label="Số phòng" name="roomNo">
              <Input placeholder={rowEdit.roomNo} />
            </Form.Item>
            <Form.Item label="Vị trí" name="position">
              <Input placeholder={rowEdit.position} />
            </Form.Item>

            <Form.Item label="Người dùng">
              <Select onChange={handleChange}>
                {usersList.map((usersid) => (
                  <Select.Option key={usersid.id} value={usersid.id}>
                    {usersid.fullName}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Thiết bị">
              <Select
                onChange={handleChange_1}
                placeholder={rowEdit.facilityIds}
              >
                {facilitiesList.map((facilitiesid) => (
                  <Select.Option key={facilitiesid.id} value={facilitiesid.id}>
                    {facilitiesid.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            {/* <Form.Item label="Điện nước">
              <Select onChange={handleChange_2}>
                {electricitywatersList.map((electricitywatersid) => (
                  <Select.Option
                    key={electricitywatersid.id}
                    value={electricitywatersid.id}
                  >
                    {electricitywatersid.id}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item> */}

            <div style={{ display: "flex" }}>
              <Button type="primary" htmlType="submit">
                CHỈNH SỬA{" "}
              </Button>
              <div style={{ paddingLeft: "10px" }}>
                <Button type="default" onClick={handleCancel_1}>
                  HỦY BỎ
                </Button>
              </div>
            </div>
          </Form>
        </Spin>
      </Modal>
      <div
        style={{
          width: "100%",
          height: "100vh",
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
                <div className="content">QUẢN LÝ PHÒNG TRỌ</div>
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
                    <Form.Item label="Số phòng" name="roomNo">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Vị trí" name="position">
                      <Input />
                    </Form.Item>

                    <Form.Item label="Người dùng">
                      <Select onChange={handleChange}>
                        {usersList.map((usersid) => (
                          <Select.Option key={usersid.id} value={usersid.id}>
                            {usersid.fullName}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item label="Thiết bị">
                      <Select onChange={handleChange_1}>
                        {facilitiesList.map((facilitiesid) => (
                          <Select.Option
                            key={facilitiesid.id}
                            value={facilitiesid.id}
                          >
                            {facilitiesid.name}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
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
              <Table columns={columns} bordered dataSource={roomList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Rooms;
