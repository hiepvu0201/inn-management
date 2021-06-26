import React, { useState, useEffect } from "react";
import Menu_client from "./../../components/menu_client";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import mapApi from "./../../api/mapApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./../../components/footer";
import { Select, Row, Col } from "antd";
import roomApi from "./../../api/roomApi";
const { Option } = Select;
function Map() {
  const [state, setstate] = useState([]);
  const [state1, setstate1] = useState([]);
  const [viewport, setViewport] = useState({
    width: 870,
    height: 500,
    longitude: 106.68044,
    latitude: 10.76743,
    zoom: 8,
  });
  const [showPopup, togglePopup] = useState(false);
  const [arr_maker, setarr_maker] = useState([]);
  const [roomList, setIsRoomList] = useState([]);
  
  // };
  const fetchRoomList = async () => {
    try {
      var arr=[]
      var arr_new_location=[]
      const response = await roomApi.getAll();
      console.log("Fetch room successfully: ", response.data);
      setIsRoomList(response.data);
      setstate1(response.data);
      response.data.map((us)=>(
        arr.push(us.location)
      ))
      arr.map((us)=>(
        fetchGetMap(us)
      ))
      arr_new_location.push(arr)
      console.log("<<",arr)
    } catch (error) {
      console.log("Failed to fetch ROOM list: ", error);
    }
  };
  useEffect(() => {
    fetchRoomList();
  }, []);
  const fetchGetMap = async (props) => {
    try {
      const response = await mapApi.get(props);
      console.log("Fetch room successfully: ", response.data);
    } catch (error) {
      console.log("Failed to map list: ", error);
    }
    const onChange = (value) => {
      console.log(`selected ${value}`);
      //  setValue(e.target.value);
      if (value === "Tất cả") {
        setIsRoomList(state1);
      } else {
        const SearchRoombyBranch_ = async () => {
          try {
            const response = await roomApi.searchRoombyBranch(value);
            console.log("Fetch room by branch successfully: ", response.data);
            setIsRoomList(response.data);
          } catch (error) {
            console.log("Failed to fetch room by ranch: ", error);
          }
        };
        SearchRoombyBranch_();
      }
    };
    return (
      <div>
        <div>
          <Menu_client />
        </div>
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#f2f6fa",
            paddingBottom: "30px",
          }}
        >
          <div style={{ width: "80%", height: "auto", display: "block" }}>
            <div
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                paddingTop: "20px",
                fontFamily: "PT Sans, sans-serif",
                paddingBottom: "10px",
              }}
            >
              HỆ THỐNG CÁC PHÒNG TRỌ CHÍNH THỨC
            </div>
            <div style={{ width: "100%", height: "auto", display: "flex" }}>
              <div
                style={{
                  width: "70%",
                  height: "auto",
                  backgroundColor: "#3c3c3c",
                  fontFamily: "NunitoSanRegular",
                  fontSize: "14px",
                  color: "white",
                  display: "flex",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    height: "auto",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  TÌM KIẾM PHÒNG THEO CHI NHÁNH
                </div>
                <div
                  style={{
                    width: "50%",
                    height: "auto",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <Select style={{ width: 320 }} allowClear onChange={onChange}>
                    <Option value="Tất cả">Tất cả</Option>
                    <Option value="Quận 1">Quận 1</Option>
                    <Option value="Quận 2">Quận 2</Option>
                    <Option value="Quận 3">Quận 3</Option>
                    <Option value="Quận 4">Quận 4</Option>
                    <Option value="Quận 5">Quận 5</Option>
                    <Option value="Quận 6">Quận 6</Option>
                    <Option value="Quận 7">Quận 7</Option>
                    <Option value="Quận 8">Quận 8</Option>
                    <Option value="Quận 9">Quận 9</Option>
                    <Option value="Quận 10">Quận 10</Option>
                    <Option value="Quận 11">Quận 11</Option>
                    <Option value="Quận 12">Quận 12</Option>
                    <Option value="Quận Bình Tân">Quận Bình Tân</Option>
                    <Option value="Quận Bình Thạnh">Quận Bình Thạnh</Option>
                    <Option value="Quận Phú Nhuận">Quận Phú Nhuận</Option>
                    <Option value="Quận Tân Bình">Quận Tân Bình</Option>
                    <Option value="Quận Tân Phú">Quận Tân Phú</Option>
                    <Option value="Quận Thủ Đức">Quận Thủ Đức</Option>
                    <Option value="Quận Gò Vấp">Quận Gò Vấp</Option>
                  </Select>
                </div>
              </div>
              <div
                style={{
                  width: "30%",
                  height: "auto",
                  backgroundColor: "#3c3c3c",
                  fontFamily: "NunitoSanRegular",
                  fontSize: "18px",
                  color: "white",
                  display: "flex",
                  paddingTop: "30px",
                  paddingLeft: "7vw",
                  // paddingBottom: "20px",
                  marginLeft: "10px",
                }}
              >
                KHU PHÒNG TRỌ
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "26%",
                  height: "500px",
                  backgroundColor: "#f1f1f1",
                  display: "block",
                  overflow: "auto",
                }}
              >
                <div
                  style={{
                    width: "90%",
                    height: "auto",
                    fontFamily: "NunitoSanExtraBold",
                    fontSize: "16px",
                    fontWeight: "bold",
                    paddingTop: "10px",
                    display: "flex",
                    justifyContent: "center",
                    borderBottom: "2px solid",
                    paddingBottom: "15px",
                    marginLeft: "15px",
                  }}
                >
                  CÁC PHÒNG TRỌ
                  <div style={{ paddingLeft: "10px" }}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </div>
                </div>
                <Row
                  style={{
                    paddingTop: "20px",
                    width: "94%",
                    height: "auto",
                    paddingLeft: "20px",
                  }}
                >
                  {roomList.map((room) => (
                    <Col
                      lg={24}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        textAlign: "left",
                        fontSize: "11px",
                        fontFamily: "NunitoSanExtraBold",
                        borderBottom: "dotted 1px",
                        paddingBottom: "25px",
                        paddingTop: "15px",
                      }}
                    >
                      <div style={{ width: "50%", height: "auto" }}>
                        <div>
                          <img
                            style={{
                              width: "100%",
                              height: "20vh",
                              borderRadius: "8px",
                            }}
                            src={`${room.images}`}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          width: "40%",
                          height: "auto",
                          paddingLeft: "10px",
                          paddingTop: "10px",
                        }}
                      >
                        <div>{room.roomNo}</div>
                        <div>{room.position}</div>
                        <div>{room.branch.location}</div>
                        <div>{room.facilities.map}</div>
                        <div>{room.roomType}</div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
              <div style={{ width: "74%", height: "auto" }}>
                {/* <ReactMapGL
                mapboxApiAccessToken="pk.eyJ1Ijoibmd1eWVuZHV5MDMxMSIsImEiOiJja3Fhejl1ZWswNWhrMnBqa25hemZweGdzIn0.d2l2wNQQyRROJlD4AHcbAQ"
                {...viewport}
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
              >
                {state.map((vp) => (
                  <Marker
                    latitude={vp.latitude}
                    longitude={vp.longitude}
                    offsetLeft={-20}
                    offsetTop={-10}
                  >
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      color="#ff9326"
                      size="3x"
                    />
                  </Marker>
                ))}
              </ReactMapGL> */}
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "40vh" }}>
          <Footer />
        </div>
      </div>
    );
  };
}
export default Map;
