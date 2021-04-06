import React from "react";
import "./style.css";
import { Row, Col, Button } from "antd";
import { Images } from "./../../config/image";
import Menu from "../../components/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faHourglassEnd,
  faPuzzlePiece,
  faUserAlt,
  faUserTimes,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import {
  faMoneyBillAlt,
  faHandshake,
  faHospital,
} from "@fortawesome/free-regular-svg-icons";
import Component1 from "./../../components/component_ngangxanh";
import Component2 from "./../../components/component_docxanh";
import Component3 from "./../../components/component_nganghong";
import Component4 from "./../../components/component_ngang";
import Component5 from './../../components/component_ngangtranghong'
function Home() {
  return (
    <div>
      <div style={{ height: "100px" }}>
        <Menu />
      </div>
      <Row>
        <Col
          span={13}
          //  style={{ backgroundColor: "blue" }}
        >
          <div style={{ display: "flex", paddingTop: "150px" }}>
            <div style={{ position: "relative", left: "90px" }}>
              <img src={Images.DESKTOP} style={{ width: "320px" }} />
            </div>
            <div
              style={{ position: "absolute", bottom: "10px", left: "250px" }}
            >
              {" "}
              <img
                src={Images.MONITOR}
                style={{ width: "480px", height: "350px" }}
              />
            </div>
            <div
              style={{ position: "absolute", left: "640px", bottom: "10px" }}
            >
              <img src={Images.TABLET} style={{ width: "150px" }} />
            </div>
            <div
              style={{ position: "absolute", left: "615px", bottom: "15px" }}
            >
              <img src={Images.PHONE} style={{ width: "75px" }} />
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div style={{ display: "block", paddingTop: "10px" }}>
            <div
              style={{
                fontSize: "30px",
                color: "#007c7e",
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: "bold",
              }}
            >
              KHUNHATRO - CHUOICANHO
            </div>
            <div
              style={{
                fontSize: "30px",
                color: "#007c7e",
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: "bold",
              }}
            >
              PHẦN MỀM QUẢN LÝ
            </div>
            <div
              style={{
                fontSize: "30px",
                color: "#007c7e",
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: "bold",
              }}
            >
              NHÀ TRỌ CĂN HỘ DỊCH VỤ
            </div>
            <div style={{ paddingTop: "10px" }}>
              <img src={Images.NO1} />
            </div>
            <div
              style={{
                fontFamily: "'Open Sans', sans-serif",
                color: "#007c7e",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Thiết kế đơn giản, dễ dàng sử dụng và tiết kiệm tối đa chi phí
            </div>
            <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
              <img src={Images.ICON} />
            </div>
            <div className="btnfree">
              <button
                className="button-free"
                // type="primary"
                //     style={{width:"45%",height:"80%",borderRadius:"20px", fontFamily:"EB Garamond, serif",color:"white",
                //     backgroundColor:"#00808b",
                //     fontSize:"15px"}}
              >
                DÙNG THỬ MIỄN PHÍ <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </Col>
      </Row>
      <div
        style={{
          width: "100%",
          height: "620px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "block" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="topic">
                <div className="circle-topic"></div>
                <div style={{ position: "relative" }}>
                  Bạn đang kinh doanh Nhà trọ, Căn hộ dịch vụ?
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{ fontFamily: " PT Sans, sans-serif", fontSize: "15px" }}
              >
                Cho thuê nhà trọ, căn hộ là loại hình kinh doanh khá hấp dẫn vì
                có tiềm năng lớn, nhu cầu cao, doanh thu ổn định và an toàn. Tuy
                nhiên, lĩnh vực kinh doanh này cũng có khá nhiều khó khăn khiến
                không ít chủ trọ, chủ căn hộ phải đối mặt với nhiều rủi ro về
                tài chính cũng như hiệu quả quản lý.
              </div>
            </div>
            <div>
              <Row style={{ paddingTop: "15px", paddingLeft: "40px" }}>
                <Col lg={8} md={24}>
                  <Component1
                    icon={
                      <FontAwesomeIcon
                        icon={faHospital}
                        size="3x"
                        color="#007c7e"
                      />
                    }
                    topic="Thời gian"
                    content="Bạn tốn nhiều thời gian cho việc giám sát, quản lý cơ sở, khách thuê, chi phí."
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component1
                    icon={
                      <FontAwesomeIcon
                        icon={faHospital}
                        size="3x"
                        color="#007c7e"
                      />
                    }
                    topic="Thời gian"
                    content="Bạn tốn nhiều thời gian cho việc giám sát, quản lý cơ sở, khách thuê, chi phí."
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component1
                    icon={
                      <FontAwesomeIcon
                        icon={faHospital}
                        size="3x"
                        color="#007c7e"
                      />
                    }
                    topic="Thời gian"
                    content="Bạn tốn nhiều thời gian cho việc giám sát, quản lý cơ sở, khách thuê, chi phí."
                  />
                </Col>
              </Row>
              <Row style={{ paddingTop: "15px", paddingLeft: "40px" }}>
                <Col lg={8} md={24}>
                  <Component1
                    icon={
                      <FontAwesomeIcon
                        icon={faHospital}
                        size="3x"
                        color="#007c7e"
                      />
                    }
                    topic="Thời gian"
                    content="Bạn tốn nhiều thời gian cho việc giám sát, quản lý cơ sở, khách thuê, chi phí."
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component1
                    icon={
                      <FontAwesomeIcon
                        icon={faHospital}
                        size="3x"
                        color="#007c7e"
                      />
                    }
                    topic="Thời gian"
                    content="Bạn tốn nhiều thời gian cho việc giám sát, quản lý cơ sở, khách thuê, chi phí."
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component1
                    icon={
                      <FontAwesomeIcon
                        icon={faHospital}
                        size="3x"
                        color="#007c7e"
                      />
                    }
                    topic="Thời gian"
                    content="Bạn tốn nhiều thời gian cho việc giám sát, quản lý cơ sở, khách thuê, chi phí."
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "430px",
          backgroundColor: "#efefef",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "auto",
            // display: "flex",
            // justifyContent: "center",
          }}
        >
          <div style={{ display: "block" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "15px",
              }}
            >
              <div className="topic">
                <div className="circle-topic"></div>
                <div style={{ position: "relative" }}>
                  88% chủ trọ, căn hộ rơi vào tình trạng
                </div>
              </div>
            </div>
            <div
              style={{
                fontFamily: " PT Sans, sans-serif",
                fontSize: "15px",
              }}
            >
              Công việc quản lý nhà trọ, căn hộ chiếm tỷ lệ không hề nhỏ trong
              hiệu quả của các chuỗi nhà trọ, căn hộ. Nhưng để quản lý hiệu quả
              không phải chuyện đơn giản.
            </div>
            <Row style={{ paddingLeft: "40px", paddingTop: "20px" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Col lg={6} md={24}>
                  <Component2
                    icon={
                      <FontAwesomeIcon
                        icon={faHospital}
                        size="3x"
                        color="#007c7e"
                      />
                    }
                    topic="Cơ sở vật chất"
                    content="Với quy mô các tòa nhà, số phòng lớn bạn cần quá nhiều thời gian công sức để quản lý lưu trữ cũng như tìm kiếm thông tin dữ liệu."
                  />
                </Col>
                <Col lg={6} md={24}>
                  <Component2
                    icon={
                      <FontAwesomeIcon
                        icon={faHospital}
                        size="3x"
                        color="#007c7e"
                      />
                    }
                    topic="Cơ sở vật chất"
                    content="Với quy mô các tòa nhà, số phòng lớn bạn cần quá nhiều thời gian công sức để quản lý lưu trữ cũng như tìm kiếm thông tin dữ liệu."
                  />
                </Col>
                <Col lg={6} md={24}>
                  <Component2
                    icon={
                      <FontAwesomeIcon
                        icon={faHospital}
                        size="3x"
                        color="#007c7e"
                      />
                    }
                    topic="Cơ sở vật chất"
                    content="Với quy mô các tòa nhà, số phòng lớn bạn cần quá nhiều thời gian công sức để quản lý lưu trữ cũng như tìm kiếm thông tin dữ liệu."
                  />
                </Col>
                <Col lg={6} md={24}>
                  <Component2
                    icon={
                      <FontAwesomeIcon
                        icon={faHospital}
                        size="3x"
                        color="#007c7e"
                      />
                    }
                    topic="Cơ sở vật chất"
                    content="Với quy mô các tòa nhà, số phòng lớn bạn cần quá nhiều thời gian công sức để quản lý lưu trữ cũng như tìm kiếm thông tin dữ liệu."
                  />
                </Col>
              </div>
            </Row>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "380px",
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "auto",
          }}
        >
          <div style={{ display: "block" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="topic">
                <div className="circle-topic"></div>
                <div style={{ position: "relative", bottom: "10px" }}>
                  Phần mềm Quản lý Nhà Trọ - TỐT NHẤT HIỆN NAY
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  fontFamily: " PT Sans, sans-serif",
                  fontSize: "15px",
                  width: "80%",
                }}
              >
                Giải quyết 90% lo lắng của chủ trọ trong việc quản lý và vận
                hành nhà trọ với chi phí tiết kiệm tối đa. Cắt giảm 50% thời
                gian tính toán thu chi với giao diện đơn giản nhất. Đội ngũ tư
                vấn khách hàng luôn sẵn sàng để hỗ trợ tận tình 24/7, đồng hành
                cùng việc quản lý nhà trọ của bạn.
              </div>
            </div>
            <Row style={{ paddingLeft: "70px", paddingTop: "20px" }}>
              <Col lg={6} md={24}>
                <Component3
                  images={Images.USERS}
                  number="4356 +"
                  content="Chủ trọ sử dụng"
                />
              </Col>
              <Col lg={6} md={24}>
                <Component3
                  images={Images.USERS}
                  number="4356 +"
                  content="Chủ trọ sử dụng"
                />
              </Col>
              <Col lg={6} md={24}>
                <Component3
                  images={Images.USERS}
                  number="4356 +"
                  content="Chủ trọ sử dụng"
                />
              </Col>
              <Col lg={6} md={24}>
                <Component3
                  images={Images.USERS}
                  number="4356 +"
                  content="Chủ trọ sử dụng"
                />
              </Col>
            </Row>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                paddingTop: "30px",
              }}
            >
              <strong style={{ fontSize: "25px" }}>KHUTRO</strong>
              <div style={{ paddingLeft: "5px", fontSize: "25px" }}>
                giải pháp
              </div>
              <strong style={{ paddingLeft: "5px", fontSize: "25px" }}>
                Phần Mềm Quản Lý Nhà Trọ Số 1 HIỆN NAY
              </strong>
              <div style={{ fontSize: "25px" }}>, đăng ký dùng thử ngay …</div>
            </div>
            <div style={{ paddingTop: "20px" }}>
              <button className="btn-signup-2">DÙNG THỬ MIỄN PHÍ</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            width: "100%",
            height: "430px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
            backgroundColor: "#efefef",
          }}
        >
          <div
            style={{
              width: "80%",
              height: "auto",
            }}
          >
            <div style={{ display: "block" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="topic">
                  <div className="circle-topic"></div>
                  <div style={{ position: "relative", bottom: "10px" }}>
                    Tại sao chủ trọ thích KHUTRO?
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    fontFamily: " PT Sans, sans-serif",
                    fontSize: "15px",
                    width: "80%",
                  }}
                >
                  Giao diện đơn giản, thông minh, giúp quản lý nhà trọ mọi lúc
                  mọi nơi với dữ liệu được bảo mật an toàn tuyệt đối, kiểm soát
                  doanh số theo thời gian thực và tiết kiệm tối đa chi phí vận
                  hành.
                </div>
              </div>
              <Row style={{ paddingLeft: "30px", paddingTop: "20px" }}>
                <Col lg={6} md={24} style={{ paddingLeft: "10px" }}>
                  <Component4
                    img={Images.BAR_CHART}
                    topic="Quản lý mọi lúc, mọi nơi"
                    content="Chủ trọ có thể quản lý nhà trọ mọi lúc mọi nơi, dữ liệu được quản lý tập trung, bảo mật, và an toàn tuyệt đối."
                  />
                </Col>
                <Col lg={6} md={24} style={{ paddingLeft: "10px" }}>
                  <Component4
                    img={Images.BAR_CHART}
                    topic="Quản lý mọi lúc, mọi nơi"
                    content="Chủ trọ có thể quản lý nhà trọ mọi lúc mọi nơi, dữ liệu được quản lý tập trung, bảo mật, và an toàn tuyệt đối."
                  />
                </Col>
                <Col lg={6} md={24} style={{ paddingLeft: "10px" }}>
                  <Component4
                    img={Images.BAR_CHART}
                    topic="Quản lý mọi lúc, mọi nơi"
                    content="Chủ trọ có thể quản lý nhà trọ mọi lúc mọi nơi, dữ liệu được quản lý tập trung, bảo mật, và an toàn tuyệt đối."
                  />
                </Col>
                <Col lg={6} md={24} style={{ paddingLeft: "10px" }}>
                  <Component4
                    img={Images.BAR_CHART}
                    topic="Quản lý mọi lúc, mọi nơi"
                    content="Chủ trọ có thể quản lý nhà trọ mọi lúc mọi nơi, dữ liệu được quản lý tập trung, bảo mật, và an toàn tuyệt đối."
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            width: "100%",
            height: "680px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          <div
            style={{
              width: "80%",
              height: "auto",
            }}
          >
            <div style={{ display: "block" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="topic">
                  <div className="circle-topic"></div>
                  <div style={{ position: "relative", bottom: "10px" }}>
                    KHUTRO được thiết kế tối ưu{" "}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    fontFamily: " PT Sans, sans-serif",
                    fontSize: "15px",
                    width: "80%",
                  }}
                >
                  Cùng với các chuyên gia IT dày kinh nghiệm, chúng tôi nghiên
                  cứu thiết kế phần mềm quản lý nhà trọ tối ưu phù hợp với nhiều
                  mô hình quản lý khác nhau, với nhiều tính năng nổi bật.
                </div>
              </div>
              <Row style={{paddingTop:"10px"}}>
                <Col lg={8} md={24}>
                    <Component5
                      icon={<FontAwesomeIcon icon={faUsers} size="2x" color="#eb2f5b" />}
                      topic1="Quản lý khách thuê"
                      content1="Chức năng quản lý thông tin khách thuê, gồm các thông tin cá nhân,thông tin liên hệ."
                    />
                </Col>
                <Col lg={8} md={24}>
                    <Component5
                      icon={<FontAwesomeIcon icon={faUsers} size="2x" color="#eb2f5b" />}
                      topic1="Quản lý khách thuê"
                      content1="Chức năng quản lý thông tin khách thuê, gồm các thông tin cá nhân,thông tin liên hệ."
                    />
                </Col>
                <Col lg={8} md={24}>
                    <Component5
                      icon={<FontAwesomeIcon icon={faUsers} size="2x" color="#eb2f5b" />}
                      topic1="Quản lý khách thuê"
                      content1="Chức năng quản lý thông tin khách thuê, gồm các thông tin cá nhân,thông tin liên hệ."
                    />
                </Col>
              </Row>
              <Row style={{paddingTop:"10px"}}>
                <Col lg={8} md={24}>
                    <Component5
                      icon={<FontAwesomeIcon icon={faUsers} size="2x" color="#eb2f5b" />}
                      topic1="Quản lý khách thuê"
                      content1="Chức năng quản lý thông tin khách thuê, gồm các thông tin cá nhân,thông tin liên hệ."
                    />
                </Col>
                <Col lg={8} md={24}>
                    <Component5
                      icon={<FontAwesomeIcon icon={faUsers} size="2x" color="#eb2f5b" />}
                      topic1="Quản lý khách thuê"
                      content1="Chức năng quản lý thông tin khách thuê, gồm các thông tin cá nhân,thông tin liên hệ."
                    />
                </Col>
                <Col lg={8} md={24}>
                    <Component5
                      icon={<FontAwesomeIcon icon={faUsers} size="2x" color="#eb2f5b" />}
                      topic1="Quản lý khách thuê"
                      content1="Chức năng quản lý thông tin khách thuê, gồm các thông tin cá nhân,thông tin liên hệ."
                    />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
      <div>footer</div>
    </div>
  );
}

export default Home;
