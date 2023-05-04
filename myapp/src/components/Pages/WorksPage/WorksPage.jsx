import React from 'react';
import s from './WorksPage.module.css';
import WorksList from '../../WorksList/WorksList';

const WorksPage = () => {
  return (
    <div className={s.works__section}>
      <div className='container'>
        <h1 className={s.works__section__title}>Work</h1>
      </div>
      <WorksList numOfWorks={4} />
    </div>
  );
};

export default WorksPage;
