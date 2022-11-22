import React from "react";

const MenuItem = ({ title, link = '#', active }) => {
    return (
        <a href={link} className={`btn btn-primary ${active}`}>{title}</a>
    );
  };
  
export default MenuItem;