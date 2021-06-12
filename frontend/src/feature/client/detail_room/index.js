import React, { useState, useEffect } from "react";
import { Row, Col, Input, Form,Carousel } from "antd";
import Menu_client from "./../../../components/menu_client";
import Footer_client from "./../../../components/footer_client";
import { useLocation, useParams } from "react-router-dom";
import { Images } from "./../../../config/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Room_tag from "./../../../components/room_tag";
import roomApi from "./../../../api/roomApi";
import branchesApi from "./../../../api/branchesApi";
import Rest from "./../../../components/restproductbybranch";
function Detail_room() {
  //   let location = useLocation();
  let location = useLocation();
  const [roomList, setIsRoomList] = useState([]);
  const [branchesList, setIsBranchesList] = useState([]);
  let arrpush={}
  const fetchRoomList = async () => {
    try {
      const response = await roomApi.getAll();
      console.log("Fetch room successfully: ", response.data);
      setIsRoomList(response.data);
      getAllRoomsByBranches(response.data)
    } catch (error) {
      console.log("Failed to fetch ROOM list: ", error);
    }
  };
  const [statedetailed, setstatedetailed] = useState([]);
   const getAllRoomsByBranches = (room) => {
     console.log("branchid",location.state.branchId)
     
    const newarr = room.filter(
      (rs) =>
        rs.branchId === location.state.branchId &&
        rs.roomNo !== location.state.roomNo
    );
    let arr=[];
   
     setstatedetailed(newarr);
     console.log("abcd", newarr);
    ;
   };

  useEffect(() => {
    fetchRoomList();
  }, []);
  return (
    <div style={{ width: "100%", height: "auto", backgroundColor: "#f2f6fa" }}>
      <div style={{ height: "100px" }}>
        <Menu_client />
      </div>
      <div>
        <div
          style={{
            width: "80%",
            height: "auto",
            fontSize: "30px",
            fontWeight: "bold",
            textAlign: "left",
            paddingLeft: "220px",
          }}
        >
          Chi tiết phòng {location.state.branches}
        </div>
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
                paddingBottom:"15px",
                paddingTop:"15px"
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
                    src={location.state.images}
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
                          width: "40%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        Chi nhánh:
                      </div>
                      <div
                        style={{
                          width: "52%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        {location.state.branches}
                      </div>
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
                          width: "40%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        Số phòng:
                      </div>
                      <div
                        style={{
                          width: "52%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        {location.state.roomNo}
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
                          width: "40%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        Vị trí:
                      </div>
                      <div
                        style={{
                          width: "52%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        {location.state.position}
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
                          width: "40%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        Thiết bị:
                      </div>
                      <div
                        style={{
                          width: "52%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        {location.state.facilities}
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
                          width: "40%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        Loại phòng:
                      </div>
                      <div
                        style={{
                          width: "52%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        {location.state.roomType}
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
                          width: "40%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        Giá phòng theo giờ đầu:
                      </div>
                      <div
                        style={{
                          width: "52%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        {location.state.price1}đ
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
                          width: "40%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        Giá phòng theo giờ thứ hai:
                      </div>
                      <div
                        style={{
                          width: "52%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        {location.state.price2}đ
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
                          width: "40%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        Giá phòng theo ngày:
                      </div>
                      <div
                        style={{
                          width: "52%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        {location.state.price3}đ
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
                          width: "40%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        Giá phòng theo tuần:
                      </div>
                      <div
                        style={{
                          width: "52%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        {location.state.price4}đ
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
                          width: "40%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        Giá phòng theo tháng:
                      </div>
                      <div
                        style={{
                          width: "52%",
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        {location.state.price5}đ
                      </div>
                    </div>
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
                  paddingTop: "10px",
                }}
              >
                LIÊN LẠC VỚI CHỦ TRỌ
              </div>
              <div>
                <Form>
                  <div style={{ paddingBottom: "10px" }}>
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
                      <Input style={{ width: "94%", paddingRight: "10px" }} />
                    </Form.Item>
                    <Form.Item
                      label="Email"
                      name="email"
                      style={{ paddingLeft: "10px" }}
                    >
                      <Input style={{ width: "92%", paddingRight: "10px" }} />
                    </Form.Item>
                    <Form.Item
                      label="Ghi chú"
                      name="note"
                      style={{ paddingLeft: "10px" }}
                    >
                      <Input style={{ width: "94%", paddingRight: "10px" }} />
                    </Form.Item>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>

        <div
          style={{
            width: "100%",
            height: "auto",
            fontSize: "30px",
            textAlign: "left",
            paddingLeft: "220px",
            paddingTop: "20px",
          }}
        >
          Tin đăng tương tự
        </div>
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "80%", height: "auto" }}>
            <Row
              style={{
                paddingLeft: "10px",
                display: "flex",
                width: "100%",
                paddingTop: "10px",
              }}
            >
              {statedetailed.map((detailid) => (
                <Col
                  lg={8}
                  md={24}
                  key={detailid.id}
                  span={6}
                  style={{ paddingTop: "25px" }}
                >
                  {" "}
                  <Rest
                    id={detailid.id}
                    branches={detailid.branch.location}
                    facilities={detailid.facilities.map((us) => us.name) + " "}
                    roomNo={detailid.roomNo}
                    position={detailid.position}
                    roomType={detailid.roomType}
                    images={detailid.images}
                    price1={detailid.priceByFirstHour}
                    price2={detailid.priceByNextHour}
                    price3={detailid.priceByDay}
                    price4={detailid.priceByWeek}
                    price5={detailid.priceByMonth}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "50px" }}>
        <Footer_client />
      </div>
    </div>
  );
}

export default Detail_room;
