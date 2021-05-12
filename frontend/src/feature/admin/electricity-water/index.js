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
  Tag,
  InputNumber,
  DatePicker,
  Radio,
} from "antd";
import arr_data_brand from "../../../mock/data_brand";
import electricityWaterApi from "../../../api/elctricitywaterApi";
import roomsApi from "../../../api/roomApi";
const { Option } = Select;

function ElectricityWaters(props) {
  //api
  //getAll
  const [roomList, setRoomList] = useState([]);
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
    fetchRoomList();
    // fetchBranchesList();
    // fetchfacilitiesList();
  }, []);
  //form
  const onFinish = (values) => {
    const dataCreate = {
      ...values,
      
    };
    console.log("dataCreate", dataCreate);

    const fetchCreateElectricityWater = async () => {
      try {
        const response = await electricityWaterApi.createelectricitywater(dataCreate);
        console.log("Fetch create electricity-water succesfully: ", response);
        setElectricitywaterList([...electricitywatersList, response.data]);
        console.log("DATA: ", response);
        setIsModalVisible(false);
      } catch (error) {
        console.log("failed to create electricity-water list: ", error);
      }
    };
    fetchCreateElectricityWater();
  };
  const fetchUpdateElectricityWater = async (edittv) => {
    //  const data_update = { id: rowEdit.id, data: dataUpdate };
    //  console.log("dataupdate", dataUpdate);
    setIsloadingUpdate(true);
    try {
      const response = await electricityWaterApi.updateelectricitywater(edittv);
      console.log("Fetch update electricity-water successfully", response);
      console.log("edit data", edittv);
      fetchElectricitywaterList();
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to update electricity-water", error);
      setIsloadingUpdate(false);
    }
  };
  const onFinish_edit = (values) => {
    // console.log("Success", values);
    // fetchUpdateUsers(data_update);
    
    console.log("dataupdate", values);
    const data_update = { id: rowEdit.id, data: values };
    fetchUpdateElectricityWater(data_update);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const fetchDeleteElectricityWater = async (record) => {
    try {
      const response = await electricityWaterApi.deleteelectricitywater(record.id);
      console.log("Delete electricity-water successfully", response);
      setElectricitywaterList(electricitywatersList.filter((item) => item.id !== record.id));
    } catch (error) {
      console.log("Failed to delete electricity-water list", error);
    }
  };

  //select
  function handleChange(value) {
    console.log(`selected users ${value}`);
    // const usersvalue = value
    // setidSelected(usersvalue);
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
      title: "Số điện cũ",
      dataIndex: "numElectricOld",
      key: "numElectricOld",
    },
    {
      title: "Số điện mới",
      dataIndex: "numElectricNew",
      key: "numElectricNew",
    },
    {
      title: "Số điện tiêu thụ",
      dataIndex: "numElectricConsump",
      key: "numElectricConsump",
    },
    {
      title: "Số nước cũ",
      dataIndex: "numWaterOld",
      key: "numWaterOld",
    },
    {
      title: "Số nước mới",
      dataIndex: "numWaterNew",
      key: "numWaterNew",
    },
    {
      title: "Số nước tiêu thụ",
      dataIndex: "numElectricConsump",
      key: "numElectricConsump",
    },
    {
      title: "Tháng",
      dataIndex: "month",
      key: "month",
    },
    {
      title: "Kiểm tra",
      dataIndex: "checked",
      key: "checked",
      render: (text) => (
        <>
          {text === false ? (
            <Tag color="#87d068">CHƯA THANH TOÁN</Tag>
          ) : (
            <Tag color="#f50">ĐÃ THANH TOÁN</Tag>
          )}
        </>
      ),
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <div style={{ display: "flex" }}>
          <Popconfirm
            title="BẠN CÓ CHẮC MUỐN XÓA DỮ LIỆU KHÔNG?"
            onConfirm={() => fetchDeleteElectricityWater(record)}
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
            <Form.Item label="Số điện cũ" name="numElectricOld">
              <Input placeholder={rowEdit.numElectricOld} />
            </Form.Item>
            <Form.Item label="Số điện mới" name="numElectricNew">
              <Input placeholder={rowEdit.numElectricNew} />
            </Form.Item>
            <Form.Item label="Số điện tiêu thụ" name="numElectricConsump">
              <Input placeholder={rowEdit.numElectricConsump} />
            </Form.Item>
            <Form.Item label="Số nước cũ" name="numWaterOld">
              <Input placeholder={rowEdit.numWaterOld} />
            </Form.Item>
            <Form.Item label="Số nước mới" name="numWaterNew">
              <Input placeholder={rowEdit.numWaterNew} />
            </Form.Item>
            <Form.Item label="Số nước tiêu thụ" name="numWaterConsump">
              <Input placeholder={rowEdit.numWaterConsump} />
            </Form.Item>
            <Form.Item label="Tháng" name="month">
              <InputNumber placeholder={rowEdit.month} />
            </Form.Item>
            <Form.Item label="Kiểm tra" name="checked">
              <Radio.Group placeholder={rowEdit.checked}>
                <Radio value="true">True</Radio>
                <Radio value="false">False</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Phòng" name="roomId">
              <Select onChange={handleChange}>
                {roomList.map((roomsid) => (
                  <Select.Option key={roomsid.id} value={roomsid.id}>
                    {roomsid.id}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            {/* <Form.Item label="Người dùng">
              <Select onChange={handleChange}>
                {usersList.map((usersid) => (
                  <Select.Option key={usersid.id} value={usersid.id}>
                    {usersid.id}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Vật liệu">
              <Select
                onChange={handleChange_1}
                placeholder={rowEdit.facilityIds}
              >
                {facilitiesList.map((facilitiesid) => (
                  <Select.Option key={facilitiesid.id} value={facilitiesid.id}>
                    {facilitiesid.id}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Điện nước">
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
                <div className="content">QUẢN LÝ ĐIỆN NƯỚC</div>
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
                    <Form.Item label="Số điện cũ" name="numElectricOld">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Số điện mới" name="numElectricNew">
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Số điện tiêu thụ"
                      name="numElectricConsump"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item label="Số nước cũ" name="numWaterOld">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Số nước mới" name="numWaterNew">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Số nước tiêu thụ" name="numWaterConsump">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Tháng" name="month">
                      <InputNumber />
                    </Form.Item>
                    <Form.Item label="Kiểm tra" name="checked">
                      <Radio.Group>
                        <Radio value="true">True</Radio>
                        <Radio value="false">False</Radio>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Phòng" name="roomId">
                      <Select onChange={handleChange}>
                        {roomList.map((roomsid) => (
                          <Select.Option key={roomsid.id} value={roomsid.id}>
                            {roomsid.id}
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
              <Table
                columns={columns}
                bordered
                dataSource={electricitywatersList}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ElectricityWaters;