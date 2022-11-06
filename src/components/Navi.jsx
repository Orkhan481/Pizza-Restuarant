import React from "react";
import { useState } from "react";

const Navi = () => {
  const[isMobile, setIsMobile] = useState(false)
  return (
    <div>
      <header>
        <div className="logo">LA CARAVANA</div>

        <nav className={isMobile ? "nav-mobile" : ""}>
          <a href="#">HOME</a>
          <a href="#">ABOUT US</a>
          <a href="#">MENU</a>
          <a href="#">CONTACT</a>       
        </nav>
        <button className="bar"
      onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
      </button>
      </header>
    </div>
  );
};

export default Navi;
