// CustomFooter.jsx

import React from "react";

const CustomFooter = ({ text, linktext, link, color, bcolor, padding }) => {
  const defaultText = "Developed by";
  const footerStyle = {
    position: "sticky",
    bottom: "0",
    background: color || "#ffffff", // Background color
    padding: padding, // Adjust the padding as needed
    borderTop: "1px solid #ddd", // Upper border
    display: "flex",
    justifyContent: "flex-start", // Center text to the left
    alignItems: "center",
    border: "1px solid",
    borderColor: bcolor || "#000000",
    borderRadius: "4px"
  };

  const linkStyle = {
    marginLeft: "0.5rem" // Adjust the spacing between text and link
  };

  return (
    <div style={footerStyle}>
      {text || defaultText}
      <a href={link} style={linkStyle}>
        {linktext}
      </a>
    </div>
  );
};

export default CustomFooter;