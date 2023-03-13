import React from 'react';
import Subtitle from '../atom/Subtitle';
import Title from '../atom/Title';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Attendees = () => {
  return (
    <div className="bg-slate-100 py-16">
      <div className="container mx-auto">
        <div className="text-center pb-14">
          {<Title hasTextBrand title="Success at a galance" />}
          <Subtitle subtitle="Attendees increasing value" />
        </div>
        <div className="flex justify-around">
          <div className="max-w-[150px]">
            <CircularProgressbarWithChildren
              value={71}
              strokeWidth={3}
              styles={buildStyles({
                pathColor: `#ff0763`,
                trailColor: '#d6d6d6',
              })}
            >
              <div className="text-3xl">
                <strong>71%</strong>
              </div>
            </CircularProgressbarWithChildren>
            <h3 className="text-2xl font-bold text-center py-4">2014</h3>
          </div>
          <div className="max-w-[150px] ">
            <CircularProgressbarWithChildren
              value={75}
              strokeWidth={3}
              styles={buildStyles({
                pathColor: `#ff0763`,
                trailColor: '#d6d6d6',
              })}
            >
              <div className="text-3xl">
                <strong>75%</strong>
              </div>
            </CircularProgressbarWithChildren>
            <h3 className="text-2xl font-bold text-center py-4">2015</h3>
          </div>
          <div className="max-w-[150px]">
            <CircularProgressbarWithChildren
              value={81}
              strokeWidth={3}
              styles={buildStyles({
                pathColor: `#ff0763`,
                trailColor: '#d6d6d6',
              })}
            >
              <div className="text-3xl">
                <strong>81%</strong>
              </div>
            </CircularProgressbarWithChildren>
            <h3 className="text-2xl font-bold text-center py-4">2016</h3>
          </div>
          <div className="max-w-[150px] ">
            <CircularProgressbarWithChildren
              value={87}
              strokeWidth={3}
              styles={buildStyles({
                pathColor: `#ff0763`,
                trailColor: '#d6d6d6',
              })}
            >
              <div className="text-3xl">
                <strong>87%</strong>
              </div>
            </CircularProgressbarWithChildren>
            <h3 className="text-2xl font-bold text-center py-4">2017</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendees;
