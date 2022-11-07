import React from "react";
import styles from './Footer.module.scss'
import classNames from 'classnames/bind';
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import {FaFacebookF} from "react-icons/fa"

const cx=classNames.bind(styles)
function Footer () {
    return ( 
        <div className={cx('keep-travle')}>
        <div className={cx('keep-header')}>
            <div className={cx('keep-left')}>
                <p className={cx('keep-fist')}>KEEP IN TOUCH</p>
                <p className={cx('keep-second')}>
                   CONTACT with Us
               </p>
            </div>
            <div className={cx('keep-right')}>
              <input type="text" placeholder="Email..."/>
              <button>SEND</button>
            </div>
        </div>
        <div className={cx('keep-body')}>
         <div className={cx('keep-contact')}>
         <p className={cx('keep-icon')}>MOVIE.</p>
         <p>This website will help you to know more about the movie news that is running as well as being shown in many countries, due to some financial reasons, we cannot buy copyrighted movies. Happy New Year to you all.</p>
           <div className={cx('keep-ti')}>
              <i><FaFacebookF/></i>
              <i><AiOutlineTwitter/></i>
              <i><AiOutlineInstagram/></i>
           </div>
        </div>
        <div className={cx('keep-list')}>
            <ul >
              <div className={cx('list-comment')}>LAST MINUTE</div>
              <li>Services</li>
              <li>Insurancee</li>
              <li>Agency</li>
              <li>Tourism</li>
              <li>Payment</li>
            </ul>
            <ul><div className={cx('list-comment')}>PARTNERS</div>
                <li>Booking</li>
                <li>RentalCar</li>
                <li>HostelWorld</li>
                <li>Trivago</li>
                <li>TripAdvisor</li>
            </ul>
            <ul><div className={cx('list-comment')}>PLACE</div>
                <li>London</li>
                <li>California</li>
                <li>Indonesia</li>
                <li>Europe</li>
                <li> Oceania</li>
            </ul>
        </div>
        </div>
        <div className={cx('keep-footer')}>
            <p className={cx('keep-footer-fist')}>THE BEST WORDPRESS MOVIE THEME</p>
            <p className={cx('keep-footer-second')}>COPYRIGHT BY BAOTC@2003</p>
        </div>
    </div>
 );
}
export default Footer
