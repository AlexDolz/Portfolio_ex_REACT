import React from 'react';
import s from './WorksItem.module.css';
import { Link } from 'react-router-dom';

const WorksItem = ({ main_img, title, year, tags, text, id }) => {
  return (
    <div className={s.works__item}>
      <img className={s.works__item__img} src={main_img} alt={`${title} img`} />
      <div className={s.work__texts}>
        <Link to={`/works/${id}`}>
          <h2 className={s.work__title}>{title}</h2>
        </Link>
        <div className={s.work__year__tag}>
          <p className={s.work__year}>{year}</p>
          <p className={s.work__tag}>{tags[0]}</p>
        </div>
        <p className={s.work__text}>{text}</p>
      </div>
    </div>
  );
};

export default WorksItem;
