import React, { Component } from 'react';
import styles from './Feedback.module.css';

import { Statistic } from 'components/statistics/Statistics';
import { FeedbackOptions } from 'components/feedbackOptions/FeedbackOptions';
import { Section } from 'components/section/Section';
import { Notification } from 'components/notification/Notification';

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

  render() {
    const { good, neutral, bad } = this.state;
    // const { children } = this.props;
    const { feedback } = styles;

    return (
      <div className={feedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions options="Good" onLeaveFeedback={this.updateGood} />
          <FeedbackOptions options="Neutral" onLeaveFeedback={this.updateNeutral}/>
          <FeedbackOptions options="Bad" onLeaveFeedback={this.updateBad} />
          </Section>
        <Section title="Statistic">
          {good || neutral || bad > 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage().toFixed()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
