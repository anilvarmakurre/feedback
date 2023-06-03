import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {bool: false}

  changeMode = () => {
    this.setState({bool: true})
  }

  renderMethod = resources => {
    const {emojis, loveEmojiUrl} = resources
    const {bool} = this.state

    if (bool === true) {
      return (
        <div className="inner-container">
          <li>
            <img className="emoji" src={loveEmojiUrl} alt=" love emoji" />
            <h1 className="head2">Thank you</h1>
          </li>
          <li>
            <p className="para">
              We will use your feedback to improve our customer support
              performance
            </p>
          </li>
        </div>
      )
    }
    return (
      <div className="inner-container">
        <li>
          <h1 className="head">
            How satisfied are you with our customer support performance.?
          </h1>
        </li>
        <li className="inner-bottom">
          {emojis.map(each => (
            <div className="inner-feedback">
              <button
                className="button"
                type="button"
                onClick={this.changeMode}
              >
                <img className="emoji" src={each.imageUrl} alt={each.name} />
              </button>
              <p className="para">{each.name}</p>
            </div>
          ))}
        </li>
      </div>
    )
  }

  render() {
    const {resources} = this.props

    return <div className="bg-container">{this.renderMethod(resources)}</div>
  }
}

export default Feedback
