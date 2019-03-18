import React from "react";
import "./Header.css";

const HeaderTitle = () => {
  return (
    <p className="header-title">
      <strong> Lambda School</strong>{" "}
      <span className="social-handle">@LambdaSchool · 26 jan</span>
    </p>
  );
};

export default HeaderTitle;
