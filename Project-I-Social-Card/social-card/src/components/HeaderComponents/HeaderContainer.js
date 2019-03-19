import React from "react";
import "./Header.css";
import ImageThumbnail from "./ImageThumbnail";
import HeaderContent from "./HeaderContent";
import HeaderTitle from "./HeaderTitle";

const HeaderContainer = () => {
  return (
    <div className="header-container">
      <div className="row">
        <div className="col-2 img-container">
          <ImageThumbnail />
        </div>
        <div className="col-10 content">
          <HeaderTitle />
          <HeaderContent />
        </div>
      </div>
    </div>
  );
};

export default HeaderContainer;
