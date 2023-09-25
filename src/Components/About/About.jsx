import React from 'react'

export default function About() {
  return <>
    <div className="about app main d-flex justify-content-center align-items-center">
      <div className="content  text-white container w-75 ">
        <h2 className='text-center heading-text'>ABOUT COMPONENT</h2>
        <div className='icon my-2 text-center my-3'>
        <i className='fa-solid fa-star fs-4'></i>
      </div>
      <div className="row">
        <div className="col-md-6 me-auto">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-md-6 me-auto">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
      </div>
      </div>
    </div>
  
  </>
}
