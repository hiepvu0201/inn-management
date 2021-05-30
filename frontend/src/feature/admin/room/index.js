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
import branchesApi from "../../../api/branchesApi";
import { CheckOutlined, UploadOutlined } from "@ant-design/icons";
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
  Upload
} from "antd";
import facilitiesApi from "../../../api/facilitiesApi";
import electricityWaterApi from "../../../api/elctricitywaterApi";
import roomsApi from "../../../api/roomApi";
const { Option } = Select;
const { Search } = Input;

function Rooms(props) {
  //api
  //search

  // const onSearch_1=(value)=>{
  //   console.log(value)
  // }
  //getAll
  
  const [roomList, setRoomList] = useState([]);
  const [branchesList, setBranchesList] = useState([]);
  const [facilitiesList, setFacilitiesList] = useState([]);
  const [electricitywatersList, setElectricitywaterList] = useState([]);

  const [idSelected, setidSelected] = useState([]);
  const [isloadingUpdate, setIsloadingUpdate] = useState(false);
  const [rowEdit, setRowEdit] = useState({});
  const [fileList, setfileList] = useState([]);
    const [imgfile, setimgfile] = useState(null);

 const uploadimg = (info) => {
   console.log(">>>>info: ", info);
   console.log(fileList);
 };
 const propsimg = {
   onChange: uploadimg,
 };
 const [stateimg, setstateimg] = useState({
   previewVisible: false,
   previewImage: "",
   fileList: [],
 });
 const handleChangeimg = (fileList) => {
   setstateimg(fileList);
   setimgfile(fileList.file.originFileObj);
   console.log(">>state", stateimg);
   console.log(">>fileList", fileList);
   console.log(">>originFileObj", imgfile);
 };
 const handlePreview = (file) => {
   setstateimg({
     ...stateimg,
     previewImage: file.url || file.thumbUrl,
     previewVisible: true,
   });
 };
  const fetchRoomList = async () => {
    try {
      const response = await roomApi.getAll();
      console.log("Fetch rooms successfully: ", response.data);
      setRoomList(response.data);
      setIsstateInput(response.data);
      setstate(response.data);
      setIsloadingUpdate(false);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch rooms list: ", error);
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
  const fetchFacilitiesList = async () => {
    try {
      const response = await facilitiesApi.getAll();
      console.log("Fetch facilities successfully: ", response.data);
      setFacilitiesList(response.data);
    } catch (error) {
      console.log("Failed to fetch facilities list: ", error);
    }
  };
  const fetchElectricitywaterList = async (userName) => {
    try {
      const response = await electricityWaterApi.getAll(userName);
      console.log("Fetch electricities successfully: ", response.data);
      setElectricitywaterList(response.data);
    } catch (error) {
      console.log("Failed to fetch electricities list: ", error);
    }
  };
  const [stateInput, setIsstateInput] = useState([]);

  useEffect(() => {
    fetchElectricitywaterList();
    fetchFacilitiesList();
    fetchBranchesList();
    fetchRoomList();
    // fetchBranchesList();
    // fetchfacilitiesList();
  }, []);
   const { Option } = Select;
   const propsselect = [];
   {
     facilitiesList.map((facilitiesid) =>
       propsselect.push(
         <Option key={facilitiesid.id} value={facilitiesid.id}>
           {facilitiesid.name}
         </Option>
       )
     );
   }
  //form
  const onFinish = (values) => {
    const dataCreate = {
      ...values,
      // facilityIds: selected_1,
      // electricityWaterIds: selected_2,
    };
    console.log("dataCreate", dataCreate);
     var myJSON = JSON.stringify(dataCreate);
     console.log("<<<Stringify", myJSON);
     const responsedata = {
       room: myJSON,
       images: imgfile,
     };
     console.log("dataCreate", responsedata);

     var form_data = new FormData();

     for (var key in responsedata) {
       form_data.append(key, responsedata[key]);
     }
    
    const fetchCreateRooms = async () => {
      try {
        const response = await roomsApi.createrooms(form_data);
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
      // userIds: idSelected,
      // facilityIds: selected_1,
      // electricityWaterIds: selected_2,
    };
    console.log("dataupdate", dataUpdate);
    var myJSONupdate=JSON.stringify(dataUpdate);
    console.log("<<<Stringify",myJSONupdate)
    const responsedata={
      roomDetail:myJSONupdate,
      images:imgfile
    }
    console.log("dataUpdate", responsedata);
     var form_data = new FormData();
      for (var key in responsedata) {
        form_data.append(key, responsedata[key]);
      }
    const data_update = { id: rowEdit.id, data: form_data };
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
    // const usersvalue = [value];
    // setidSelected(usersvalue);
  }
  const [selected_1, setIdselected_1] = useState([]);
  function handleChange_1(value) {
    console.log(`selected facilities id ${value}`);
    // const facilitiesvalue = [value];
    // setIdselected_1(facilitiesvalue);
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
      title: "Hình",
      dataIndex: "images",
      key: "images",
      width: 200,
      render: (images) => <img style={{ width: "100%" }} src={`${images}`} />,
    },
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
      title: "Chi nhánh",
      dataIndex: "branch",
      key: "branch",
      // render: (users) => <div>{users[0].userName}</div>,
      render: (branch) => <div>{branch.location}</div>,
    },
    {
      title: "Thiết bị",
      dataIndex: "facilities",
      key: "facilities",
      // render: (facilities) => <div>{facilities[0].name}</div>,
      render: (facilities) => (
        <div>{facilities.map((us) => us.name) + " "}</div>
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
  const [state, setstate] = useState([])
  const onSearch_1 = (value) => {
    console.log("<<VALUE", value);
    if(value==="")
    {
      setRoomList(state);
    }
    else{
 const SearchRoombyBranch = async () => {
   try {
     const response = await roomApi.searchRoombyBranch(value);
     console.log("Fetch room by branch successfully: ", response.data);
     // setIsstateInput(response.data);
     setRoomList(response.data);
   } catch (error) {
     console.log("Failed to fetch room by ranch: ", error);
   }
 };
 SearchRoombyBranch();
    };
  }
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

            <Form.Item label="Chi nhánh" name="branchId">
              <Select onChange={handleChange}>
                {branchesList.map((branchesid) => (
                  <Select.Option key={branchesid.id} value={branchesid.id}>
                    {branchesid.location}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Thiết bị" name="facilityIds">
              <Select onChange={handleChange_1} allowClear mode="multiple">
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
                fileList={stateimg.fileList}
              >
                {stateimg?.fileList.length < 1 && (
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
              <div className="topic-left-room">
                <FontAwesomeIcon icon={faSitemap} size="2x" color="#007c7e" />
                <div className="content">QUẢN LÝ PHÒNG TRỌ</div>
              </div>
              <div className="btn-right-rooms">
                <div style={{ paddingRight: "10px", width: "60%" }}>
                  <Search
                    placeholder="Tìm kiếm"
                    allowClear
                    onSearch={onSearch_1}
                  />
                </div>

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

                    <Form.Item label="Chi nhánh" name="branchId">
                      <Select onChange={handleChange}>
                        {branchesList.map((branchesid) => (
                          <Select.Option
                            key={branchesid.id}
                            value={branchesid.id}
                          >
                            {branchesid.location}
                          </Select.Option>
                        ))}
                      </Select>
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
                    <Form.Item>
                      <Upload
                        {...propsimg}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture"
                        defaultFileList={[...fileList]}
                        onPreview={handlePreview}
                        onChange={handleChangeimg}
                        fileList={stateimg.fileList}
                      >
                        {stateimg?.fileList.length < 1 && (
                          <Button onClick={uploadimg} icon={<UploadOutlined />}>
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
