import React from "react";

export default function Footer() {
  return <>
  <footer className="footer text-white pt-5 m-0">
    <div className="container">
    <div className="row text-center d-flex justify-content-between py-3">
      <div className="col-md-4 mt-4 pb-5">
        <div>
          <h3 >LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
      </div>
      <div className="col-md-3 mt-4 pb-5">
        <div>
          <h3>AROUND THE WEB</h3>
          <div className="fs-4">
          <i className="fa-brands fa-facebook mx-2"></i>
          <i className="fa-brands fa-twitter mx-2"></i>
          <i className="fa-brands fa-linkedin mx-2"></i>
          <i className="fa-solid fa-globe mx-2"></i>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-4 pb-5">
        <h3>ABOUT FREELANCER</h3>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
    </div>
    </div>
    <div className="dark text-center py-3  ">
      <p>Copyright © Your Website 2021</p>
    </div>
  </footer>
  </>
}
