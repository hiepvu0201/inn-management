import React, { useState, useEffect } from "react";
import "./style.css";
import { Images } from "./../../../config/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSitemap,
  faPlus,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
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
} from "antd";
import branchesApi from "./../../../api/branchesApi";
import facilitiesApi from "./../../../api/facilitiesApi";
import usersApi from "../../../api/usersApi";
import Cookies from "js-cookie";

const { Option } = Select;

function Branches(props) {
  const [rowEdit, setRowEdit] = useState({});
  //spin
  const [isloadingUpdate, setIsloadingUpdate] = useState(false);
  const [nullstate, setNullstate] = useState([])
  //getAll
  const [branchList, setBranchList] = useState([]);
  const [facilitiesList, setFacilitiesList] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const propsselect = [];

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
      setfaketable(response.data)
      setNullstate(response.data)
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
  {
    facilitiesList.map((facilitiesid) =>
      propsselect.push(
        <Option key={facilitiesid.id} value={facilitiesid.id}>
          {facilitiesid.name}
        </Option>
      )
    );
  }
  const onFinish = (values) => {
    const fetchCreateBranch = async () => {
      const dataCreate = {
        ...values,
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
    setIsloadingUpdate(true);
    try {
      const response = await branchesApi.updatebranch(values);
      console.log("Fetch update branches successfully", response);
      console.log("edit data", values);
      fetchBranchList();
    } catch (error) {
      console.log("Failed to update branches", error);
      setIsloadingUpdate(false);
    }
  };
  const onFinish_edit = (values) => {
    const dataUpdate = {
      ...values,
      userName: rowEdit.userName,
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
    
  }
  function handleChange_user(value) {
    console.log(`selected username ${value}`);
    
  }

  function cancel(e) {
    console.log(e);
    message.error("Không xóa");
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
      render: (facilities) => (
        <div>{facilities.map((us) => us.name) + " "}</div>
      ),
    },
    {
      title: "Quản trị viên",
      dataIndex: "userName",
      // render:(userName) => <div>{userName}</div>
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
  const onSearch_1 = (value) => {
    console.log("<<VALUE", value);
     if (value === undefined) {
       setBranchList(nullstate);
     } else {
    const fetchGetallbranchesbyUsername = async () => {
      try {
        const response = await branchesApi.getallbranchesbyusername(value);
        console.log("<<<", response);
        console.log(
          "Fetch all branches name by username successfully: ",
          response.data
        );
        setBranchList(response.data);
      } catch (error) {
        console.log("Failed to fetch list: ", error);
      }
    };
    fetchGetallbranchesbyUsername();
  };
}
const [faketable, setfaketable] = useState([])
  const onSearch_2 = (value) => {
    console.log("<<VALUE", value);
    if (value === undefined) {
      setBranchList(nullstate);
    } else {
        const newarr = faketable.filter((rs) => rs.location === value);
        setBranchList(newarr);
        console.log("<<a", newarr);
      // const fetchGetallbranchesbyBranchLocation = async () => {
        // try {
        //   const response = await branchesApi.getallbranchesbyBranchLocation(value);
        //   console.log(
        //     "Fetch all branches name by branchlocation successfully: ",
        //     response.data
        //   );
        // } catch (error) {
        //   console.log("Failed to fetch by branchlocation list: ", error);
        // }
      // };
      // fetchGetallbranchesbyBranchLocation();
    }
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
            <Form.Item label="Thiết bị" name="facilityIds">
              <Select onChange={handleChange} allowClear mode="multiple">
                {propsselect}
              </Select>
            </Form.Item>
            <Form.Item label="Người dùng" name="userName">
              <Select
                onChange={handleChange_user}
                allowClear
                disabled
                placeholder={rowEdit.userName}
              >
                <Select.Option value={Cookies.get("userName")}>
                  {Cookies.get("userName")}
                </Select.Option>
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
                <div className="element-select">
                  <Select
                    allowClear
                    size="middle"
                    style={{ width: "200px" }}
                    onChange={onSearch_2}
                  >
                    {branchList.map((branchid) => (
                      <Select.Option
                        key={branchid.location}
                        value={branchid.location}
                      >
                        {branchid.location}
                      </Select.Option>
                    ))}
                  </Select>
                </div>
                <div className="element-select">
                  <Select
                    allowClear
                    size="middle"
                    style={{ width: "200px" }}
                    onChange={onSearch_1}
                  >
                    {usersList.map((branchid) =>
                      branchid.roles[0].name === "ROLE_ADMIN" ? (
                        <Select.Option
                          key={branchid.userName}
                          value={branchid.userName}
                        >
                          {branchid.userName}
                        </Select.Option>
                      ) : (
                        <>Null</>
                      )
                    )}
                  </Select>
                </div>

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
                      <Form.Item label="Thiết bị" name="facilityIds">
                        <Select
                          onChange={handleChange}
                          allowClear
                          mode="multiple"
                        >
                          {propsselect}
                        </Select>
                      </Form.Item>
                      <Form.Item label="Người dùng" name="userName">
                        <Select onChange={handleChange_user} allowClear>
                          <Select.Option value={Cookies.get("userName")}>
                            {Cookies.get("userName")}
                          </Select.Option>
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
              <Table
                columns={columns}
                bordered
                dataSource={branchList}
                rowKey="id"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Branches
