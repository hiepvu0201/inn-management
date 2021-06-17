import React, { useState, useEffect } from "react";
import Reportissues_tag from "../../../components/reportissue_tag";
import Menu_client from "../../../components/menu_client";
import { Row, Col, Button, Modal, Form, Input, Select } from "antd";
import reportedissuesApi from "../../../api/reportedissuesApi";
import Footer_client from "../../../components/footer_client";
import usersApi from "./../../../api/usersApi";
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
function Reportissues_client() {
  const [reportIssuesList, setIsReportIssuesList] = useState([]);
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
  const fetchReportIssueList = async () => {
    try {
      const response = await reportedissuesApi.getAll();
      console.log("Fetch report-isses successfully: ", response.data);
      setIsReportIssuesList(response.data);
    } catch (error) {
      console.log("Failed to fetch report-isues list: ", error);
    }
  };
  useEffect(() => {
    fetchUserList();
    fetchReportIssueList();
  }, []);
  const onFinish = (values) => {
    const create_value = {
      ...values,
    };
    console.log("<<", create_value);
    const fetchCreateReportedissues = async () => {
      try {
        const response = await reportedissuesApi.createReportedissues(
          create_value
        );
        console.log("Fetch create reported-issues succesfully: ", response);
        setIsReportIssuesList([...reportIssuesList, response.data]);
        setIsModalVisible(false);
        // console.log("tabledata: ", branchList);
      } catch (error) {
        console.log("failed to fetch branch list: ", error);
      }
    };
    fetchCreateReportedissues();
  };
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
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "#f2f6fa",
        }}
      >
        <div style={{ height: "100px" }}>
          <Menu_client />
        </div>
        <div style={{ width: "100%", height: "auto", display: "flex" }}>
          <div
            style={{
              fontFamily: "PT Sans, sans-serif",
              fontSize: "30px",
              fontWeight: "bold",
              textAlign: "left",
              width: "60%",
              paddingLeft: "310px",
              paddingTop:"20px"
            }}
          >
            BÁO CÁO ĐỀ MỤC
          </div>
          <div style={{ textAlign: "right", width: "30%" }}>
            <Button
              type="primary"
              style={{
                width: "40%",
                height: "auto",
                fontFamily: "PT Sans, sans-serif",
                fontSize: "25px",
                marginBottom: "10px",
                fontWeight:"bold",
                backgroundColor:"#007c7e",
                color:"white"
              }}
              onClick={showModal}
            >
              Thêm mới
            </Button>
            <Modal
              title={
                <div style={{ display: "flex" }}>
                  <FontAwesomeIcon icon={faPlus} size="1x" color="#007c7e" />{" "}
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
                <Form.Item label="Tiêu đê" name="title">
                  <Input />
                </Form.Item>
                <Form.Item label="Mô tả" name="description">
                  <Input />
                </Form.Item>
                <Form.Item label="Tình trạng" name="status">
                  <Input />
                </Form.Item>
                <Form.Item label="Người báo cáo" name="reporterId">
                  <Select>
                    {usersList.map((reporterid) => (
                      <Select.Option key={reporterid.id} value={reporterid.id}>
                        {reporterid.fullName}
                      </Select.Option>
                    ))}
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
        <Row>
          {reportIssuesList.map((reportissuesid) => (
            <Col
              lg={22}
              md={24}
              style={{
                width: "100%",
                height: "auto",
                // backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                paddingLeft: "240px",
                paddingTop: "20px",
              }}
              key={reportissuesid.id}
            >
              <div style={{ width: "90%", height: "auto" }}>
                <Reportissues_tag
                  title={reportissuesid.title}
                  description={reportissuesid.description}
                  status={reportissuesid.status}
                  createdDate={reportissuesid.createdDate}
                  solvedDate={reportissuesid.solvedDate}
                  reporter={reportissuesid.reporter.userName}
                />
              </div>
            </Col>
          ))}
        </Row>
        <div style={{ paddingTop: "40px" }}>
          <Footer_client />
        </div>
      </div>
    </div>
  );
}

export default Reportissues_client;
