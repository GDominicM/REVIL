import React from 'react'
// import './sidebar.css'
import './sidebar.scss';

// Images 
// import logo from '../../../Acads/logo.png'
// import logo from '../../../../Acads/logoo.png'
import logo from '../../../Acads/logoo.png'

// Icons
import {MdOutlineVideoLibrary} from 'react-icons/md'
import {MdDeliveryDining} from 'react-icons/md'
import {MdOutlineExplore} from 'react-icons/md'
import {BsTrophy} from 'react-icons/bs'
import {TiMessage} from 'react-icons/ti'
import {BsCreditCard2Front} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'
export const Sidebar = () => {
  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        <img src={logo} alt="Image Name" />
        <h2>Revil</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <MdOutlineVideoLibrary className="icon"/>
              <span className="smallText">
                Video listing
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <MdDeliveryDining className="icon"/>
              <span className="smallText">
                My Orders
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <MdOutlineExplore className="icon"/>
              <span className="smallText">
                Explore
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <BsTrophy className="icon"/>
              <span className="smallText">
                Products
              </span>
            </a>
          </li>
        </ul>
      </div>



      <div className="settingsDiv">
        <h3 className="divTitle">
          SETTINGS
        </h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <TiMessage className="icon"/>
              <span className="smallText">
                Messages
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <BsCreditCard2Front className="icon"/>
              <span className="smallText">
                Billing
              </span>
            </a>
          </li>

         
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className='icon'/>
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>Having trouble in Revil?, please contact us from for more questions.</p>
          <button className='btn'>Go to help center</button>
        </div>
      </div>
    </div>


      
  )
}

export default Sidebar