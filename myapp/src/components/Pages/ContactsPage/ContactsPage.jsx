import React from 'react';
import s from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className='container'>
      <h1 className={s.contacts__title}>Contact me</h1>
      <div className={s.contacts__container}>
        <form className={s.contacts__form}>
          <input
            className={s.contacts__input}
            type='text'
            placeholder='Your name'
          />
          <input
            className={s.contacts__input}
            type='text'
            placeholder='Your email'
          />
          <textarea
            className={s.contacts__input}
            rows='4'
            cols='50'
            placeholder='Your message'
          />
          <button className={s.contacts__btn}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactsPage;
