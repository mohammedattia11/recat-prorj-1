import React, { useState } from "react";
import img1 from "./port1.png";
import img2 from "./port2.png";
import img3 from "./port3.png";
export default function Portfolio() {
  let [data, setData] = useState([
    { path: img1, id: "1" },
    { path: img2, id: "2" },
    { path: img3, id: "3" },
    { path: img1, id: "4" },
    { path: img2, id: "5" },
    { path: img3, id: "6" },
  ]);
  return (
    <>
      <section className="app second-color">
        <h2 className="text-center heading-text mt-4">PORTFOLIO COMPONENT</h2>
        <div className="icon-dark my-3 text-center">
          <i className="fa-solid fa-star fs-5"></i>
        </div>

        <div className="container pb-5">
          <div className="row g-5">
            {data.map((item) => (
              <>
                <div className="col-md-4">
                  <div className="portfolio-item">
                    <img src={item.path} alt="" className="w-100 rounded-3" />
                    <div
                      data-bs-toggle="modal"
                      data-bs-target={'#'+item.id}
                      className="layer  rounded-3 text-white"
                    >
                      <i className="fa-solid fa-plus fa-plus"></i>
                    </div>
                  </div>
                </div>
              </>
            ))}
            {data.map((item) => (
              <>
                <div
                  className="modal fade"
                  id={item.id}
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content d-flex justify-content-center align-items-center">
                      <div className="modal-body p-0">
                        <img src={item.path} className="w-100" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
