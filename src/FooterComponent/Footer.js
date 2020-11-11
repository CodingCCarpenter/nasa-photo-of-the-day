import React from "react";

function Footer({ copyright }) {
  return (
    <div>
      <footer className='copyright'>© {copyright}</footer>
    </div>
  );
}

export default Footer;