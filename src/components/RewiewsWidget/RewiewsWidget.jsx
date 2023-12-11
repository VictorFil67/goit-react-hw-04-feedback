import { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export class RewiewsWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleUpdate = e => {
    const { name } = e.target;
    // const {good, neutral, bad} = this.state;
    switch (name) {
      case 'good':
        this.setState(prevState => ({ good: prevState.good + 1 }));
        break;
      case 'neutral':
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        break;
      case 'bad':
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;
      default:
        return;
    }
    // console.log(this.state.bad);
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return !this.countTotalFeedback()
      ? 0
      : Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];
    return (
      <div className="wrap">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleUpdate}
          />
        </Section>
        <Section title="Statistics">
          {/* <h2 className="statistics">Statistics</h2> */}
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
        {/* <span className={s.score}>Good: {good}</span>
        <span className={s.score}>Neutral: {neutral}</span>
        <span className={s.score}>Bad: {bad}</span>
        <span className={s.score}>Total: {this.countTotalFeedback()}</span>
        <span className={s.score}>
          Positive feedback: {this.countPositiveFeedbackPercentage()}%
        </span> */}
      </div>
    );
  }
}
