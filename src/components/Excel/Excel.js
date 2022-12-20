import React from 'react'

import './Excel.css'

import mainImg from '../../assets/png/mainimg.png'
import mobileImg from '../../assets/png/mobileimg.png'

function Excel() {
  return (
    <div className='excel' id="organizers">
      <div className='excel_container'>
        <div className='excel_left' data-aos="zoom-in" data-aos-duration="1200">
            <div className='excel_left_title'>
              <h4 className='excel_title'>FORTITUDE</h4>
              <div className='excel_line'></div>
            </div>
            <p className='excel_desc'>Fortitude is the mental health club of Model Engineering College. The club aims to spark and engage conversations around mental health in the campus. <br />Established in late 2020, Fortitude has since then conducted several activities to address mental health issues among students and to provide avenues for them to seek professional help.</p>
          </div>
          <div className='excel_right' data-aos="zoom-in" data-aos-duration="1200">
            <div className='excel_right_title'>
              <h4 className='excel_title'>Excel</h4>
              <div className='excel_line'></div>
            </div>
            <p className='excel_desc1'>Excel is the annual national level techno-managerial fest of Govt. Model Engineering College. Conceived in 2001 by the students, Excel has grown exponentially, providing a strong platform which hosts technical, managerial and general events. These events are scheduled over three action packed days. Apart from a series of high profile events like IBeTo (Innovations for a Better Tomorrow), Untitled and .ISSUE!, Excel conducts online competitions, workshops, talks and seminars, video conferences, exhibitions and pro shows.</p>
          </div>
          <div className='img_container' data-aos="zoom-in" data-aos-duration="1200">
            <img src={mainImg} alt='' className='excel_img' />
          </div>
          <div className='img_container1' data-aos="zoom-in" data-aos-duration="1200">
            <img src={mobileImg} alt='' className='excel_img_mobile' />
          </div>
      </div>
        
    </div>
  )
}

export default Excel