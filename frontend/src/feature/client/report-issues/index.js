import React, { useState, useEffect } from "react";
import Reportissues_tag from "../../../components/reportissue_tag";
import Menu_client from "../../../components/menu_client";
import { Row, Col } from "antd";
import reportedissuesApi from "../../../api/reportedissuesApi";
import Footer_client from "../../../components/footer_client";
function Reportissues_client() {
  const [reportIssuesList, setIsReportIssuesList] = useState([]);

  useEffect(() => {
    const fetchReportIssueList = async () => {
      try {
        const response = await reportedissuesApi.getAll();
        console.log("Fetch report-isses successfully: ", response.data);
        setIsReportIssuesList(response.data);
      } catch (error) {
        console.log("Failed to fetch report-isues list: ", error);
      }
    };
    fetchReportIssueList();
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
        <div
          style={{ fontFamily: "PT Sans, sans-serif", fontSize: "30px" ,fontWeight:"bold",textAlign:"center",width:"50%",paddingLeft:"80px"}}
        >BÁO CÁO ĐỀ MỤC</div>
        <Row>
          {reportIssuesList.map((reportissuesid) => (
            <Col
              lg={20}
              md={24}
              style={{
                width: "100%",
                height: "auto",
                // backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                paddingLeft: "240px",
                paddingTop: "20px",
              }}
              key={reportissuesid.id}
            >
              <div style={{ width: "90%", height: "auto" }}>
                <Reportissues_tag
                  title={reportissuesid.title}
                  description={reportissuesid.description}
                  status={reportissuesid.status}
                  createdDate={reportissuesid.createdDate}
                  solvedDate={reportissuesid.solvedDate}
                />
              </div>
            </Col>
          ))}
        </Row>
        <div style={{ paddingTop: "20px" }}>
          <Footer_client />
        </div>
      </div>
    </div>
  );
}

export default Reportissues_client;
