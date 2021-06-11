import React from "react";
import "./style.css";
import { Row, Col, Button } from "antd";
import { Images } from "./../../config/image";
import Menu_client from "../../components/menu_client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./demo-files/demo.css";
import "./ie7/ie7.css";
import Footer from './../../components/footer'
import "./themify-icons.css";
import {
  faChevronRight,
  faHourglassEnd,
  faPuzzlePiece,
  faUserAlt,
  faUserTimes,
  faUsers,
  faRecycle,
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
import Component5 from "./../../components/component_ngangtranghong";
import Component6 from "./../../components/component_block";
import Component7 from "./../../components/component_rectangle";
import Component8 from "./../../components/component_block_last";
function Home() {
  return (
    <div>
      <div style={{ height: "150px" }}>
        <Menu_client />
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
              <button className="button-free">
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
              <Row style={{ paddingTop: "10px" }}>
                <Col lg={8} md={24}>
                  <Component5
                    icon={
                      <FontAwesomeIcon
                        icon={faUsers}
                        size="2x"
                        color="#eb2f5b"
                      />
                    }
                    topic1="Quản lý khách thuê"
                    content1="Chức năng quản lý thông tin khách thuê, gồm các thông tin cá nhân,thông tin liên hệ."
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component5
                    icon={
                      <FontAwesomeIcon
                        icon={faUsers}
                        size="2x"
                        color="#eb2f5b"
                      />
                    }
                    topic1="Quản lý khách thuê"
                    content1="Chức năng quản lý thông tin khách thuê, gồm các thông tin cá nhân,thông tin liên hệ."
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component5
                    icon={
                      <FontAwesomeIcon
                        icon={faUsers}
                        size="2x"
                        color="#eb2f5b"
                      />
                    }
                    topic1="Quản lý khách thuê"
                    content1="Chức năng quản lý thông tin khách thuê, gồm các thông tin cá nhân,thông tin liên hệ."
                  />
                </Col>
              </Row>
              <Row style={{ paddingTop: "10px" }}>
                <Col lg={8} md={24}>
                  <Component5
                    icon={
                      <FontAwesomeIcon
                        icon={faUsers}
                        size="2x"
                        color="#eb2f5b"
                      />
                    }
                    topic1="Quản lý khách thuê"
                    content1="Chức năng quản lý thông tin khách thuê, gồm các thông tin cá nhân,thông tin liên hệ."
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component5
                    icon={
                      <FontAwesomeIcon
                        icon={faUsers}
                        size="2x"
                        color="#eb2f5b"
                      />
                    }
                    topic1="Quản lý khách thuê"
                    content1="Chức năng quản lý thông tin khách thuê, gồm các thông tin cá nhân,thông tin liên hệ."
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component5
                    icon={
                      <FontAwesomeIcon
                        icon={faUsers}
                        size="2x"
                        color="#eb2f5b"
                      />
                    }
                    topic1="Quản lý khách thuê"
                    content1="Chức năng quản lý thông tin khách thuê, gồm các thông tin cá nhân,thông tin liên hệ."
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
            height: "560px",
            backgroundColor: "#efefef",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "80%",
              height: "auto",
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
                  <div style={{ position: "relative", bottom: "10px" }}>
                    Với nhiều tính năng ưu việt chỉ có tại KHUTRO{" "}
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
              <Row style={{ paddingTop: "5px" }}>
                <Col lg={8} md={24}>
                  <Component5
                    icon={
                      <FontAwesomeIcon
                        icon={faRecycle}
                        size="2x"
                        color="#eb2f5b"
                      />
                    }
                    topic1="Dùng thử miễn phí"
                    content1="Dùng thử miễn phí, hướng dẫn như thật cùng chuyên viên tận tâm. Bảo hành trọn đời, hỗ trợ liên tục 24/7."
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component5
                    icon={
                      <FontAwesomeIcon
                        icon={faRecycle}
                        size="2x"
                        color="#eb2f5b"
                      />
                    }
                    topic1="Dùng thử miễn phí"
                    content1="Dùng thử miễn phí, hướng dẫn như thật cùng chuyên viên tận tâm. Bảo hành trọn đời, hỗ trợ liên tục 24/7."
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component5
                    icon={
                      <FontAwesomeIcon
                        icon={faRecycle}
                        size="2x"
                        color="#eb2f5b"
                      />
                    }
                    topic1="Dùng thử miễn phí"
                    content1="Dùng thử miễn phí, hướng dẫn như thật cùng chuyên viên tận tâm. Bảo hành trọn đời, hỗ trợ liên tục 24/7."
                  />
                </Col>
              </Row>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="content-contact">
                  Hãy để chúng tôi đồng hành cùng bạn
                </div>
              </div>
              <div className="content-atlast">
                <div style={{ fontSize: "15px", paddingRight: "10px" }}>
                  Tại
                </div>
                <strong style={{ fontSize: "15px" }}>KHUTRO</strong>
                <div style={{ paddingLeft: "10px", fontSize: "15px" }}>
                  , chúng tôi luôn cố gắng tạo ra môi trường làm việc chuyên
                  nghiệp, sáng tạo và kỷ luật cao. Cùng với đội ngũ kỹ sư trẻ
                  giàu nhiệt huyết và các nhân viên tư vấn khách hàng luôn sẵn
                  sàng hỗ trợ bạn 24/7.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            width: "100%",
            height: "450px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "80%",
              height: "auto",
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
                  <div style={{ position: "relative", bottom: "10px" }}>
                    Quy trình mua Phần mềm KHUTRO
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ fontSize: "15px" }}>
                  Dưới đây là các bước để tiến hành mua{" "}
                </div>
                <strong
                  style={{
                    fontSize: "15px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  KHUTRO – Phần mềm Quản lý Nhà trọ, Căn hộ{" "}
                </strong>
                <div style={{ fontSize: "15px" }}>của chúng tôi.</div>
              </div>
              <Component6 />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div
            style={{
              width: "100%",
              height: "560px",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#efefef",
            }}
          >
            <div
              style={{
                width: "90%",
                height: "auto",
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
                    <div style={{ position: "relative", bottom: "10px" }}>
                      Vì sao chọn KHUTRO?
                    </div>
                  </div>
                </div>
                <div style={{ justifyContent: "center", display: "flex" }}>
                  <div style={{ fontSize: "15px" }}>
                    Kinh doanh hiệu quả phải quản lý tốt nhưng không phải chủ
                    trọ, căn hộ nào cũng biết cách làm, cũng như có đủ thời gian
                    để làm. Với
                  </div>
                  <strong
                    style={{
                      fontSize: "15px",
                      paddingRight: "5px",
                      paddingLeft: "5px",
                    }}
                  >
                    KHUTRO
                  </strong>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <strong
                    style={{
                      fontSize: "15px",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    Phần mềm Quản lý Nhà trọ, Căn hộ
                  </strong>
                  <div style={{ fontSize: "15px" }}>,bạn có thể</div>
                </div>
                <Component7 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            width: "100%",
            height: "380px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "90%",
              height: "auto",
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
                  <div style={{ position: "relative", bottom: "10px" }}>
                    3 khác biệt từ KHUTRO
                  </div>
                </div>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <div
                  style={{
                    fontSize: "15px",
                    width: "80%",
                    height: "auto",
                    fontFamily: "PT Sans, sans-serif",
                    paddingTop: "5px",
                  }}
                >
                  KHUTRO luôn tâm niệm khác biệt tạo nên thành công. Chính vì
                  thế, chúng tôi luôn nỗ lực để tạo nên những giá trị khác biệt
                  giúp khách hàng đi đến thành công. Tuy còn ít kinh nghiệm
                  nhưng KHUTRO đã dần chứng minh được vị thế của mình trong lòng
                  khách hàng.
                </div>
              </div>
              <Row style={{ paddingLeft: "80px", paddingTop: "50px" }}>
                <Col lg={8} md={24}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div className="num-topic">01</div>
                      <div
                        style={{
                          display: "block",
                          paddingLeft: "10px",
                          paddingTop: "10px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                          }}
                        >
                          <div className="topic-black">
                            Thành công của khách hàng là thước đo
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                          }}
                        >
                          <div className="content-gray">
                            KHUTRO coi trọng khách hàng và luôn lấy khách hàng
                            làm trung tâm, đặt lợi ích và mong muốn của khách
                            hàng lên hàng đầu.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={8} md={24}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div className="num-topic">02</div>
                      <div
                        style={{
                          display: "block",
                          paddingLeft: "10px",
                          paddingTop: "10px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                          }}
                        >
                          <div className="topic-black">
                            Làm tốt ngay từ đầu và luôn tập trung
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                          }}
                        >
                          <div className="content-gray">
                            KHUTRO luôn coi quy trình là tài sản. Với tư duy
                            “Làm tốt ngay từ đầu” kèm với bộ quy trình khoa học
                            và đầy đủ chúng tôi tự tin khách hàng sẽ vô cùng hài
                            lòng về sản phẩm dịch vụ.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={8} md={24}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div className="num-topic">03</div>
                      <div
                        style={{
                          display: "block",
                          paddingLeft: "10px",
                          paddingTop: "10px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                          }}
                        >
                          <div className="topic-black">
                            Đội ngũ tận tâm, đầy nhiệt huyết
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                          }}
                        >
                          <div className="content-gray">
                            KHUTRO có sự khác biệt lớn đó là đội ngũ. Với đội
                            ngũ giàu kinh nghiệm, tận tâm và đầy nhiệt huyết,
                            khách hàng sẽ luôn cảm thấy thực sự thoải mái khi
                            làm việc cùng KHUTRO.
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
      </div>
      <div>
        <div
          style={{
            width: "100%",
            height: "550px",
            display: "flex",
            justifyContent: "center",
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "15px",
                }}
              >
                <div className="topic">
                  <div className="circle-topic"></div>
                  <div style={{ position: "relative", bottom: "10px" }}>
                    Khách hàng nói về KHUTRO
                  </div>
                </div>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <div
                  style={{
                    fontSize: "15px",
                    width: "80%",
                    height: "auto",
                    fontFamily: "PT Sans, sans-serif",
                    paddingTop: "5px",
                  }}
                >
                  Sự hài lòng của khách hàng là động lực để chúng tôi hoàn thiện
                  phần mềm, đồng thời mở ra cơ hội có thêm nhiều khách hàng mới
                  trong tương lai. Bởi thế, chúng tôi vô cùng coi trọng những
                  phản hồi từ phía khách hàng và nỗ lực làm tốt nhất từ những
                  phản hồi đó.
                </div>
              </div>
              <Row style={{ paddingLeft: "50px" }}>
                <Col lg={8} md={24}>
                  <Component8
                    img={Images.FACE_1}
                    content="Giao diện thân thiện và rất dễ sử dụng, nhiều tính năng hữu ích, phù hợp với mọi chủ trọ."
                    name="Bác Phạm Thị Cúc"
                    func="Chủ trọ"
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component8
                    img={Images.FACE_1}
                    content="Giao diện thân thiện và rất dễ sử dụng, nhiều tính năng hữu ích, phù hợp với mọi chủ trọ."
                    name="Bác Phạm Thị Cúc"
                    func="Chủ trọ"
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component8
                    img={Images.FACE_1}
                    content="Giao diện thân thiện và rất dễ sử dụng, nhiều tính năng hữu ích, phù hợp với mọi chủ trọ."
                    name="Bác Phạm Thị Cúc"
                    func="Chủ trọ"
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
            height: "400px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "80%",
              height: "auto",
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
                  <div style={{ position: "relative", bottom: "10px" }}>
                    Đồng hành 24/7 cùng công việc quản lý nhà trọ, căn hộ của
                    bạn
                  </div>
                </div>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <div
                  style={{
                    fontSize: "15px",
                    width: "80%",
                    height: "auto",
                    fontFamily: "PT Sans, sans-serif",
                    paddingTop: "5px",
                  }}
                >
                  Chúng tôi luôn cố gắng tạo ra môi trường làm việc chuyên
                  nghiệp, sáng tạo và kỷ luật cao. Đội ngũ kỹ sư trẻ giàu nhiệt
                  huyết và các nhân viên tư vấn khách hàng luôn sẵn sàng hỗ trợ
                  bạn suốt 24/7, phần mềm quản lý nhà trọ luôn được phát triển
                  hàng ngày.
                </div>
              </div>
              <Row style={{ paddingTop: "20px" }}>
                <Col lg={8} md={24}>
                  <div className="box-last">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "20px",
                      }}
                    >
                      <div className="icon-hover-2">
                        <div
                          className="ti-comments"
                          style={{ Color: "#009c7e" }}
                        ></div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <div className="topic-com-4">Hỗ trợ</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <div className="content-com-4">
                        Đội ngũ hỗ trợ chuyên nghiệp, nhiệt tình, sáng tạo luôn
                        sẵn sàng phục vụ khách hàng 24/7.
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={8} md={24}>
                  <div className="box-last">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "20px",
                      }}
                    >
                      <div className="icon-hover-2">
                        <div
                          className="ti-comments"
                          style={{ Color: "#009c7e" }}
                        ></div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <div className="topic-com-4">Hỗ trợ</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <div className="content-com-4">
                        Đội ngũ hỗ trợ chuyên nghiệp, nhiệt tình, sáng tạo luôn
                        sẵn sàng phục vụ khách hàng 24/7.
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={8} md={24}>
                  <div className="box-last">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "20px",
                      }}
                    >
                      <div className="icon-hover-2">
                        <div
                          className="ti-comments"
                          style={{ Color: "#009c7e" }}
                        ></div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <div className="topic-com-4">Hỗ trợ</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <div className="content-com-4">
                        Đội ngũ hỗ trợ chuyên nghiệp, nhiệt tình, sáng tạo luôn
                        sẵn sàng phục vụ khách hàng 24/7.
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* <div>footer</div> */}
    </div>
  );
}

export default Home;
