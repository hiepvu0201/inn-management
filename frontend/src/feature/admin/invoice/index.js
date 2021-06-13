import React, { useState, useEffect } from "react";
import "./style.css";
import { Images } from "../../../config/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import invoicesApi from "../../../api/invoicesApi";
import {
  faSitemap,
  faPlus,
  faTrash,
  faEdit,
  faDownload,
  faFileCsv,
} from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import Menu_AdminPage from "../../../components/menu_adminpage";
import usersApi from "./../../../api/usersApi";
import {
  Table,
  Popconfirm,
  message,
  Button,
  Modal,
  Form,
  Select,
  DatePicker,
} from "antd";
import {  LocalDateTime } from "@js-joda/core";
const { Option } = Select;

function Invoices() {
  //api
  //getAll
  const [invoicesList, setInvoicesList] = useState([]);

  const [isModalVisible_1, setIsModalVisible_1] = useState(false);
  const [isModalVisible_2, setIsModalVisible_2] = useState(false);
  const [downsingle, setdownsingle] = useState([]);
  const [usersList, setIsusersList] = useState([]);
  const fetchInvoicesList = async () => {
    try {
      const response = await invoicesApi.getAll();
      console.log("Fetch invoices successfully: ", response.data);
      setInvoicesList(response.data);
    } catch (error) {
      console.log("Failed to fetch invoices list: ", error);
    }
  };
  const fetchUsersList = async () => {
    try {
      const response = await usersApi.getAll();
      console.log("Fetch getAll users successfully: ", response.data);
      setIsusersList(response.data);
    } catch (error) {
      console.log("Failed to fetch getAll users list: ", error);
    }
  };
  useEffect(() => {
    fetchInvoicesList();
    fetchUsersList();
  }, []);

  //form
  const onFinish = (values) => {
    const dt = LocalDateTime.now();

    const dataCreate = {
      ...values,
      paymentDate: dt,
    };
    console.log("dataCreate", dataCreate);

    const fetchCreateInvoices = async () => {
      try {
        const response = await invoicesApi.create(dataCreate);
        console.log("Fetch create invoices succesfully: ", response.data);
        // setInvoicesList(response.data);
        fetchInvoicesList();
        setIsModalVisible(false);
      } catch (error) {
        console.log("failed to create invoice list: ", error);
      }
    };
    fetchCreateInvoices();
  };
  // 
  const downloadSingleFiles = async (value) => {
    try {
      const data = {
        id: rowDown.id,
      };
      console.log("<<<id", data);
      const urldown = `http://localhost:8080/api/v1/invoices/${data.id}/download/`;
      window.open(urldown, "_blank");
      // setdownsingle(response.data);
    } catch (error) {
      console.log("Failed to download one file", error.response);
    }
  };
  const downloadManyFiles = async (value) => {
    try {
      const response = await invoicesApi.download_many();
      console.log("Download many file successfully", response);
      const urldown = `http://localhost:8080/api/v1/invoices/download/`;
      window.open(urldown, "_blank");
      // setdownsingle(response.data);
    } catch (error) {
      console.log("Failed to download one file", error.response);
    }
  };
  const fetchDeleteElectricityWater = async (record) => {
    try {
      const response = await invoicesApi.delete(
        record.id
      );
      console.log("Delete invoices successfully", response);
      setInvoicesList(
        invoicesList.filter((item) => item.id !== record.id)
      );
    } catch (error) {
      console.log("Failed to delete invoices list", error);
    }
  };
  //select
  function handleChange(value) {
    console.log(`selected users ${value}`);
  }
  //input_num
  function cancel(e) {
    console.log(e);
    message.error("Click on No");
  }

  const columns = [
    {
      title: "Năm ký hợp đồng",
      dataIndex: "contract",
      key: "contract",
      render: (contract) => <div>{contract.year}</div>,
    },
    {
      title: "Chi nhánh",
      dataIndex: "user",
      key: "user",
      render: (user) => <div>{user.room.branch.location}</div>,
    },
    {
      title: "Phòng",
      dataIndex: "contract",
      key: "contract",
      render: (contract) => <div>{contract.tenant.room.roomNo}</div>,
    },
    {
      title: "Khách trọ",
      dataIndex: "user",
      key: "user",
      render: (user) => <div>{user.userName}</div>,
    },
    {
      title: "Tổng tiền",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Ngày tạo",
      dataIndex: "contract",
      key: "contract",
      render: (contract) => <div>{contract.signDate}</div>,
    },
    {
      title: "Ngày thanh toán",
      dataIndex: "paymentDate",
      key: "paymentDate",
    },
    {
      title: "Ngày nhận phòng",
      dataIndex: "user",
      key: "user",
      render: (user) => <div>{user.checkinDate}</div>,
    },
    {
      title: "Ngày trả phòng",
      dataIndex: "user",
      key: "user",
      render: (user) => <div>{user.checkoutDate}</div>,
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
              showModal_2(record);
            }}
          >
            <Popconfirm
              title="BẠN CÓ CHẮC MUỐN TẢI HÓA ĐƠN NÀY VỀ MÁY KHÔNG?"
              onConfirm={() => downloadSingleFiles(record)}
              onCancel={cancel}
              okText="Có"
              cancelText="Không"
            >
              <FontAwesomeIcon icon={faDownload} color="#ffa500" />
            </Popconfirm>
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

  const showModal_1 = (values) => {
    setIsModalVisible_1(true);
    console.log("values edit:", values);
    setRowEdit(values);
  };
  const showModal_2 = (values) => {
    setIsModalVisible_2(true);
    console.log("values down 1 file:", values);
    // setRowDown(values);
  };
  const handleOk_1 = () => {
    setIsModalVisible_1(false);
  };

  const handleCancel_1 = () => {
    setIsModalVisible_1(false);
  };
  return (
    <div>
    
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
        <div className="rectangleinvoices">
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
                <div className="contentinvoices">QUẢN LÝ HÓA ĐƠN</div>
              </div>
              <div className="topic-right">
                <div className="btn-right">
                  <button className="detailed-btn" onClick={showModal}>
                    THÊM MỚI
                  </button>
                  <button
                    className="detailed-btnCSN"
                    onClick={downloadManyFiles}
                  >
                    <div style={{ paddingRight: "10px" }}>
                      <FontAwesomeIcon size="1x" icon={faFileCsv} />
                    </div>
                    XUẤT CSV NHIỀU
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
                      // onFinishFailed={onFinishFailed}
                    >
                      <Form.Item label="Khách trọ" name="userName">
                        <Select onChange={handleChange}>
                          {usersList.map((ownerid) =>
                            ownerid.roles[0].name === "ROLE_USER" ? (
                              <Select.Option
                                key={ownerid.userName}
                                value={ownerid.userName}
                              >
                                {ownerid.userName}
                              </Select.Option>
                            ) : (
                              <>Null</>
                            )
                          )}
                        </Select>
                      </Form.Item>
                      <Form.Item label="Khách trọ" name="paymentDate">
                        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" disabled />
                      </Form.Item>
                      <div style={{ display: "flex" }}>
                        <Button type="primary" htmlType="submit">
                          THÊM MỚI
                        </Button>
                        <div style={{ paddingLeft: "10px" }}>
                          <Button type="default" onClick={handleCancel}>HỦY BỎ</Button>
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
                paddingBottom: "15px",
              }}
            >
              <Table columns={columns} bordered dataSource={invoicesList} rowKey="id"/>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
}
export default Invoices;
