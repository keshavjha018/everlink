import React from 'react';
import "./CSS/Footer.css";

function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className="ele-row">
          <a href="https://github.com/keshavjha018/everlink" target="_blank" rel="noreferrer noopener"><i className="fa fa-github"></i></a>
          <a href="https://www.linkedin.com/in/keshavjha018/" target="_blank" rel="noreferrer noopener"><i className="fa fa-linkedin"></i></a>
        </div>
        <div class="ele-row">
          EVERLINK Copyright © 2022 - All rights reserved || Designed & Developed By: Keshav Jha 
        </div>
      </footer>
    </>
  )
}

export default Footer