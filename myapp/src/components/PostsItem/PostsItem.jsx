import React from 'react';
import s from './PostsItem.module.css';
import moment from 'moment';

const PostsItem = ({ title, date, tags, text, classType }) => {
  const convertedTags = tags.join(', ');
  const convertedDate = moment(date).format('DD MMM YYYY');

  return (
    <div className={`${s.posts__item} ${classType ? s.homepage : ''}`}>
      <h2 className={s.post__item__title}>{title}</h2>
      <div className={s.tags}>
        <p className={s.post__dates}>{convertedDate}</p>
        <div className={`${s.post__line} ${classType ? s.homepage : ''}`}></div>
        <p className={`${s.post__tags} ${classType ? s.homepage : ''}`}>
          {convertedTags}
        </p>
      </div>
      <p className={`${s.post__description} ${classType ? s.homepage : ''}`}>
        {text}
      </p>
    </div>
  );
};

export default PostsItem;
