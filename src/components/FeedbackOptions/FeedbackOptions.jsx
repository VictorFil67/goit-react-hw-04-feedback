// import { Component } from 'react';
import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="wrap">
      {/* <h1 className="title">Please leave feedback</h1> */}

      {options.map(btn => {
        return (
          <button
            key={crypto.randomUUID()}
            className={s.button}
            onClick={onLeaveFeedback}
            name={btn}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
};
