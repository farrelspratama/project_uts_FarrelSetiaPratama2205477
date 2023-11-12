import React from "react";
import Typed from "typed.js";

export default function Halaman() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer', 'Undergraduate Student'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

    return (
      <section className="home">
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"></link>
        
        <div className="home">
          <div className="home-content">
            <h3>Hello, It's Me</h3>
            <h1>Farrel Setia Pratama</h1>
            <h3>And I'm a <span className="multiple-text" ref={el}></span></h3>
            <p>I am an active student majoring in Computer Science Education.</p>
            <div className="social-media">
              <a href="https://www.instagram.com/farrelspratama/" style={{ "--i": 7}}><i className="bx bxl-instagram"></i></a>
              <a href="https://www.linkedin.com/in/farrelspratama/" style={{ "--i": 8}}><i className="bx bxl-linkedin-square"></i></a>
              <a href="https://github.com/farrelspratama" style={{ "--i": 9}}><i className="bx bxl-github"></i></a>
            </div>
          </div>

          <div className="home-img">
            <img src="./img/Process_Pemotretan_JPEG Large_DSCF0003 1.png" alt="#"></img>
          </div>
        </div>
      </section>
    );
  }