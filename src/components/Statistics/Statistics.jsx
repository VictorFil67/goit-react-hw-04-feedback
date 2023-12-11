import { Component } from 'react';
import s from './Statistics.module.css';

export class Statistics extends Component {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  // handleUpdate = e => {
  //   const { name } = e.target;
  //   // const {good, neutral, bad} = this.state;
  //   switch (name) {
  //     case 'good':
  //       this.setState(prevState => ({ good: prevState.good + 1 }));
  //       break;
  //     case 'neutral':
  //       this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  //       break;
  //     case 'bad':
  //       this.setState(prevState => ({ bad: prevState.bad + 1 }));
  //       break;
  //     default:
  //       return;
  //   }
  //   // console.log(this.state.bad);
  // };

  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // };

  // countPositiveFeedbackPercentage = () => {
  //   const { good } = this.state;
  //   return !this.countTotalFeedback()
  //     ? 0
  //     : Math.round((good / this.countTotalFeedback()) * 100);
  // };

  render() {
    return (
      <div className="wrap">
        {/* <h1 className="title">Please leave feedback</h1>
        <button className={s.button} onClick={this.handleUpdate} name="good">
          Good
        </button>
        <button className={s.button} onClick={this.handleUpdate} name="neutral">
          Neutral
        </button>
        <button className={s.button} onClick={this.handleUpdate} name="bad">
          Bad
        </button> */}
        {/* <h2 className="statistics">Statistics</h2> */}
        <span className={s.score}>Good: {this.props.good}</span>
        <span className={s.score}>Neutral: {this.props.neutral}</span>
        <span className={s.score}>Bad: {this.props.bad}</span>
        <span className={s.score}>Total: {this.props.total}</span>
        <span className={s.score}>
          Positive feedback: {this.props.positivePercentage}%
        </span>
      </div>
    );
  }
}
