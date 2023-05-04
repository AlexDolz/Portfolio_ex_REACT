import React from 'react';
import s from './WorksList.module.css';
import { workData } from '../../data/workData';
import WorksItem from '../WorksItem/WorksItem';

const WorksList = ({ numOfWorks }) => {
  const isHomePage = numOfWorks === 3;

  return (
    <div className='container'>
      <div className={s.works__container}>
        {isHomePage && <h3 className={s.works__title}>Featured works</h3>}
        <div className={s.works__wrapper}>
          {workData.slice(0, numOfWorks).map((elem, index) => (
            <WorksItem key={index} {...elem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorksList;
