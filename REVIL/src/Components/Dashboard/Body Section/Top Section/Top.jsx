import React from 'react'
// import './top.css'
import './top.scss'
// Icon
import{BiSearchAlt} from 'react-icons/bi'
// import{TbMessageCircle} from 'react-icons/tb'
// import { MdOutlineNotificationsNone } from 'react-icons/md'
import{BsArrowRightShort} from 'react-icons/bs'

// Import image
import img from '../../../../Acads/Rd.png'
// import img from '../../../Acads/Rd.png'
import video from '../../../../Acads/Books.mp4'
import img2 from '../../../../Acads/book.png'
// import video from '../../../Acads/Books.mp4'
// import img2 from '../../../Acads/book.png'

export const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1> Welcome to Revil.</h1>
          <p>Hello Russel Dione, Welcome back!</p>
        </div>

        <div className="searchBar flex">
          <input type='text'placeholder='Search Dashboard'/>
          <BiSearchAlt className="icon"/>
        </div>

        <div className="adminDiv flex">
          {/* <TbMessageCircle className= "icon"/>
          <MdOutlineNotificationsNone className="icon"/> */}
          <div className="adminImage">
            <img src={img} alt="Admin"/>
          </div>
        </div>
      </div>

      <div className="cardSection flex">

        <div className="rightCard flex">
          <h1>Explore the Revil. </h1>
          <p>In Revil We Trust</p>

          <div className="buttoms flex">
            <button className='btn'>Explore More</button>
            <button className='btn transparent'>Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

      <div className="leftCard flex">
        <div className='main flex'>

          <div className='textDiv'>
          <h1>My stat</h1>

          
          <div className="flex">
            <span>Today <br/> 
            <small>4 orders</small>
            </span>
            <span> This Month <br/>
            <small>127 orders</small>
            </span>
          </div>

          <span className="flex link">
            Go to my orders <BsArrowRightShort className='icon'/>
          </span>
          </div>
        <div className="imgDiv">
          <img src={img2} alt='Image Name'/>
          </div>  

              {/* <div className="sideBarCard">
            <BsQuestionCircle className='icon'/>
            <div className="cardContent">
              <div className="circle1"></div>
              <div className="circle2"></div>

              <h3>Help Center</h3>
              <p>Having trouble in Revil?, please contact us from for more questions.</p>
              <button className='btn'>Go to help center</button>
            </div>
          </div> */}
        </div>
      </div>
      </div>
    </div>
  )
}


export default Top