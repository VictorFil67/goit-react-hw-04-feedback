import s from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className="wrap">
      <span className={s.score}>Good: {good}</span>
      <span className={s.score}>Neutral: {neutral}</span>
      <span className={s.score}>Bad: {bad}</span>
      <span className={s.score}>Total: {total}</span>
      <span className={s.score}>Positive feedback: {positivePercentage}%</span>
    </div>
  );
};
