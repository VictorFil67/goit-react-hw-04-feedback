import { Component } from 'react';
import s from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  //   state = {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   };

  render() {
    return (
      <div className="wrap">
        {/* <h1 className="title">Please leave feedback</h1> */}

        {this.props.options.map(btn => {
          return (
            <button
              key={crypto.randomUUID()}
              className={s.button}
              onClick={this.props.onLeaveFeedback}
              name={btn}
            >
              {btn}
            </button>
          );
        })}
      </div>
    );
  }
}
