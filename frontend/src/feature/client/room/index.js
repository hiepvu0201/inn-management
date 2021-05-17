import React,{useState,useEffect} from "react";
import Menu_client from "./../../../components/menu_client";
import { Input, Button, Card, Popover, Form, Row, Col, Select } from "antd";
import Room_tag from "./../../../components/room_tag";
import { Images } from "./../../../config/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import roomApi from "./../../../api/roomApi";
import Footer_client from './../../../components/footer_client'
import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
function Room_client() {
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
        <div>
          <Row>
            <Col
              lg={2}
              style={{
                width: "100%",
                height: "auto",
              }}
            ></Col>
            <Col
              lg={20}
              style={{
                width: "100%",
                height: "auto",
                // backgroundColor: "green",
              }}
            >
              <Row>
                <Col
                  lg={16}
                  style={{
                    width: "100%",
                    height: "auto",
                    // backgroundColor: "red",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "90%",
                      height: "auto",
                      display: "block",
                      //   backgroundColor: "blue",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "flex",
                          justifyContent: "space-between",
                          borderBottom: "1px solid #59d49a",
                        }}
                      >
                        <div
                          style={{
                            width: "80%",
                            height: "auto",
                            color: "#59d49a",
                            fontFamily: "PT Sans, sans-serif",
                            fontSize: "20px",
                            textAlign: "left",
                            fontWeight: "bold",
                          }}
                        >
                          NHÀ TRỌ
                        </div>
                      </div>
                    </div>
                    <div>
                      <Row>
                        {roomList.map((roomId) => (
                          <Col
                            lg={8}
                            md={24}
                            style={{
                              width: "100%",
                              height: "auto",
                              // backgroundColor: "red",
                              paddingLeft: "15px",
                            }}
                          >
                            <Room_tag
                              id={roomId.id}
                              roomNo={roomId.roomNo}
                              position={roomId.position}
                              facilities={roomId.facilities[0].name}
                            />
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </div>
                </Col>
                <Col
                  lg={8}
                  style={{
                    width: "100%",
                    height: "auto",
                    // backgroundColor: "yellow",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "80%",
                      height: "auto",
                      //   backgroundColor: "purple",
                      display: "block",
                    }}
                  >
                    <Card
                      title="Tìm kiếm theo chi nhánh"
                      style={{
                        width: "300",
                        textAlign: "left",
                        backgroundColor: "white",
                        height: "auto",
                      }}
                    >
                      <p>Chi nhánh 1</p>
                      <p>Chi nhánh 1</p>
                      <p>Chi nhánh 1</p>
                      <p>Chi nhánh 1</p>
                    </Card>
                    <div style={{ paddingTop: "10px" }}>
                      <Card
                        title="Tìm kiếm theo giá phòng"
                        style={{
                          width: "300",
                          textAlign: "left",
                          backgroundColor: "white",
                          height: "auto",
                        }}
                      >
                        <p>Chi nhánh 1</p>
                        <p>Chi nhánh 1</p>
                        <p>Chi nhánh 1</p>
                        <p>Chi nhánh 1</p>
                      </Card>
                    </div>
                    {/* <div>
                      <img
                        src={Images.IMG_ROOM}
                        style={{
                          height: "auto",
                          width: "100%",
                          paddingTop: "20px",
                        }}
                      />
                    </div> */}
                    <div>
                      <img
                        src={Images.IMG_ROOM_1}
                        style={{
                          height: "auto",
                          width: "100%",
                          paddingTop: "20px",
                        }}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col
              lg={2}
              style={{
                width: "100%",
                height: "auto",
              }}
            ></Col>
          </Row>
        </div>
        <div style={{paddingTop:"20px"}}>
            <Footer_client/>
        </div>
      </div>
    </div>
  );
}

export default Room_client;
