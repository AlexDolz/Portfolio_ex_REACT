import React from 'react';
import s from './WorksDetailsPage.module.css';
import { useParams } from 'react-router-dom';
import { workData } from '../../../data/workData';

const WorksDetailsPage = () => {
  let { id } = useParams();

  const workItem = workData.find(elem => elem.id === +id);

  const { full_title, year, tags, text, main_img, content } = workItem;

  const updatedContent = content.map((elem, index) => {
    if (elem[0] === 'h1') {
      return (
        <div>
          <img className={s.main__img} src={main_img} alt='main img' />
          <h1 className={s.work__content__header} key={index}>
            {elem[1]}
          </h1>
        </div>
      );
    }
    if (elem[0] === 'h2') {
      return (
        <h2 className={s.work__content__subheader} key={index}>
          {elem[1]}
        </h2>
      );
    }
    if (elem[0] === 'text') {
      return (
        <p className={s.work__content__text} key={index}>
          {elem[1]}
        </p>
      );
    }
    if (elem[0] === 'img') {
      return (
        <img
          src={elem[1]}
          alt={elem[0]}
          className={s.work__content__img}
          key={index}
        />
      );
    }
    return null;
  });

  return (
    <div className='container'>
      <div className={s.work__container}>
        <h2 className={s.work__title}>{full_title}</h2>
        <div className={s.work__year__tag}>
          <p className={s.work__year}>{year}</p>
          <p className={s.work__tag}>{tags.join(', ')}</p>
        </div>
        <p className={s.work__text}>{text}</p>
        <div className={s.work__content}>{updatedContent}</div>
      </div>
    </div>
  );
};

export default WorksDetailsPage;
