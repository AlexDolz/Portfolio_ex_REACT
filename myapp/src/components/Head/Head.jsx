import React from 'react';
import s from './Head.module.css';
import headImg from './media/head_img.png';

const Head = () => {
  return (
    <div className='container'>
      <div className={s.head__container}>
        <div className={s.head__info}>
          <h1 className={s.head__title}>
            Hi, I am John, Creative Technologist
          </h1>
          <p className={s.head__text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className={s.head__btn}>Download Resume</button>
        </div>
        <img className={s.head__img} src={headImg} alt='img of John' />
      </div>
    </div>
  );
};

export default Head;
