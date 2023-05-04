import React from 'react';
import s from './Footer.module.css';
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footer__icons}>
        <FaFacebookSquare className={s.icon} />
        <FaInstagram className={s.icon} />
        <FaTwitter className={s.icon} />
        <FaLinkedin className={s.icon} />
      </div>
      <p className={s.footer__text}>Copyright ©2020 All rights reserved</p>
    </div>
  );
};

export default Footer;
