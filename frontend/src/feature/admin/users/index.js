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
  faMapMarkerAlt,
  faSignOutAlt
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
  Tag,
  notification,
  Upload
} from "antd";
import { CheckOutlined, UploadOutlined } from "@ant-design/icons";
import arr_data_brand from "../../../mock/data_brand";
import usersApi from "../../../api/usersApi";
import roleApi from "../../../api/roleApi";
import reportedissueApi from "../../../api/reportedissuesApi";
import roomApi from "../../../api/roomApi";
const { Option } = Select;

function Users(props) {
  //spin
  const [isloadingUpdate, setIsloadingUpdate] = useState(false);
  //
  const [rowEdit, setRowEdit] = useState({});
  const [rowEditcheck, setRowEditcheck] = useState({});
  const [rowEditcheckout,setRowEditcheckout]=useState({});
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
  const [roomList, setRoomList] = useState([]);
  const [abcd, setAbcd] = useState([]);
  const [isModalCheckin, setIsModalCheckin] = useState(false);
  const [isModalCheckout, setIsModalCheckout] = useState(false);
  const [fileList, setfileList] = useState([]);
  const [checkaddimg, setcheck] = useState(false);
  
  const [imgfile, setimgfile] = useState(null);

  const uploadimg = (info) => {
    console.log(">>>>info: ", info);
    console.log(fileList);
  };
  const propsimg = {
    onChange: uploadimg,
  };
  const [state, setstate] = useState({
    previewVisible: false,
    previewImage: "",
    fileList: [],
  });
    const handleChangeimg = (fileList) => {
      setstate(fileList);
      setimgfile(fileList.file.originFileObj);
      console.log(">>state", state);
      console.log(">>fileList", fileList);
      console.log(">>originFileObj", imgfile);
    };
    const handlePreview = (file) => {
      setstate({
        ...state,
        previewImage: file.url || file.thumbUrl,
        previewVisible: true,
      });
    };
  const showModal_Checkin = (values) => {
    setIsModalCheckin(true);
    //  setIsModalVisible_1(true);
    console.log("values edit:", values);
    setRowEditcheck(values);
  };
const showModal_Checkout = (values) => {
    setIsModalCheckout(true);
    //  setIsModalVisible_1(true);
    console.log("values edit:", values);
    setRowEditcheckout(values);
  };
  const handleOk_Checkin = () => {
    setIsModalCheckin(false);
  };

  const handleCancel_Checkin = () => {
    setIsModalCheckin(false);
  };
  const handleCancel_Checkout = () => {
    setIsModalCheckout(false);
  };
  const fetchUsersList = async () => {
    const roleIds = { roleIds: idSelected };
    try {
      const response = await usersApi.getAll();
      console.log("Fetch getAll users successfully: ", response.data);
      setIsusersList(response.data);
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
      // console.log("<<",response.data.)
      setRoleList(response.data);
      setIsloadingUpdate(false);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch getAll roles list: ", error);
    }
  };
  const fetchRoomList = async () => {
    try {
      const response = await roomApi.getAll();
      console.log("Fetch getAll room successfully: ", response.data);
      setRoomList(response.data);
      setIsloadingUpdate(false);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch getAll rooms list: ", error);
    }
  };

  useEffect(() => {
    fetchUsersList();
    fetchRoleList();
    fetchRoomList();
  }, []);
const { Option } = Select;
const propsselect = [];
{
  roleList.map((rolesid) =>
    propsselect.push(
      <Option key={rolesid.id} value={rolesid.id}>
        {rolesid.name}
      </Option>
    )
  );
}
  //form
  const [table, setTable] = useState([]);
  //create
  const onFinish = (values) => {
    // console.log("Value", values);
    const dataCreate = {
      ...values,
      // roleIds: idSelected,
    };
    console.log("<<<",dataCreate)
    var myJSON=JSON.stringify(dataCreate);
    console.log("<<<Stringify",myJSON)
    const responsedata={
      user:myJSON,
      images:imgfile
    }
    console.log("dataCreate", responsedata);

     var form_data = new FormData();

     for (var key in responsedata) {
       form_data.append(key, responsedata[key]);
     }
    
    const fetchCreateUsers = async () => {
      try {
        const response = await usersApi.createusers(form_data);
        console.log("Fetch create users succesfully: ", response);
        setIsusersList([...usersList, response.data]);
        setimgfile(null);
        console.log("abc", response);
        setIsModalVisible(false);
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
    const dataUpdate = {
      ...values,
      userName:rowEdit.userName
    };
    console.log("<<<",dataUpdate)
    var myJSONupdate=JSON.stringify(dataUpdate);
    console.log("<<<Stringify",myJSONupdate)
    const responsedata={
      userDetail:myJSONupdate,
      images:imgfile
    }
    console.log("dataUpdate", responsedata);
     var form_data = new FormData();
      for (var key in responsedata) {
        form_data.append(key, responsedata[key]);
      }
    const fetchUpdateUsers = async () => {
      const data_update = { id: rowEdit.id, data: form_data };
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
  //form_checkin
  const onFinish_checkin = (values) => {
    const datacheckin = {
      ...values,
      userName: rowEditcheck.userName,
    };
    const fetchCheckin = async () => {
      console.log("dataCheckin", datacheckin);
      setIsloadingUpdate(true);
      try {
        const response = await usersApi.checkin(datacheckin);
        console.log("Fetch checkin users successfully", response);
        setIsModalCheckin(false);
        fetchUsersList();
        message.success("Checkin successfully")
      } catch (error) {
        console.log("Failed to checkin users", error);
        setIsloadingUpdate(false);
      }
    };
    fetchCheckin();
  };
  //form_checkout
    const onFinish_checkout = (values) => {
      const datacheckout = {
        ...values,
        userName:rowEditcheckout.userName
      };
      const fetchCheckout = async () => {
        console.log("dataCheckin", datacheckout);
        setIsloadingUpdate(true);
        try {
          const response = await usersApi.checkout(datacheckout);
          console.log("Fetch checkout users successfully", response);
          setIsModalCheckout(false);
          fetchUsersList();
          message.success("Checkout successfully");
        } catch (error) {
          console.log("Failed to checkout users", error);
          setIsloadingUpdate(false);
        }
      };
      fetchCheckout();
    };
  //select
  function handleChange(value) {
    console.log(`selected role ${value}`);
    // const rolevalue = [value];
    // setidSelected(rolevalue);
  }
  function handleChange_2(value) {
    console.log(`selected role1 ${value}`);
    // const rolevalue_1 = [value];
    // setidSelected_1(rolevalue_1);
  }
  function handleChange_3(value) {
    console.log(`selected report1 ${value}`);
    // const reportvalue_1 = [value];
    // setidReport_1(reportvalue_1);
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
      dataIndex: "userName",
      key: "userName",
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
      title:"Hình ảnh",
      dataIndex:"images",
      key:"images",
      width:200,
      render:(images)=>(
        <img style={{ width: "100%" }} src={`${images}`} />
      ),
    },
    {
      title: "Quyền",
      dataIndex: "roles",
      key: "roles",
      render: (roles) => <div>{roles.map((us)=>us.name) + " "}</div>,
            // render: (facilities) => <div>{facilities.map((us) => us.name)+ " "}</div>,

    },
    {
      title: "Phòng",
      dataIndex: "room",
      key: "room",
      render: (room) => (
        <>
          {room === null ? (
            <Tag color="#5a7197">NULL</Tag>
          ) : (
            <div>{room.roomNo}</div>
          )}
        </>
      ),
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <div style={{ display: "flex", paddingLeft: "10px" }}>
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
          <div
            style={{
              paddingLeft: "5px",
              paddingBottom: "3px",
              lineHeight: "5px",
            }}
            onClick={() => {
              showModal_Checkin(record);
            }}
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} color="#15aabf" />
          </div>
          <div
            style={{
              paddingLeft: "5px",
              paddingBottom: "3px",
              lineHeight: "5px",
            }}
             onClick={() => {
              showModal_Checkout(record);
            }}
          >
            <FontAwesomeIcon
              icon={faSignOutAlt}
              color="#9cbc5e"
            />
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
            <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" color="#007c7e" />{" "}
            <div
              style={{
                fontFamily: "PT Sans, sans-serif",
                fontSize: "20px",
                color: "#007c7e",
                paddingLeft: "10px",
                fontWeight: "bold",
              }}
            >
              Checkin
            </div>
          </div>
        }
        onOk={handleOk_1}
        onCancel={handleCancel_1}
        visible={isModalCheckin}
        okText="LƯU LẠI"
        cancelText="HỦY BỎ"
        footer={null}
      >
        <Spin spinning={isloadingUpdate} size="large">
          <Form
            initialValues={{ remember: true }}
            onFinish={onFinish_checkin}
            onFinishFailed={handleCancel_Checkin}
          >
            <Form.Item
              label="Khách trọ"
              name="userName"
              value={rowEditcheck.userName}
            >
              <Input
                placeholder={rowEditcheck.userName}
                value={rowEditcheck.userName}
              />
            </Form.Item>
            <Form.Item label="Khách trọ" name="userName" value="userName">
              <Input placeholder={rowEditcheck.userName} disabled />
            </Form.Item>
            <Form.Item label="Phòng" name="roomNo">
              <Select>
                {roomList.map((roomid) => (
                  <Select.Option key={roomid.roomNo} value={roomid.roomNo}>
                    {roomid.roomNo}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <div style={{ display: "flex" }}>
              <Button type="primary" htmlType="submit">
                CẬP NHẬT{" "}
              </Button>
              <div style={{ paddingLeft: "10px" }}>
                <Button type="default" onClick={handleCancel_Checkin}>
                  HỦY BỎ
                </Button>
              </div>
            </div>
          </Form>
        </Spin>
      </Modal>

      <Modal
        title={
          <div style={{ display: "flex" }}>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" color="#007c7e" />{" "}
            <div
              style={{
                fontFamily: "PT Sans, sans-serif",
                fontSize: "20px",
                color: "#007c7e",
                paddingLeft: "10px",
                fontWeight: "bold",
              }}
            >
              Checkout
            </div>
          </div>
        }
        onOk={handleOk_1}
        onCancel={handleCancel_1}
        visible={isModalCheckout}
        okText="LƯU LẠI"
        cancelText="HỦY BỎ"
        footer={null}
      >
        <Spin spinning={isloadingUpdate} size="large">
          <Form
            initialValues={{ remember: true }}
            onFinish={onFinish_checkout}
            onFinishFailed={handleCancel_Checkin}
          >
            <Form.Item label="Khách trọ" name="userName" value="userName">
              <Input placeholder={rowEditcheckout.userName} disabled />
            </Form.Item>

            <div style={{ display: "flex" }}>
              <Button type="primary" htmlType="submit">
                CẬP NHẬT{" "}
              </Button>
              <div style={{ paddingLeft: "10px" }}>
                <Button type="default" onClick={handleCancel_Checkout}>
                  HỦY BỎ
                </Button>
              </div>
            </div>
          </Form>
        </Spin>
      </Modal>

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
            <Form.Item label="Tài khoản" name="userName" value="userName">
              <Input placeholder={rowEdit.userName} disabled />
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
            <Form.Item label="Quyền" name="roleIds">
              <Select onChange={handleChange} allowClear mode="multiple">
                {propsselect}
              </Select>
            </Form.Item>
            <Form.Item>
              <Upload
                {...propsimg}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                defaultFileList={[...fileList]}
                onPreview={handlePreview}
                onChange={handleChangeimg}
                fileList={state.fileList}
              >
                {state?.fileList.length < 1 && (
                  <Button onClick={uploadimg} icon={<UploadOutlined />}>
                    Upload
                  </Button>
                )}
              </Upload>
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
              <div className="topic-left-user">
                <FontAwesomeIcon icon={faSitemap} size="2x" color="#007c7e" />
                <div className="content">QUẢN LÝ KHÁCH TRỌ</div>
              </div>
              <div className="topic-right-user">
                <div className="btn-right-user">
                  <button className="detailed-btn-user" onClick={showModal}>
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
                      <Form.Item label="Tài khoản" name="userName">
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
                      <Form.Item label="Quyền" name="roleIds">
                        <Select
                          onChange={handleChange}
                          allowClear
                          mode="multiple"
                        >
                          {propsselect}
                        </Select>
                      </Form.Item>
                      <Form.Item>
                        <Upload
                          {...propsimg}
                          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                          listType="picture"
                          defaultFileList={[...fileList]}
                          onPreview={handlePreview}
                          onChange={handleChangeimg}
                          fileList={state.fileList}
                        >
                          {state?.fileList.length < 1 && (
                            <Button
                              onClick={uploadimg}
                              icon={<UploadOutlined />}
                            >
                              Upload
                            </Button>
                          )}
                        </Upload>
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
              <Table columns={columns} bordered dataSource={usersList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Users;
