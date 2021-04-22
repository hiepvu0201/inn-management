import React, { useState } from "react";
import "./style.css";
import Menu_AdminPage from "./../../../components/menu_adminpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faPlug,
  faMoneyBill,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faSave, faMoneyBillAlt } from "@fortawesome/free-regular-svg-icons";
import {
  Select,
  Popconfirm,
  message,
  Modal,
  Form,
  Input,
  DatePicker,
  Space,
  Radio,
  Upload,
  Button,
  Table,
  TimePicker,
  InputNumber,
} from "antd";

function Bill_Daily() {
  //radio
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  //datepicker
  function onChange_date(date, dateString) {
    console.log(date, dateString);
  }
  function onChange_date1(date, dateString) {
    console.log(date, dateString);
  }
  //table
  const data = [
    {
      key: "01",
      date: "03/2021",
      hourin: "07:25",
      hourout: "19:00",
      sum: "3.000.000VNĐ",
      paid: "500.000VNĐ",
      debt: "2.500.000VNĐ",
      datemadebill: "23/4/2021",
      datepaidbill: "24/4/2021",
      statuspaid: "Rồi",
      dateleave: "24/4/2021",
      statusleave: "Chưa",
    },
    {
      key: "02",
      date: "03/2021",
      hourin: "07:25",
      hourout: "19:00",
      sum: "3.000.000VNĐ",
      paid: "500.000VNĐ",
      debt: "2.500.000VNĐ",
      datemadebill: "23/4/2021",
      datepaidbill: "24/4/2021",
      statuspaid: "Rồi",
      dateleave: "24/4/2021",
      statusleave: "Chưa",
    },
    {
      key: "03",
      date: "03/2021",
      hourin: "07:25",
      hourout: "19:00",
      sum: "3.000.000VNĐ",
      paid: "500.000VNĐ",
      debt: "2.500.000VNĐ",
      datemadebill: "23/4/2021",
      datepaidbill: "24/4/2021",
      statuspaid: "Rồi",
      dateleave: "24/4/2021",
      statusleave: "Chưa",
    },
  ];
  const columns = [
    {
      title: "Tháng/Năm",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Giờ vào",
      dataIndex: "hourin",
      key: "hourin",
    },
    {
      title: "Giờ ra",
      dataIndex: "hourout",
      key: "hourout",
    },
    {
      title: "Tổng tiền",
      dataIndex: "sum",
      key: "sum",
    },
    {
      title: "Thanh toán",
      dataIndex: "paid",
      key: "paid",
    },
    {
      title: "Nợ",
      dataIndex: "debt",
      key: "debt",
    },

    {
      title: "Ngày tạo hóa đơn",
      dataIndex: "datemadebill",
      key: "datemadebill",
    },
    {
      title: "Ngày thanh toán hóa đơn",
      dataIndex: "datepaidbill",
      key: "datepaidbill",
    },
    {
      title: "Đã thanh toán",
      dataIndex: "statuspaid",
      key: "statuspaid",
    },
    {
      title: "Ngày trả phòng",
      dataIndex: "dateleave",
      key: "dateleave",
    },
    {
      title: "Trả phòng",
      dataIndex: "statusleave",
      key: "statusleave",
    },
  ];
  //modal
  const [isModalVisible_2, setIsModalVisible_2] = useState(false);

  const showModal_2 = () => {
    setIsModalVisible_2(true);
  };
  const handleOk_2 = () => {
    setIsModalVisible_2(false);
  };
  const handleCancel_2 = () => {
    setIsModalVisible_2(false);
  };
  return (
    <div>
      <div className="box-all-bill">
        <div style={{ height: "120px" }}>
          <Menu_AdminPage />
        </div>
        <div className="box-bill">
          <div style={{ display: "block", width: "100%" }}>
            <div className="box-cover-bill">
              <div className="content-left-bill">
                <FontAwesomeIcon icon={faMoneyBill} size="2x" color="#007c7e" />
                <div className="content-detailed-left-bill">
                  DANH SÁCH HÓA ĐƠN
                </div>
              </div>
              <div className="content-right-bill">
                <div style={{ display: "flex" }}>
                  <div style={{ paddingRight: "10px" }}>
                    <DatePicker
                      onChange={onChange_date}
                      style={{ width: "220px" }}
                    />
                  </div>
                  <Select
                    defaultValue="Chi Nhánh"
                    style={{ width: "220px", marginRight: "40px" }}
                  >
                    <Option value="Chi Nhánh 1">Chi Nhánh 1</Option>
                    <Option value="Chi Nhánh 2">Chi Nhánh 2</Option>
                    <Option value="Chi Nhánh 3">Chi Nhánh 3</Option>
                    <Option value="Chi Nhánh 4">Chi Nhánh 4</Option>
                  </Select>
                </div>
              </div>
            </div>
            <div className="box-dategridview-bill">
              <div style={{ width: "90%", heighT: "auto" }}>
                <div
                  style={{
                    display: "flex",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <div
                    className="content-hour-bill"
                    style={{ paddingRight: "20px" }}
                  >
                    Giờ vào - Giờ ra
                  </div>
                  <div>
                    <TimePicker.RangePicker />
                  </div>
                </div>
              </div>
              <div style={{ width: "10%", float: "right", paddingTop: "5px" }}>
                <button className="btn-search-bill" onClick={showModal_2}>
                  Tìm kiếm
                </button>
                <Modal
                  title={
                    <div style={{ display: "flex" }}>
                      <FontAwesomeIcon
                        icon={faSearch}
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
                        Tìm kiếm
                      </div>
                    </div>
                  }
                  onOk={handleOk_2}
                  onCancel={handleCancel_2}
                  visible={isModalVisible_2}
                  okText="TÌM KIẾM"
                  cancelText="HỦY BỎ"
                >
                  <Form>
                    <Form.Item label="Ngày" name="date">
                      <DatePicker
                        onChange={onChange_date1}
                        picker="date"
                        style={{ width: "380px" }}
                      />
                    </Form.Item>
                    <Form.Item label="Giờ vào - Giờ ra" name="hour">
                      <TimePicker.RangePicker style={{ width: "320px" }} />
                    </Form.Item>
                    <Form.Item label="Phòng" name="room">
                      <Select
                        defaultValue="Chọn phòng"
                        style={{ width: "370px", marginRight: "40px" }}
                      >
                        <Option value="Phòng 1">Phòng 1</Option>
                        <Option value="Phòng 2">Phòng 2</Option>
                        <Option value="Phòng 3">Phòng 3</Option>
                        <Option value="Phòng 4">Phòng 4</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item label="Khách thuê" name="customer">
                      <Input placeholder="Nhập tên khách thuê" style={{ width: "350px" }} />
                    </Form.Item>
                  </Form>
                </Modal>
              </div>
            </div>
            <div className="box-dategridview-bill">
              <div style={{ display: "flex", paddingLeft: "10px" }}>
                <div className="content-hour-bill">Trạng thái:</div>
                <div style={{ paddingTop: "5px", paddingLeft: "5px" }}>
                  {" "}
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1}>Đã thanh toán</Radio>
                    <Radio value={2}>Chưa thanh toán</Radio>
                    <Radio value={3}>Tất cả</Radio>
                  </Radio.Group>
                </div>
              </div>
            </div>
            <Table dataSource={data} columns={columns} bordered />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bill_Daily;
