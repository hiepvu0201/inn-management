import React, { useState, useEffect } from "react";
import { Row, Col,Input,Form } from "antd";
import Detailroom_tag from "./../../../components/detailroom_tag";
import Menu_client from "./../../../components/menu_client";
import Footer_client from "./../../../components/footer_client";
import { useLocation, useParams } from "react-router-dom";
import { Images } from "./../../../config/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Room_tag from "./../../../components/room_tag";
import roomApi from "./../../../api/roomApi";

function Detail_room() {
  //   let location = useLocation();
  let location = useLocation();
  const [roomList, setIsRoomList] = useState([]);
  useEffect(() => {
    const fetchRoomList = async () => {
      try {
        const response = await roomApi.getAll();
        console.log("Fetch room successfully: ", response.data);
        setIsRoomList(response.data);
      } catch (error) {
        console.log("Failed to fetch ROOM list: ", error);
      }
    };
    fetchRoomList();
  }, []);
  return (
    <div style={{ width: "100%", height: "auto", backgroundColor: "#f2f6fa" }}>
      <div style={{ height: "100px" }}>
        <Menu_client />
      </div>
      <div>
        <Row style={{ height: "auto" }}>
          <Col
            lg={18}
            md={24}
            style={{ marginLeft: "220px", paddingTop: "20px" }}
          >
            <div
              style={{
                width: "100%",
                height: "auto",
                backgroundColor: "white",
                borderRadius: "8px",
              }}
            >
              <Row>
                <Col
                  lg={12}
                  md={24}
                  style={{
                    width: "100%",
                    height: "auto",
                    // backgroundColor: "red",
                    display: "flex",
                    justifyContent: "center",
                    paddingLeft: "120px",
                  }}
                >
                  <img
                    src={Images.DETAIL_ROOM}
                    style={{ height: "auto", width: "100%" }}
                  />
                </Col>
                <Col
                  lg={12}
                  md={24}
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "90%",
                      height: "auto",
                      display: "block",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        fontFamily: "PT Sans, sans-serif",
                        fontSize: "20px",
                        fontWeight: "bold",
                        textAlign: "left",
                        paddingTop: "20px",
                      }}
                    >
                      Đặc điểm nổi bật
                    </div>
                    <div
                      style={{
                        width: "100%",
                        paddingTop: "20px",

                        textAlign: "left",
                        display: "flex",
                      }}
                    >
                      <div style={{ width: "6%" }}>
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#63d417"
                          size="1x"
                        />
                      </div>
                      <div
                        style={{
                          width: "18%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        Số phòng:
                      </div>
                      <div
                        style={{
                          width: "76%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        {location.state.roomNo}
                        {/* A2-301 */}
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        textAlign: "left",
                        display: "flex",
                        paddingTop: "20px",
                      }}
                    >
                      <div style={{ width: "6%" }}>
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#63d417"
                          size="1x"
                        />
                      </div>
                      <div
                        style={{
                          width: "10%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        Vị trí:
                      </div>
                      <div
                        style={{
                          width: "84%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        {location.state.position}
                        {/* A2-301 */}
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        textAlign: "left",
                        display: "flex",
                        paddingTop: "20px",
                      }}
                    >
                      <div style={{ width: "6%" }}>
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#63d417"
                          size="1x"
                        />
                      </div>
                      <div
                        style={{
                          width: "15%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        Thiết bị:
                      </div>
                      <div
                        style={{
                          width: "79%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        {location.state.facilities}
                        {/* A2-301 */}
                      </div>
                    </div>
                    {/* <div
                      style={{
                        width: "100%",
                        height: "auto",
                        textAlign: "left",
                        paddingTop: "20px",
                      }}
                    >
                      <button
                        style={{
                          height: "auto",
                          width: "60%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                          borderRadius: "8px",
                        }}
                      >
                        ĐẶT LỊCH HẸN
                      </button>
                    </div> */}
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row style={{ height: "auto" }}>
          <Col
            lg={18}
            md={24}
            style={{ marginLeft: "220px", paddingTop: "20px" }}
          >
            <div
              style={{
                width: "100%",
                height: "auto",
                backgroundColor: "white",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  fontFamily: "PT Sans, sans-serif",
                  fontSize: "20px",
                  textAlign: "left",
                  fontWeight: "bold",
                  paddingLeft: "10px",
                  marginBottom: "20px",
                  paddingTop:"10px"
                }}
              >
                LIÊN LẠC VỚI CHỦ TRỌ
              </div>
              <div>
                <Form>
                  <div style={{paddingBottom:"10px"}}>
                    <Form.Item
                      label="Họ và tên"
                      name="name"
                      style={{ paddingLeft: "10px" }}
                    >
                      <Input style={{ width: "95%", paddingRight: "10px" }} />
                    </Form.Item>
                    <Form.Item
                      label="Di động"
                      name="phoneNo"
                      style={{ paddingLeft: "10px" }}
                    >
                      <Input style={{ width: "95%", paddingRight: "10px" }} />
                    </Form.Item>
                    <Form.Item
                      label="Email"
                      name="email"
                      style={{ paddingLeft: "10px" }}
                    >
                      <Input style={{ width: "95%", paddingRight: "10px" }} />
                    </Form.Item>
                    <Form.Item
                      label="Ghi chú"
                      name="note"
                      style={{ paddingLeft: "10px" }}
                    >
                      <Input style={{ width: "95%", paddingRight: "10px" }} />
                    </Form.Item>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div style={{ paddingTop: "50px" }}>
        <Footer_client />
      </div>
    </div>
  );
}

export default Detail_room;
