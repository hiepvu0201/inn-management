import React, { useState, useEffect } from "react";
import "./style.css";
import { Images } from "./../../../config/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faSitemap,
  faPlu,
  faPlus,
  faTrash,
  faEdit,
  faBed,
} from "@fortawesome/free-solid-svg-icons";
import { faSave, faMoneyBillAlt,faLightbulb } from "@fortawesome/free-regular-svg-icons";
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
  InputNumber,
  Row,
  Col,
} from "antd";
import arr_data_brand from "./../../../mock/data_brand";
import branchesApi from "./../../../api/branchesApi";
const { Option } = Select;

function Homepage_admin(props) {
  
const columns = [
  {
    title: "Tầng",
    dataIndex: "numberOfStages",
    key: "numberOfStages",
  },
  {
    title: "Phòng",
    dataIndex: "room",
    key: "room",
  },
  {
    title: "Số người",
    dataIndex: "numberOfPeople",
    key: "address",
  },
  {
    title: "Đơn giá",
    key: "money",
    dataIndex: "money",
  },
  {
    title: "Số ĐT",
    key: "phoneNo",
    dataIndex: "phoneNo",
  },
  {
    title: "Điện-Nước",
    key: "electricwater",
    dataIndex: "electricwater",
  },
  {
    title: "Thiết bị",
    key: "facility",
    dataIndex: "facility",
  },
 
];

const data = [
  
];
  return (
    <div>
      <div
        style={{ width: "100%", height: "100vmax", backgroundColor: "#efefef" }}
      >
        <div style={{ height: "120px" }}>
          <Menu_AdminPage />
        </div>
        <div style={{ width: "100%", height: "atuo", display: "flex" }}>
          <div className="title">
            <FontAwesomeIcon icon={faTachometerAlt} color="#007c7e" size="1x" />
            QUẢN TRỊ CHUNG
          </div>
          <div
            style={{
              width: "60%",
              height: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                Width: "80%",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "red",
              }}
            >
              <div className="title-1">Phòng đang trống</div>
              <div className="title-1" style={{ paddingRight: "10px" }}>
                (0)
              </div>
            </div>
            <div
              style={{
                Width: "80%",
                height: "auto",
                display: "flex",
                backgroundColor: "#007c7e",
                justifyContent: "center",
              }}
            >
              <div className="title-2" style={{ paddingLeft: "10px" }}>
                Phòng đã được thuê
              </div>
              <div className="title-2" style={{ paddingRight: "10px" }}>
                (0)
              </div>
            </div>
            <div
              style={{
                Width: "80%",
                height: "auto",
                display: "flex",
                backgroundColor: "#cccccc",
                justifyContent: "center",
              }}
            >
              <div className="title-3" style={{ paddingLeft: "10px" }}>
                Phòng đặt cọc
              </div>
              <div
                className="title-3"
                style={{ paddingLeft: "10px", paddingRight: "10px" }}
              >
                (0)
              </div>
            </div>
            <div
              style={{
                Width: "80%",
                height: "auto",
                display: "flex",
                backgroundColor: "#f4d03f",
                justifyContent: "center",
              }}
            >
              <div className="title-4" style={{ paddingLeft: "10px" }}>
                Phòng đặt cọc
              </div>
              <div className="title-4" style={{ paddingLeft: "10px" }}>
                (0)
              </div>
            </div>
          </div>
          <div style={{ paddingLeft: "10px", width: "10%", float: "right" }}>
            <Select placeholder="Chọn chi nhánh" style={{ width: "280px" }} />
          </div>
        </div>
        <div>
          <Row style={{ paddingTop: "20px" }}>
            <Col lg={6} md={24}>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#e9ecf3",
                    width: "80%",
                    height: "auto",
                    textAlign: "left",
                    display: "block",
                    backgroundColor: "white",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "PT Sans, sans-serif",
                      fontSize: "20px",
                    }}
                  >
                    TỔNG THU
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        lineHeight: "31px",
                        backgroundColor: "#32c5d2",
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                        position: "relative",
                      }}
                    >
                      <div style={{ position: "absolute" }}>
                        <FontAwesomeIcon
                          icon={faMoneyBillAlt}
                          color="#abe8ec"
                          size="2x"
                        />
                      </div>
                    </div>
                    <div style={{ paddingLeft: "10px", display: "block" }}>
                      <div
                        style={{
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        VND
                      </div>
                      <div
                        style={{
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        0
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} md={24}>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#e9ecf3",
                    width: "80%",
                    height: "auto",
                    textAlign: "left",
                    display: "block",
                    backgroundColor: "white",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "PT Sans, sans-serif",
                      fontSize: "20px",
                    }}
                  >
                    TỔNG CHI
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        lineHeight: "31px",
                        backgroundColor: "#e7505a",
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                        position: "relative",
                      }}
                    >
                      <div style={{ position: "absolute" }}>
                        <FontAwesomeIcon
                          icon={faMoneyBillAlt}
                          color="#f49494"
                          size="2x"
                        />
                      </div>
                    </div>
                    <div style={{ paddingLeft: "10px", display: "block" }}>
                      <div
                        style={{
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        VND
                      </div>
                      <div
                        style={{
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        0
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} md={24}>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#e9ecf3",
                    width: "80%",
                    height: "auto",
                    textAlign: "left",
                    display: "block",
                    backgroundColor: "white",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "PT Sans, sans-serif",
                      fontSize: "20px",
                    }}
                  >
                    PHÒNG TRỐNG
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        lineHeight: "31px",
                        backgroundColor: "#8e44ad",
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                        position: "relative",
                      }}
                    >
                      <div style={{ position: "absolute" }}>
                        <FontAwesomeIcon icon={faBed} color="white" size="2x" />
                      </div>
                    </div>
                    <div style={{ paddingLeft: "10px", display: "block" }}>
                      <div
                        style={{
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        PHÒNG
                      </div>
                      <div
                        style={{
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        0
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} md={24}>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#e9ecf3",
                    width: "80%",
                    height: "auto",
                    textAlign: "left",
                    display: "block",
                    backgroundColor: "white",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "PT Sans, sans-serif",
                      fontSize: "20px",
                    }}
                  >
                    NỢ/PHẢI TRẢ{" "}
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        lineHeight: "31px",
                        backgroundColor: "#3598dc",
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                        position: "relative",
                      }}
                    >
                      <div style={{ position: "absolute" }}>
                        <FontAwesomeIcon
                          icon={faMoneyBillAlt}
                          color="#7ebbe4"
                          size="2x"
                        />
                      </div>
                    </div>
                    <div style={{ paddingLeft: "10px", display: "block" }}>
                      <div
                        style={{
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        VND
                      </div>
                      <div
                        style={{
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        0
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row style={{ paddingTop: "20px" }}>
            <Col lg={18} md={24}>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "92%",
                    height: "auto",
                    backgroundColor: "white",
                    display: "block",
                  }}
                >
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      width: "100%",
                      height: "auto",
                      paddingLeft: "10px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faLightbulb}
                      size="2x"
                      color="#007c7e"
                    />
                    <div
                      style={{
                        fontSize: "20px",
                        color: "#007c7e",
                        fontFamily: "PT Sans, sans-serif",
                        paddingLeft: "10px",
                      }}
                    >
                      TRẠNG THÁI PHÒNG
                    </div>
                  </div>
                  <div>
                    <Table columns={columns} bordered/>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} md={24}>
              1
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
export default Homepage_admin;
