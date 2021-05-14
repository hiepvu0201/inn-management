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
import reportedissueApi from "../../../api/reportedissuesApi";
const { Option } = Select;

function Users(props) {
  //get foreign key of table role
  // const getRolenamebyid=(roleid)={
  //   const roleObj=role
  // }
  //select

  //spin
  const [isloadingUpdate, setIsloadingUpdate] = useState(false);
  //
  const [rowEdit, setRowEdit] = useState({});
  //api
  //getAll
  const [usersList, setIsusersList] = useState([]);
  const [roleList, setRoleList] = useState([]);
  const [reportList, setreportList] = useState([]);
  const [idSelected, setidSelected] = useState([]);
  const [idReport, setidReport] = useState([]);
  const [idSelected_1, setidSelected_1] = useState([]);
  const [dataTable, setdataTable] = useState([]);
  const [idReport_1, setidReport_1] = useState([]);

  const [abcd, setAbcd] = useState([]);
  // const updatetable = async (roleIds) => {
  //   dataTable=[...usersList];
  //   console.log("abc",()=>fetchRolebyId(roleIds));

  // }
  const fetchRolebyId = async (userArr) => {
    try {
      let nameRole;
     
      let newUserList = userArr;
      userArr.map((us) => {
        console.log("us", us.roleIds[0]);
        const roleID = us.roleIds[0];
        const response = new Promise((resolve, reject) => {
          resolve(roleApi.getbyId(roleID));
        });

        response.then((value) => {
          const index = userArr.findIndex((x) => x.id === us.id);
          newUserList[index] = { ...userArr[index], hienlen:Object.values[value.data.name] };
        });
      });
      return newUserList;
      // setAbcd(newUserList);
    } catch (error) {
      console.log("Failed to get by id list: ", error);
    }
  };
  const fetchUsersList = async () => {
    const roleIds = { roleIds: idSelected };
    try {
      const response = await usersApi.getAll();
      console.log("Fetch getAll users successfully: ", response.data);

      const responseABC = new Promise((resolve, reject) => {
        resolve(fetchRolebyId(response.data));
      });
      responseABC.then((value) => {
         setAbcd(value);
      });
      // setIsusersList(response.data);
      // dataTable([...userList, response.data]);
      // console.log("response.data.roleIds[0] >>", response.data[0].roleIds);
      setIsloadingUpdate(false);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch getAll users list: ", error);
    }
  };

  const fetchRoleList = async () => {
    try {
      const response = await roleApi.getAll();
      console.log("Fetch getAll roles successfully: ", response.data);

      setRoleList(response.data);
      setIsloadingUpdate(false);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch getAll roles list: ", error);
    }
  };
  const fetchReportedList = async () => {
    try {
      const response = await reportedissueApi.getAll();
      console.log("Fetch getAll reportedissues successfully: ", response.data);

      setreportList(response.data);
      setIsloadingUpdate(false);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch getAll reportedissues list: ", error);
    }
  };
  const [rolebyid, setRolebyid] = useState([]);

  useEffect(() => {
    fetchUsersList();
    fetchRoleList();
    fetchReportedList();
  }, []);

  //form
  const [table, setTable] = useState([]);
  //create
  const onFinish = (values) => {
    // console.log("Value", values);
    const dataCreate = {
      ...values,
      roleIds: idSelected,
      reportedIssueIds: idReport,
    };
    console.log("dataCreate", dataCreate);
    const fetchCreateUsers = async () => {
      try {
        const response = await usersApi.createusers(dataCreate);
        console.log("Fetch create users succesfully: ", response);
        setIsusersList([...usersList, response.data]);
        console.log("abc", response);
        setIsModalVisible(false);
        // console.log("tabledata: ", branchList);
      } catch (error) {
        console.log("failed to fetch user list: ", error);
      }
    };
    fetchCreateUsers();
  };
  //update

  //delete
  const fetchDeleteReportedissues = async (record) => {
    try {
      const response = await usersApi.deleteusers(record.id);
      console.log("Delete users successfully", response);
      setIsusersList(usersList.filter((item) => item.id !== record.id));
      fetchUsersList();
    } catch (error) {
      console.log("Failed to delete users list", error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //form_edit
  const onFinish_edit = (values) => {
    // console.log("Success", values);
    // fetchUpdateUsers(data_update);
    const dataUpdate = {
      ...values,
      roleIds: idSelected,
      reportedIssueIds: idReport,
    };
    const fetchUpdateUsers = async () => {
      const data_update = { id: rowEdit.id, data: dataUpdate };
      console.log("dataupdate", dataUpdate);
      setIsloadingUpdate(true);
      try {
        const response = await usersApi.updateusers(data_update);
        console.log("Fetch update users successfully", response);
        console.log("edit data", data_update);
        fetchUsersList();
      } catch (error) {
        console.log("Failed to update users", error);
        setIsloadingUpdate(false);
      }
    };
    fetchUpdateUsers();
  };

  //select
  function handleChange(value) {
    console.log(`selected role ${value}`);
    const rolevalue = [value];
    setidSelected(rolevalue);
  }
  function handleChange_1(value) {
    console.log(`selected report ${value}`);
    const reportvalue = [value];
    setidReport(reportvalue);
  }
  function handleChange_2(value) {
    console.log(`selected role1 ${value}`);
    const rolevalue_1 = [value];
    setidSelected_1(rolevalue_1);
  }
  function handleChange_3(value) {
    console.log(`selected report1 ${value}`);
    const reportvalue_1 = [value];
    setidReport_1(reportvalue_1);
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
      title: "hienlen",
      dataIndex: "hienlen",
      key: "hienlen",
    },
    {
      title: "passwordHash",
      dataIndex: "passwordHash",
      key: "passwordHash",
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
            <Form.Item label="Tài khoản" name="username">
              <Input placeholder={rowEdit.username} />
            </Form.Item>
            <Form.Item label="Mật khẩu" name="passwordHash">
              <Input.Password placeholder={rowEdit.passwordHash} />
            </Form.Item>
            <Form.Item label="email" name="email">
              <Input placeholder={rowEdit.email} />
            </Form.Item>
            <Form.Item label="Họ và tên" name="fullName">
              <Input placeholder={rowEdit.fullName} />
            </Form.Item>
            <Form.Item label="Giới tính" name="sex">
              <Radio.Group>
                <Radio value="female">Female</Radio>
                <Radio value="male">Male</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Công việc" name="job">
              <Input placeholder={rowEdit.job} />
            </Form.Item>
            <Form.Item label="Địa chỉ" name="address">
              <Input placeholder={rowEdit.address} />
            </Form.Item>
            <Form.Item label="Số điện thoại" name="phoneNo">
              <Input placeholder={rowEdit.phoneNo} />
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
            <Form.Item label="Báo cáo">
              <Select onChange={handleChange_1}>
                {reportList.map((reportid) => (
                  <Select.Option key={reportid.id} value={reportid.id}>
                    {reportid.id}
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
      <Button onClick={() => console.log(">>newarrClick",abcd)}>hiện lên coi</Button>
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
                    <Form.Item label="Báo cáo">
                      <Select onChange={handleChange_1}>
                        {reportList.map((reportid) => (
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
              <Table columns={columns} bordered dataSource={abcd} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Users;
