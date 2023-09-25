import React from 'react'

export default function Contact() {
  return <>
    <section className="app second-color">
        <h2 className="text-center heading-text mt-4">CONTACT SECTION</h2>
        <div className="icon-dark my-3 text-center">
          <i className="fa-solid fa-star fs-5"></i>
        </div>
        <div className="container d-flex flex-wrap justify-content-start w-50">
          <input className='form-control w-100 mt-5 py-2' placeholder='userName' type="text" />
          <input className='form-control w-100 mt-5 py-2' placeholder='userAge' type="number" />
          <input className='form-control w-100 mt-5 py-2' placeholder='userEmail' type="email" />
          <input className='form-control w-100 mt-5 py-2' placeholder='userPassword' type="number" />
            <button className='mt-4 main rounded-3 p-2 border-0 text-white'>send message</button>
        </div>
    </section>    

  
  </>
}
