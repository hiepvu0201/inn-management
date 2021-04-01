import React from "react";
import "./style.css";
import { Row, Col, Button } from "antd";
import { Images } from "./../../config/image";
import Menu from "../../components/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faHourglassEnd,faPuzzlePiece,faUserAlt,faUserTimes
} from "@fortawesome/free-solid-svg-icons";
import {
 faMoneyBillAlt,faHandshake
} from "@fortawesome/free-regular-svg-icons";
import Component1 from "./../../components/component_ngangxanh";
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
      <div>
        <div className="content">
          <div className="container">
            <div className="topic">
              <div className="circle-topic"></div>
              <div style={{ position: "relative" }}>
                Bạn đang kinh doanh Nhà trọ, Căn hộ dịch vụ ?
              </div>
            </div>
            <div
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "15px",
              }}
            >
              Cho thuê nhà trọ, căn hộ là loại hình kinh doanh khá hấp dẫn vì có
              tiềm năng lớn, nhu cầu cao, doanh thu ổn định và an toàn. Tuy
              nhiên, lĩnh vực kinh doanh này
            </div>
            <div
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "15px",
                paddingBottom: "20px",
              }}
            >
              cũng có khá nhiều khó khăn khiến không ít chủ trọ, chủ căn hộ phải
              đối mặt với nhiều rủi ro về tài chính cũng như hiệu quả quản lý.
            </div>
            <Row>
              <Col lg={8} md={24}>
                <Component1
                  icon={
                    <FontAwesomeIcon
                      icon={faHourglassEnd}
                      size="2x"
                      color="#007c7e"
                    />
                  }
                  topic="Thời gian"
                  content="Bạn tốn thời gian cho việc giám sát, quản lý cơ sở, khách thuê, chi phí"
                />
              </Col>
              <Col lg={8} md={24}>
                <Component1
                  icon={
                    <FontAwesomeIcon
                      icon={faMoneyBillAlt}
                      size="2x"
                      color="#007c7e"
                    />
                  }
                  topic="Chi phí"
                  content="Bạn đau đầu vì có quá nhiều chi phí phát sinh trong quá trình kinh doanh."
                />
              </Col>
              <Col lg={8} md={24}>
                <Component1
                  icon={
                    <FontAwesomeIcon
                      icon={faUserAlt}
                      size="2x"
                      color="#007c7e"
                    />
                  }
                  topic="Công tác quản lý"
                  content="Bạn đau đầu khi suốt ngày phải đi xử lý sự cố, hợp đồng, các thủ tục pháp lý, hóa đơn."
                />
              </Col>
            </Row>
            <Row style={{paddingTop:"20px"}}>
              <Col lg={8} md={24}>
                <Component1
                  icon={
                    <FontAwesomeIcon
                      icon={faHandshake}
                      size="2x"
                      color="#007c7e"
                    />
                  }
                  topic="Rủi ro Quản lý"
                  content="Tình trạng khó khăn trong việc quản lý các khoản hóa đơn, có thể thất thoát tiền bạc trong việc tính toán."
                />
              </Col>
              <Col lg={8} md={24}>
                <Component1
                  icon={
                    <FontAwesomeIcon
                      icon={faPuzzlePiece}
                      size="2x"
                      color="#007c7e"
                    />
                  }
                  topic="Khách thuê"
                  content="Bạn cần có một quy trình quản lý khách thuê chuyên nghiệp, hiệu quả để tạo mối quan hệ lâu dài với họ."
                />
              </Col>
              <Col lg={8} md={24}>
                <Component1
                  icon={
                    <FontAwesomeIcon
                      icon={faUserTimes}
                      size="2x"
                      color="#007c7e"
                    />
                  }
                  topic="Hiệu quả kinh doanh"
                  content="Công việc quản lý đảm bảo tính chính xác, hiệu quả để đảm bảo quyền lợi cả hai bên và tối ưu hóa được doanh thu."
                />
              </Col>
            </Row>
            
          </div>
        </div>
      </div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
    </div>
  );
}

export default Home;
