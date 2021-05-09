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
  Spin,
  Radio,
  DatePicker,
} from "antd";
import arr_data_brand from "../../../mock/data_brand";
import usersApi from "../../../api/usersApi";
import roleApi from "../../../api/roleApi";
import reportedissueApi from '../../../api/reportedissuesApi';
const { Option } = Select;

function Users(props) {
  //get foreign key of table role
  // const getRolenamebyid=(roleid)={
  //   const roleObj=role
  // }
  //select
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  //spin
  const [isloadingUpdate, setIsloadingUpdate] = useState(false);
  //
  const [rowEdit, setRowEdit] = useState({});
  //api
  //getAll
  const [usersList, setIsusersList] = useState([]);
  const [roleList, setRoleList] = useState([])
  const [reportList, setreportList] = useState([]);
  const [idSelected, setidSelected] = useState([]);
  const [idReport, setidReport] = useState([]);
  const fetchUsersList = async () => {
    try {
      const response = await usersApi.getAll();
      console.log("Fetch getAll users successfully: ", response.data);
      var y=response.data
      console.log("roleid",usersList.map(x=>x.roleIds));
      setIsusersList(response.data);
      setIsloadingUpdate(false);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch getAll users list: ", error);
    }
  };
  
  const fetchRoleList = async()=>{
      try {
        const response = await roleApi.getAll();
        console.log("Fetch getAll roles successfully: ", response.data);
     
        setRoleList(response.data);
        setIsloadingUpdate(false);
        setIsModalVisible_1(false);
      } catch (error) {
        console.log("Failed to fetch getAll roles list: ", error);
      }
  }
 const fetchReportedList = async()=>{
      try {
        const response = await reportedissueApi.getAll();
        console.log("Fetch getAll reportedissues successfully: ", response.data);
       
        setreportList(response.data);
        setIsloadingUpdate(false);
        setIsModalVisible_1(false);
      } catch (error) {
        console.log("Failed to fetch getAll reportedissues list: ", error);
      }
  }


  useEffect(() => {
    fetchUsersList();
    fetchRoleList();
    fetchReportedList();
  }, []);
  //form
  const [table, setTable] = useState([]);
  //create
  const onFinish = (values) => {
    console.log("Value", values);
    const dataCreate = { ...values, roleIds: idSelected, reportedIssueIds :idSelected};
    console.log("dataCreate", dataCreate);
    const fetchCreateUsers = async () => {
      try {
        const response = await usersApi.createusers(dataCreate);
        console.log("Fetch create users succesfully: ", response);
        setIsusersList([...usersList,response.data])
        console.log("abc",response);
        setIsModalVisible(false);
        // console.log("tabledata: ", branchList);
      } catch (error) {
        console.log("failed to fetch user list: ", error);
      }
    };
    fetchCreateUsers();
  };
  //update
  const fetchUpdateReportedissues = async (values) => {
    setIsloadingUpdate(true);
    try {
      const response = await ReportedissuesApi.updateReportedissues(values);
      console.log("Fetch update reported-issues successfully", response);
      console.log("edit data", values);
      fetchReportedissuesList();
    } catch (error) {
      console.log("Failed to update rules", error);
      setIsloadingUpdate(false);
    }
  };
  //delete
  const fetchDeleteReportedissues = async (record) => {
    try {
      const response = await ReportedissuesApi.deleteReportedissues(record.id);
      console.log("Delete reported-issues successfully", response);
      setIsreportedList(reportedList.filter((item) => item.id !== record.id));
      fetchReportedissuesList();
    } catch (error) {
      console.log("Failed to delete reported-issues list", error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //form_edit
  const onFinish_edit = (values) => {
    console.log("Success", values);
    const data_update = { id: rowEdit.id, data: values };
    fetchUpdateReportedissues(data_update);
  };
 
  //select
  function handleChange(value) {
    console.log(`selected ${value}`);
    const rolevalue = [value];
    setidSelected(rolevalue)
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
      title: "Tài khoản",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Họ và tên",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNo",
      key: "phoneNo",
    },
    {
      title: "Giới tính",
      dataIndex: "sex",
      key: "sex",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Công việc",
      dataIndex: "job",
      key: "job",
    },
    {
      title:"Phân quyền người dùng",
      dataIndex:"roleIds",
      key:"roleIds",
    },
    // {
    //   title: "Ngày vào",
    //   dataIndex: "checkinDate",
    //   key: "checkinDate",
    // },
    // {
    //   title: "Ngày ra",
    //   dataIndex: "checkoutDate",
    //   key: "checkoutDate",
    // },
    // {
    //   title: "Tiền cọc",
    //   dataIndex: "downPayment",
    //   key: "downPayment",
    // },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <div style={{ display: "flex" }}>
          <Popconfirm
            title="BẠN CÓ CHẮC MUỐN XÓA DỮ LIỆU KHÔNG?"
            onConfirm={() => fetchDeleteReportedissues(record)}
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
            <Form.Item label="Tiêu đề" name="title">
              <Input placeholder={rowEdit.title} />
            </Form.Item>
            <Form.Item label="Mô tả" name="description">
              <Input placeholder={rowEdit.description} />
            </Form.Item>
            <Form.Item label="Tình trạng" name="status">
              <Input placeholder={rowEdit.status} />
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
                <div className="content">QUẢN LÝ KHÁCH TRỌ</div>
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
                    <Form.Item label="Tài khoản" name="username">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Mật khẩu" name="passwordHash">
                      <Input.Password />
                    </Form.Item>
                    <Form.Item label="email" name="email">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Họ và tên" name="fullName">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Giới tính" name="sex">
                      <Radio.Group>
                        <Radio value="female">Female</Radio>
                        <Radio value="male">Male</Radio>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Công việc" name="job">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Địa chỉ" name="address">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Số điện thoại" name="phoneNo">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Quyền">
                      <Select onChange={handleChange}>
                    
                        {roleList.map((roleid) => (
                          <Select.Option key={roleid.id} value={roleid.id}>
                            {roleid.id}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item label="Báo cáo" name="reportedIssueIds">
                      <Select>
                    
                        {
                          
                          reportList.map((reportid) => (
                          <Select.Option key={reportid.id} value={reportid.id}>
                            {reportid.id}
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
              <Table columns={columns} bordered dataSource={usersList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Users;
