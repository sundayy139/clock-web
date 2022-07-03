import React from 'react';
import Logo from "../../img/logo-mona.png";
import {FaSearch} from 'react-icons/fa';
import {IoMdHeart} from 'react-icons/io';
import '../../css/header.css';
import '../../css/base.css';

function Header() {
  return (
    <>
        {/* Header-Start */}
        <div className='header'>
            <div className='sub-header'>
                <div className="grid wide">
                    <div className=" header-top">
                        <div className="header-logo">
                            <a href="" className="header-logo--link">
                                <img src={Logo} alt="" className="header-logo--img" />
                            </a>
                        </div>
                        <div className="header-search">
                            <input type="text" className="header-search--input" placeholder='Tìm kiếm ...'/>
                            <button type='submit' className='header-search--btn'>
                                <FaSearch className='header-search--icon'/>
                            </button>
                        </div>
                        <div className="header-nav">
                            <a className="header-whistlist--link">
                                <IoMdHeart className='header-whistlist--icon'/>
                            </a>
                            <a className="header-cart--link">
                                <div className="header-cart--icon"></div>
                                <span className='header-cart--qty'>0</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom grid wide">
                <ul className="header-menu">
                    <li className="header-menu--item">
                        <a className='menu-item--link' href="">trang chủ</a>
                    </li>
                    <li className="header-menu--item">
                        <a  className='menu-item--link'href="">giới thiệu</a>
                    </li>
                    <li className="header-menu--item">
                        <a className='menu-item--link' href="">đồng hồ nam</a>
                    </li>
                    <li className="header-menu--item">
                        <a className='menu-item--link' href="">đồng hồ nữ</a>
                    </li>
                    <li className="header-menu--item">
                        <a className='menu-item--link' href="">blog</a>
                    </li>
                    <li className="header-menu--item">
                        <a className='menu-item--link' href="">liên hệ</a>
                    </li>
                 
                </ul>
            </div>   
        </div>
        {/* Header-End */}
    </>
  )
}


export default Header;