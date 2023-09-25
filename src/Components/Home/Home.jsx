import React from 'react'
import img from '../../Assets/imgs/avataaars.svg'
export default function Home() {
  return <>
    <div className="app d-flex  justify-content-center align-items-center main">
      <div className='content text-center text-white '>
      <img className='w-75 my-5' src={img} alt="" />
      <h2 className='heading-text'>START FRAMEWORK</h2>
      <div className='icon my-2 text-center'>
        <i className='fa-solid fa-star fs-4'></i>
      </div>
      <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
    </>
}
