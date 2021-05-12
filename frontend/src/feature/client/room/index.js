import React from "react";
import "./style.css";
import Menu_client from "./../../../components/menu_client";
import { Input, Button, Card, Popover, Form, Row, Col, Select } from "antd";
import Room_tag from "./../../../components/room_tag";
import { Images } from "./../../../config/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
function Room_client() {
  return (
    <div>
      <div style={{ height: "100px" }}>
        <Menu_client />
      </div>
      <div
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "#d9d9d9",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "80%", height: "auto", display: "block" }}>
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            <Input.Search placeholder="Tìm kiếm địa điểm khu vực" />
            <div style={{ paddingTop: "10px" }}>
              <Button type="primary">Tìm kiếm nâng cao</Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Row style={{ paddingTop: "10px" }}>
          <Col lg={4}>
            <div
              style={{
                width: "100%",
                height: "100%",
                // backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "80%",
                  height: "auto",
                  //   backgroundColor: "yellow",
                }}
              >
                <Card
                  title="Theo chi nhánh"
                  //   extra={<a href="#">More</a>}
                  style={{ width: 250 }}
                >
                  <p>Chi nhánh 1</p>
                  <p>Chi nhánh 2</p>
                  <p>Chi nhánh 3</p>
                </Card>
                <div style={{ paddingTop: "10px" }}>
                  <Card
                    title="Theo giá"
                    //   extra={<a href="#">More</a>}
                    style={{ width: 250 }}
                  >
                    <p>Dưới 1 triệu</p>
                    <p>Từ 1 triệu tới 3 triệu</p>
                    <p>Trên 3 triệu</p>
                  </Card>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={20}>
            <div
              style={{
                width: "100%",
                height: "auto",
                // backgroundColor: "blue",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "90%",
                  height: "auto",
                  //   backgroundColor: "#007C7E",
                }}
              >
                <Row>
                  <Col lg={8}>
                    <Room_tag
                      image={Images.IMAGE_ROOM}
                      position=" Số 9-10, dãy b5 ngõ 7 Kim Mã Thượng"
                      price="2000000VND"
                    />
                  </Col>
                  <Col lg={8}>
                    <Room_tag
                      image={Images.IMAGE_ROOM}
                      position=" Số 9-10, dãy b5 ngõ 7 Kim Mã Thượng"
                      price="2000000VND"
                    />
                  </Col>
                  <Col lg={8}>
                    <Room_tag
                      image={Images.IMAGE_ROOM}
                      position=" Số 9-10, dãy b5 ngõ 7 Kim Mã Thượng"
                      price="2000000VND"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={8}>
                    <Room_tag
                      image={Images.IMAGE_ROOM}
                      position=" Số 9-10, dãy b5 ngõ 7 Kim Mã Thượng"
                      price="2000000VND"
                    />
                  </Col>
                  <Col lg={8}>
                    <Room_tag
                      image={Images.IMAGE_ROOM}
                      position=" Số 9-10, dãy b5 ngõ 7 Kim Mã Thượng"
                      price="2000000VND"
                    />
                  </Col>
                  <Col lg={8}>
                    <Room_tag
                      image={Images.IMAGE_ROOM}
                      position=" Số 9-10, dãy b5 ngõ 7 Kim Mã Thượng"
                      price="2000000VND"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={8}>
                    <Room_tag
                      image={Images.IMAGE_ROOM}
                      position=" Số 9-10, dãy b5 ngõ 7 Kim Mã Thượng"
                      price="2000000VND"
                    />
                  </Col>
                  <Col lg={8}>
                    <Room_tag
                      image={Images.IMAGE_ROOM}
                      position=" Số 9-10, dãy b5 ngõ 7 Kim Mã Thượng"
                      price="2000000VND"
                    />
                  </Col>
                  <Col lg={8}>
                    <Room_tag
                      image={Images.IMAGE_ROOM}
                      position=" Số 9-10, dãy b5 ngõ 7 Kim Mã Thượng"
                      price="2000000VND"
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <div
          style={{
            width: "100%",
            height: "auto",
            backgroundColor: "#d9d9d9",
            marginTop: "20px",
          }}
        >
          <Row style={{ paddingTop: "10px" }}>
            <Col span={8}>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "80%", height: "auto" }}>
                  <div style={{ display: "block" }}>
                    <div
                      style={{
                        fontFamily: "PT Sans, sans-serif",
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "black",
                        paddingTop: "5px",
                      }}
                    >
                      Về chúng tôi
                    </div>
                    <div
                      style={{
                        fontFamily: "PT Sans, sans-serif",
                        fontSize: "18px",
                        color: "grey",
                        paddingTop: "5px",
                      }}
                    >
                      Điều khoản sử dụng
                    </div>
                    <div
                      style={{
                        fontFamily: "PT Sans, sans-serif",
                        fontSize: "18px",
                        color: "grey",
                        paddingTop: "5px",
                      }}
                    >
                      Chính sách bảo mật
                    </div>
                    <div
                      style={{
                        fontFamily: "PT Sans, sans-serif",
                        fontSize: "18px",
                        color: "grey",
                        paddingTop: "5px",
                      }}
                    >
                      Quy chế hoạt động
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "80%", height: "auto" }}>
                  <div style={{ display: "block" }}>
                    <div
                      style={{
                        fontFamily: "PT Sans, sans-serif",
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "black",
                        paddingTop: "5px",
                      }}
                    >
                      Chăm sóc khách hàng
                    </div>
                    <div
                      style={{
                        fontFamily: "PT Sans, sans-serif",
                        fontSize: "18px",
                        color: "grey",
                        paddingTop: "5px",
                      }}
                    >
                      Hướng dẫn đăng ký{" "}
                    </div>
                    <div
                      style={{
                        fontFamily: "PT Sans, sans-serif",
                        fontSize: "18px",
                        color: "grey",
                        paddingTop: "5px",
                      }}
                    >
                      Chính sách bảo mật
                    </div>
                    <div
                      style={{
                        fontFamily: "PT Sans, sans-serif",
                        fontSize: "18px",
                        color: "grey",
                        paddingTop: "5px",
                      }}
                    >
                      Câu hỏi thường gặp{" "}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "80%", height: "auto" }}>
                  <div style={{ display: "block" }}>
                    <div
                      style={{
                        fontFamily: "PT Sans, sans-serif",
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "black",
                        paddingTop: "5px",
                      }}
                    >
                      Mạng xã hội{" "}
                    </div>
                    <div
                      style={{
                        fontFamily: "PT Sans, sans-serif",
                        fontSize: "18px",
                        color: "grey",
                        paddingTop: "5px",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <FontAwesomeIcon
                          icon={faFacebookSquare}
                          size="2x"
                          color="#2a388f"
                        />
                        <div style={{ paddingLeft: "10px" }}>
                          <FontAwesomeIcon
                            icon={faTwitterSquare}
                            size="2x"
                            color="#3696d9"
                          />
                        </div>
                        <div style={{ paddingLeft: "10px" }}>
                          <FontAwesomeIcon
                            icon={faTwitterSquare}
                            size="2x"
                            color="#cf3427"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Room_client;
