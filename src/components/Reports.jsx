import React from "react";
import "./reports.css"; // Adjust the path as necessary
import { TbReportMedical } from "react-icons/tb";

const Reports = () => {
  return (
    <div className="reports">
      <h1 className="heads">Medical Reports</h1>
      <div className="txets">
        <div>
          <p className="paras">
            All medical records, reports & prescription in one place{" "}
          </p>
          <a href="/medical" className="report">
            View Reports
          </a>
        </div>
        <div className="icon">
          <TbReportMedical
            size={75}
            style={{ background: "transparent" }}
            className="ic"
          />
        </div>
      </div>
    </div>
  );
};

export default Reports;
