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
  Spin,
  InputNumber,
} from "antd";
import arr_data_brand from "./../../../mock/data_brand";
import branchesApi from "./../../../api/branchesApi";
import facilitiesApi from "./../../../api/facilitiesApi";
import usersApi from "../../../api/usersApi";

const { Option } = Select;

function Branches(props) {
  //api
  const [rowEdit, setRowEdit] = useState({});

  const [idSelected, setidSelected] = useState([]);

  //spin
  const [isloadingUpdate, setIsloadingUpdate] = useState(false);

  //getAll
  const [branchList, setBranchList] = useState([]);
  const [facilitiesList, setFacilitiesList] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const fetchUserList = async () => {
    try {
      const response = await usersApi.getAll();
      console.log("Fetch users successfully: ", response.data);
      setUsersList(response.data);
    } catch (error) {
      console.log("Failed to fetch users list: ", error);
    }
  };
  const fetchBranchList = async () => {
    try {
      const response = await branchesApi.getAll();
      console.log("Fetch branch successfully: ", response.data);
      setBranchList(response.data);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch branch list: ", error);
    }
  };
  const fetchFacilityList = async () => {
    try {
      const response = await facilitiesApi.getAll();
      console.log("Fetch Facility successfully: ", response.data);
      setFacilitiesList(response.data);
    } catch (error) {
      console.log("Failed to fetch Facility list: ", error);
    }
  };
  useEffect(() => {
    fetchUserList();
    fetchFacilityList();
    fetchBranchList();
  }, []);
  //form
  const propsselect = [];
  const [table, setTable] = useState([]);
  const onFinish = (values) => {
    const fetchCreateBranch = async () => {
      const dataCreate = {
        ...values,
        facilityIds: idSelected,
      };
      console.log("dataCreate", dataCreate);
      try {
        const response = await branchesApi.createbranch(dataCreate);
        console.log("Fetch branch succesfully: ", response);
        setBranchList([...branchList, response.data]);
        console.log("tabledata: ", response);
        setIsModalVisible(false);
      } catch (error) {
        console.log("failed to fetch branch list: ", error);
      }
    };
    fetchCreateBranch();
  };
  const fetchDeleteBranches = async (record) => {
    try {
      const response = await branchesApi.deletebranch(record.id);
      console.log("Delete branches successfully", response);
      setBranchList(branchList.filter((item) => item.id !== record.id));
      fetchBranchList();
    } catch (error) {
      console.log("Failed to delete branches list", error);
    }
  };
  const fetchUpdateBranches = async (values) => {
    // setIsloadingUpdate(true);

    try {
      const response = await branchesApi.updatebranch(values);
      console.log("Fetch update branches successfully", response);
      console.log("edit data", values);
      fetchBranchList();
    } catch (error) {
      console.log("Failed to update branches", error);
      // setIsloadingUpdate(false);
    }
  };
  const onFinish_edit = (values) => {
    // console.log("Success", values);
    const dataUpdate = {
      ...values,
      facilityIds: idSelected,
    };
    console.log("dataupdate", dataUpdate);
    const data_update = { id: rowEdit.id, data: dataUpdate };
    fetchUpdateBranches(data_update);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //select
  function handleChange(value) {
    console.log(`selected facilitiesid ${value}`);
    const rolevalue = [value];
    setidSelected(rolevalue);
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
            onConfirm={() => fetchDeleteBranches(record)}
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
            <Form.Item label="Vị trí" name="location">
              <Input placeholder={rowEdit.location} />
            </Form.Item>
            <Form.Item label="Miêu tả" name="description">
              <Input placeholder={rowEdit.description} />
            </Form.Item>
            <Form.Item label="Số lầu" name="numberOfStages">
              <Input placeholder={rowEdit.numberOfStages} />
            </Form.Item>
            <Form.Item label="Số phòng" name="numberOfRooms">
              <Input placeholder={rowEdit.numberOfRooms} />
            </Form.Item>
            <Form.Item label="Vật liệu">
              <Select
                mode="multiple"
                optionLabelProp="label"
                onChange={handleChange}
              >
                {facilitiesList.map((facilitiesid) => (
                  <Select.Option key={facilitiesid.id} value={facilitiesid.id}>
                    {facilitiesid.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

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
        <div style={{ height: "120px" }}>
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
              <div className="topic-left-branches">
                <FontAwesomeIcon icon={faSitemap} size="2x" color="#007c7e" />
                <div className="content">QUẢN LÝ CHI NHÁNH NHÀ TRỌ</div>
              </div>
              <div className="topic-right-branches">
                <div className="btn-right-branches">
                  <button className="detailed-btn-branches" onClick={showModal}>
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
                        <Input />
                      </Form.Item>
                      <Form.Item label="Số phòng" name="numberOfRooms">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Thiết bị">
                        <Select
                          onChange={handleChange}
                          allowClear
                          mode="multiple"
                        >
                          {facilitiesList.map((facilitiesid) =>
                              <Select.Option
                                key={facilitiesid.id}
                                value={facilitiesid.id}
                              >
                           
                                {facilitiesid.name}
                              </Select.Option>
                          )}
                          {console.log(propsselect)}
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
export default Branches;
