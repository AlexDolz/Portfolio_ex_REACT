import React from 'react';
import s from './PostsList.module.css';
import { Link } from 'react-router-dom';
import { blogData } from '../../data/blogData';
import PostsItem from '../PostsItem/PostsItem';

const PostsList = ({ numOfWorks, isHome = true }) => {
  const isHomePage = numOfWorks === 2;

  return (
    <div
      className={isHome ? s.posts__container__home : s.posts__container__blog}
    >
      <div className='container'>
        <div className={s.posts__header}>
          {isHomePage && <h2 className={s.posts__title}>Recent posts</h2>}
          <Link to='/blog'>
            {isHomePage && <p className={s.posts__link}>View all</p>}
          </Link>
        </div>
        <div
          className={isHome ? s.posts__wrapper__home : s.posts__wrapper__blog}
        >
          {blogData.slice(0, numOfWorks).map((elem, index) => (
            <PostsItem key={index} {...elem} classType={isHome} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsList;
