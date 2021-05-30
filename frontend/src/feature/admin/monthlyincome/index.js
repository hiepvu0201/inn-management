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
import branchesApi from "./../../../api/branchesApi";

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
} from "antd";
import monthlyincomesApi from "../../../api/monthlyincomeApi";
const { Option } = Select;

function Monthlyincome(props) {
  const [branchList, setBranchList] = useState([]);

  //loading update
  const [isloadingUpdate, setIsloadingUpdate] = useState(false);
  //api
  const [rowEdit, setRowEdit] = useState({});
  const [monthlyincomeList, setMonthlyincomeList] = useState([]);
  const fetchMonthlyincomeList = async () => {
    try {
      const response = await monthlyincomesApi.getAll();
      console.log("Fetch load monthly income successfully: ", response.data);
      setMonthlyincomeList(response.data);
      setstate(response.data);
      setIsloadingUpdate(false);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch monthly income list: ", error);
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
  useEffect(() => {
    fetchBranchList();
    fetchMonthlyincomeList();
  }, []);
  //api - update
  const fetchUpdateMonthlyincome = async (values) => {
    setIsloadingUpdate(true);
    try {
      const response = await monthlyincomesApi.updatemonthlyincome(values);
      console.log("Fetch update monthlyincome successfully", response);
      console.log("edit data", values);
      fetchMonthlyincomeList();
    } catch (error) {
      console.log("Failed to update monthlyincome", error);
      setIsloadingUpdate(false);
    }
  };
  //delete
  const fetchDeleteMonthlyincome = async (record) => {
    try {
      const response = await monthlyincomesApi.deletemonthlyincome(record.id);
      console.log("Delete monthlyincome successfully", response);
      setMonthlyincomeList(
        monthlyincomeList.filter((item) => item.id !== record.id)
      );
      fetchMonthlyincomeList();
    } catch (error) {
      console.log("Failed to delete rule list", error);
    }
  };
  //form
  const onFinish = (values) => {
    const fetchCreateMonthlyincomes = async () => {
      try {
        // values["id"]=values.id;
        const response = await monthlyincomesApi.createmonthlyincome(values);
        console.log("Fetch create monthlyincomes succesSfully: ", response);
        setMonthlyincomeList([...monthlyincomeList, response.data]);
        console.log("In response", response);
        setIsModalVisible(false);
        console.log("tabledata: ", monthlyincomeList);
      } catch (error) {
        console.log("failed to fetch rules list: ", error);
      }
    };
    fetchCreateMonthlyincomes();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //form-edit
  const onFinish_edit = (values) => {
    console.log("Success", values);
    const data_update = { id: rowEdit.id, data: values };
    fetchUpdateMonthlyincome(data_update);
  };
  //select
  function handleChange(value) {
    console.log(`selected ${value}`);
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
      title: "Tên",
      dataIndex: "itemName",
      key: "itemName",
    },
    {
      title: "Số tiền thu",
      dataIndex: "earn",
      key: "earn",
    },
    {
      title: "Chi nhánh",
      dataIndex: "branch",
      key: "branch",
      render: (branch) => <div>{branch.location}</div>,
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <div style={{ display: "flex" }}>
          <Popconfirm
            title="BẠN CÓ CHẮC MUỐN XÓA DỮ LIỆU KHÔNG?"
            onConfirm={() => fetchDeleteMonthlyincome(record)}
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
    console.log("value edit:", values);
    setRowEdit(values);
  };
  const handleOk_1 = () => {
    setIsModalVisible_1(false);
  };

  const handleCancel_1 = () => {
    setIsModalVisible_1(false);
  };
    const [state, setstate] = useState([]);

   const onSearch_1 = (value) => {
     console.log("<<VALUE", value);
     if (value === "") {
       setMonthlyincomeList(state);
     } else {
       const fetchSearchIncomebyBranch = async () => {
         try {
           const response = await monthlyincomesApi.searchincomebybranch(value);
           console.log(
             "Fetch income by branch name successfully: ",
             response.data
           );
           // setIsstateInput(response.data);
           setMonthlyincomeList(response.data);
         } catch (error) {
           console.log("Failed to fetch list: ", error);
         }
       };
      fetchSearchIncomebyBranch();
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
            <Form.Item label="Tên" name="itemName">
              <Input placeholder={rowEdit.itemName} />
            </Form.Item>
            <Form.Item label="Số tiền thu" name="earn">
              <Input placeholder={rowEdit.earn} />
            </Form.Item>
            <Form.Item label="Chi nhánh" name="branchId">
              <Select>
                {branchList.map((branchid) => (
                  <Select.Option key={branchid.id} value={branchid.id}>
                    {branchid.location}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <div style={{ display: "flex" }}>
              <Button type="primary" htmlType="submit">
                CHỈNH SỬA{" "}
              </Button>
              <div style={{ paddingLeft: "10px" }}>
                <Button type="default" onClick={handleCancel}>
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
              <div className="topic-left-income">
                <FontAwesomeIcon icon={faSitemap} size="2x" color="#007c7e" />
                <div className="content">QUẢN LÝ NGUỒN THU NHÀ TRỌ</div>
              </div>
                <div className="btn-right-income">
                  <div style={{ paddingRight: "10px", width: "60%" }}>
                    <Input.Search
                      placeholder="Tìm kiếm"
                      allowClear
                      onSearch={onSearch_1}
                    />
                  </div>
                  <button className="detailed-btn-income" onClick={showModal}>
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
                      <Form.Item label="Tên" name="itemName">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Số tiền thu" name="earn">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Chi nhánh" name="branchId">
                        <Select>
                          {branchList.map((branchid) => (
                            <Select.Option
                              key={branchid.id}
                              value={branchid.id}
                            >
                              {branchid.location}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <div style={{ display: "flex" }}>
                        <Button type="primary" htmlType="submit">
                          THÊM MỚI
                        </Button>
                        <div style={{ paddingLeft: "10px" }}>
                          <Button type="default" onClick={handleCancel}>
                            HỦY BỎ
                          </Button>
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
              <Table
                columns={columns}
                bordered
                dataSource={monthlyincomeList}
                rowKey="id"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Monthlyincome;
