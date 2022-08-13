import React, { Component } from 'react';
import styles from './Feedback.module.css';
import PropTypes from 'prop-types';

import { Statistic } from 'components/statistics/Statistics';
import { FeedbackOptions } from 'components/feedbackOptions/FeedbackOptions';
import { Section } from 'components/section/Section';
import { Notification } from 'components/notification/Notification';
import { Reset } from 'components/reset/Reset';

export class Feedback extends Component {
  static defaultProps = {
    step: 1,
    difficultGood: 0,
    difficultNeutral: 0,
    difficultBad: 0,
  };

  state = {
    good: this.props.difficultGood,
    neutral: this.props.difficultNeutral,
    bad: this.props.difficultBad,
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    (this.state.good /
      (this.state.good + this.state.neutral + this.state.bad)) *
    100;

  updateGood = () => {
    console.log('Good updating...');
    this.setState((state, props) => ({
      good: state.good + props.step,
    }));
  };

  updateNeutral = () => {
    console.log('Neutral updating...');
    this.setState((state, props) => ({
      neutral: state.neutral + props.step,
    }));
  };

  updateBad = () => {
    console.log('Bad updating...');
    this.setState((state, props) => ({
      bad: state.bad + props.step,
    }));
  };

  resetState = () => {
    console.log('Reset...');
    this.setState(() => ({ bad: 0, good: 0, neutral: 0 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    // const { children } = this.props;
    const { feedback, btnWrapper } = styles;

    return (
      <div className={feedback}>
        <Section title="Please leave feedback">
          <div className={btnWrapper}>
            <FeedbackOptions options="Good" onLeaveFeedback={this.updateGood} />
            <FeedbackOptions
              options="Neutral"
              onLeaveFeedback={this.updateNeutral}
            />
            <FeedbackOptions options="Bad" onLeaveFeedback={this.updateBad} />
          </div>
        </Section>

        <Section title="Statistic">
          {good || neutral || bad > 0 ? (
            <>
              <Statistic
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage().toFixed()}
              />
              <Reset name="Reset feedback" func={this.resetState} />
            </>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}

Feedback.propTypes = {
  step: PropTypes.number.isRequired,
  difficultGood: PropTypes.number.isRequired,
  difficultNeutral: PropTypes.number.isRequired,
  difficultBad: PropTypes.number.isRequired,
};
