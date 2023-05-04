import React from 'react';
import Head from '../../Head/Head';
import PostsList from '../../PostsList/PostsList';
import WorksList from '../../WorksList/WorksList';

const HomePage = () => {
  return (
    <div>
      <Head />
      <PostsList numOfWorks={2} />
      <WorksList numOfWorks={3} />
    </div>
  );
};

export default HomePage;
