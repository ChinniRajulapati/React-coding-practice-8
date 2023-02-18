/* eslint-disable jsx-a11y/label-has-associated-control */
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {letterEnter: '', length: 0}

  enterValue = event => {
    const count = event.target.value.length
    this.setState({letterEnter: event.target.value, length: count})
  }

  render() {
    const {letterEnter, length} = this.state

    return (
      <div className="bg-container">
        <div className="calculator-container">
          <img
            alt="letters calculator"
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
          <div className="names-container">
            <h1 className="heading">Calculate the Letters you entered</h1>
            <div className="input-container">
              <label htmlFor="touch" className="paragraph">
                Enter the phrase
              </label>
              <input
                id="touch"
                className="input"
                placeholder="Enter the phrase"
                type="text"
                onChange={this.enterValue}
                value={letterEnter}
              />
            </div>

            <div className="result-container">
              <p className="result-name">No.of letters: {length}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
