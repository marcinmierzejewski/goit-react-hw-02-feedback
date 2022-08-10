import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const {statisticValue} = styles

  return (
    <div>
      <p className={statisticValue}>Good: {good}</p>
      <p className={statisticValue}>Neutral: {neutral}</p>
      <p className={statisticValue}>Bad: {bad}</p>
      <p className={statisticValue}>Total: {total}</p>
      <p className={statisticValue}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};