import React from 'react';
import s from './BlogPage.module.css';
import PostsList from '../../PostsList/PostsList';

const BlogPage = () => {
  return (
    <div className={s.blog__section}>
      <div className='container'>
        <h1 className={s.blog__section__title}>Blog</h1>
      </div>
      <PostsList numOfWorks={5} isHome={false} />
    </div>
  );
};

export default BlogPage;
