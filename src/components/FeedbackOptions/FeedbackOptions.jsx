import s from './FeedbackOptions.module.css';

export const FeedbackOptions = (options, onLeaveFeedback) => {
  return (
    <div className="wrap">
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
