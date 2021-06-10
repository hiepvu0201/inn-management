import React, { useState, useEffect } from "react";
import Notification_tag from "../../../components/notification_tag";
import Menu_client from "./../../../components/menu_client";
import { Row, Col } from "antd";
import notificationApi from "./../../../api/notifiactionApi";
import Footer_client from './../../../components/footer_client'
function Notification_client() {
  const [notificationList, setIsNotificationList] = useState([]);

  useEffect(() => {
    const fetchNotificationList = async () => {
      try {
        const response = await notificationApi.getAll();
        console.log("Fetch notifications successfully: ", response.data);
        setIsNotificationList(response.data);
      } catch (error) {
        console.log("Failed to fetch notification list: ", error);
      }
    };
    fetchNotificationList();
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
          <Row style={{ paddingLeft: "270px" }}>
            {notificationList.map((notifi) => (
              <Col lg={18} key={notifi.id}>
                <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                  <Notification_tag
                    id={notifi.id}
                    name={notifi.name}
                    description={notifi.description}
                    createdDate={notifi.createdDate}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div style={{paddingTop:"10px"}}>
            <Footer_client/>
        </div>
      </div>
    </div>
  );
}

export default Notification_client;
