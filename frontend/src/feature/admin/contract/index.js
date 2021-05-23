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
import usersApi from "../../../api/usersApi";
import contractsApi from "../../../api/contractApi";
const { Option } = Select;

function Contract(props) {
  //api
  //getAll
  const [usersList, setUsersList] = useState([]);
  const [contractList, setContractList] = useState([]);

  const [idSelected, setidSelected] = useState([]);
  const [idSelected_1, setidSelected_1] = useState([]);

  const [isloadingUpdate, setIsloadingUpdate] = useState(false);
  const [rowEdit, setRowEdit] = useState({});

  const fetchUserList = async () => {
    try {
      const response = await usersApi.getAll();
      console.log("Fetch users successfully: ", response.data);
      setUsersList(response.data);
    } catch (error) {
      console.log("Failed to fetch users list: ", error);
    }
  };
  const fetchContractList = async () => {
    try {
      const response = await contractsApi.getAll();
      console.log("Fetch contracts successfully: ", response.data);
      // console.log("<<tenant", response.data[1].owner);
      // let arr=response.data[1].owner;
      // console.log(">>",arr);
      // console.log(">>", arr[0].fullName);
      // const prefer=response.data[0].owner.map((owner)=>{
      //   console.log(">>>map",owner.fullName)
      // })
      // console.log(prefer)
      setContractList(response.data);
      setstate(response.data);
      setIsloadingUpdate(false);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch contracts list: ", error);
    }
  };
  useEffect(() => {
    fetchUserList();
    fetchContractList();
  }, []);
  //form
  const onFinish = (values) => {
    const dataCreate = {
      ...values,
      ownerIds: idSelected,
      tenantIds: idSelected_1,
      signDate: values["signDate"].format("YYYY-MM-DD"),
    };
    console.log("dataCreate", dataCreate);

    const fetchCreateContract = async () => {
      try {
        const response = await contractsApi.createcontracts(dataCreate);
        console.log("Fetch create contract succesfully: ", response);
        setContractList([...contractList, response.data]);
        console.log("DATA: ", response);
        setIsModalVisible(false);
      } catch (error) {
        console.log("failed to create contract list: ", error);
      }
    };
    fetchCreateContract();
  };
  const fetchUpdateContract = async (edittv) => {
    //  const data_update = { id: rowEdit.id, data: dataUpdate };
    //  console.log("dataupdate", dataUpdate);
    setIsloadingUpdate(true);
    try {
      const response = await contractsApi.updatecontracts(edittv);
      console.log("Fetch update contract successfully", response);
      console.log("edit data", edittv);
      fetchContractList();
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to update contract", error);
      setIsloadingUpdate(false);
    }
  };
  const onFinish_edit = (values) => {
    // console.log("Success", values);
    // fetchUpdateUsers(data_update);
    const dataUpdate = {
      ...values,
      ownerIds: idSelected,
      tenantIds: idSelected_1,
      signDate: values["signDate"].format("YYYY-MM-DD"),
    };
    console.log("dataupdate", dataUpdate);
    const data_update = { id: rowEdit.id, data: dataUpdate };
    fetchUpdateContract(data_update);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setIsModalVisible(false);
  };
  const fetchDeleteContract = async (record) => {
    try {
      const response = await contractsApi.deletecontracts(record.id);
      console.log("Delete contract successfully", response);
      setContractList(contractList.filter((item) => item.id !== record.id));
    } catch (error) {
      console.log("Failed to delete contract list", error);
    }
  };

  //select
  function handleChange(value) {
    console.log(`selected user ADMIN ${value}`);
    const usersvalue = [value];
    setidSelected(usersvalue);
  }
  function handleChange_1(value) {
    console.log(`selected user CLIENT ${value}`);
    const usersvalue = [value];
    setidSelected_1(usersvalue);
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
      title: "Chi tiết hợp đồng",
      dataIndex: "details",
      key: "details",
    },
    {
      title: "Ngày ký hợp đồng",
      dataIndex: "signDate",
      key: "signDate",
    },
    {
      title: "Số phòng",
      dataIndex: "numberOfRooms",
      key: "numberOfRooms",
    },
    {
      title: "Số lầu",
      dataIndex: "numberOfStage",
      key: "numberOfStage",
    },
    {
      title: "Khuyến mãi",
      dataIndex: "voucher",
      key: "voucher",
    },
    {
      title: "Chủ trọ",
      dataIndex: "owner",
      key: "owner",
      render: (owner) => <div>{owner[0].userName}</div>,
    },
    {
      title: "Khách thuê",
      dataIndex: "tenant",
      key: "tenant",
      render: (tenant) => <div>{tenant[0].userName}</div>,
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <div style={{ display: "flex" }}>
          <Popconfirm
            title="BẠN CÓ CHẮC MUỐN XÓA DỮ LIỆU KHÔNG?"
            onConfirm={() => fetchDeleteContract(record)}
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
  const [tenantName, settenantName] = useState([]);
  const [state, setstate] = useState([]);
  const onSearch_1 = (value) => {
    console.log("<<VALUE", value);
    if (value === "") {
      setContractList(state);
    } else {
      const fetchContractbyTenantname = async () => {
        try {
          const response = await contractsApi.getContractbytenantName(value);
          console.log("Fetch contract by tenant name successfully: ", response.data);
          // setIsstateInput(response.data);
          setContractList(response.data);
        } catch (error) {
          console.log("Failed to fetch list: ", error);
        }
      };
       const fetchContractbyOwnername = async () => {
         try {
           const response = await contractsApi.getContractbyownerName(value);
           console.log(
             "Fetch contract by owner name successfully: ",
             response.data
           );
           // setIsstateInput(response.data);
           setContractList(response.data);
         } catch (error) {
           console.log("Failed to fetch list: ", error);
         }
       };
       fetchContractbyOwnername();
      fetchContractbyTenantname();
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
            <Form.Item label="Chi tiết hợp đồng" name="details">
              <Input placeholder={rowEdit.details} />
            </Form.Item>
            <Form.Item label="Ngày ký" name="signDate">
              <DatePicker placeholder={rowEdit.signDate} />
            </Form.Item>
            <Form.Item label="Số phòng" name="numberOfRooms">
              <Input placeholder={rowEdit.numberOfRooms} />
            </Form.Item>
            <Form.Item label="Số lầu" name="numberOfStage">
              <Input placeholder={rowEdit.numberOfStage} />
            </Form.Item>
            <Form.Item label="Khuyến mãi" name="voucher">
              <Input placeholder={rowEdit.voucher} />
            </Form.Item>
            <Form.Item label="Chủ trọ">
              <Select onChange={handleChange}>
                {usersList.map((owner) => (
                  <Select.Option key={owner.id} value={owner.id}>
                    {owner.fullName}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Người thuê">
              <Select onChange={handleChange_1}>
                {usersList.map((tenantid) => (
                  <Select.Option key={tenantid.id} value={tenantid.id}>
                    {tenantid.fullName}
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
              <div className="topic-left-con">
                <FontAwesomeIcon icon={faSitemap} size="2x" color="#007c7e" />
                <div className="content">QUẢN LÝ HỢP ĐỒNG</div>
              </div>

              <div className="btn-right-con">
                <div style={{ paddingRight: "10px", width: "60%" }}>
                  <Input.Search
                    placeholder="Tìm kiếm"
                    allowClear
                    onSearch={onSearch_1}
                  />
                </div>
                <button className="detailed-btn-con" onClick={showModal}>
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
                    onFinishFailed={handleCancel}
                  >
                    <Form.Item label="Chi tiết hợp đồng" name="details">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Ngày ký" name="signDate">
                      <DatePicker />
                    </Form.Item>
                    <Form.Item label="Số phòng" name="numberOfRooms">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Số lầu" name="numberOfStage">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Khuyến mãi" name="voucher">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Chủ trọ">
                      <Select onChange={handleChange}>
                        {usersList.map((ownerid) => (
                          <Select.Option key={ownerid.id} value={ownerid.id}>
                            {ownerid.fullName}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item label="Người thuê">
                      <Select onChange={handleChange_1}>
                        {usersList.map((tenantid) => (
                          <Select.Option key={tenantid.id} value={tenantid.id}>
                            {tenantid.fullName}
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
              </div>
            </div>

            <div
              style={{
                paddingTop: "30px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              <Table columns={columns} bordered dataSource={contractList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contract;
