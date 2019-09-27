import React from "react";

function Header({ title, date }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{date}</p>
    </div>
  );
}

export default Header;