"use client";
import { Col, Row } from "antd";
import React from "react";
import FormInput from "../Forms/FormInput";
import FormSelectField from "../Forms/FormSelectField";

import UploadImage from "../ui/UploadImage";
import ACDepartmentField from "../Forms/ACDepartmentField";
import ACFacultyField from "../Forms/ACFacultyField";
import ACSemesterField from "../Forms/ACSemesterField";
import { genderOptions } from "@/constants/global";

const StudentInfo = () => {
  return (
    <div>
      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
          padding: "15px",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          Student Information
        </p>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.name.firstName"
              size="large"
              label="FirstName"
            />
          </Col>
          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.name.middleName"
              size="large"
              label="Middle Name"
            />
          </Col>
          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.name.lastName"
              size="large"
              label="Last Name"
            />
          </Col>
          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="password"
              name="password"
              size="large"
              label="Password"
            />
          </Col>

          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <ACDepartmentField
              name="student.academicDepartment"
              label="Academic Department"
            ></ACDepartmentField>
          </Col>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <ACFacultyField
              name="student.academicFaculty"
              label="Academic Faculty"
            ></ACFacultyField>
          </Col>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <ACSemesterField
              name="student.academicSemester"
              label="Academic Semester"
            />
          </Col>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormSelectField
              name="student.gender"
              size="large"
              options={genderOptions}
              label="Gender"
              placeholder="Select"
            />
          </Col>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <UploadImage name="file"></UploadImage>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StudentInfo;
