// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {number: 0, numberType: true}

  onClickButton = () => {
    const {numberType} = this.state
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({number: prevState.number + randomNumber}))
    const {number} = this.state
    if (number % 2 !== 0) {
      this.setState(prevState => ({numberType: false}))
    } else {
      this.setState(prevState => ({numberType: true}))
    }
  }

  render() {
    const {number, numberType} = this.state
    return (
      <div className="bg-container">
        <div className="count-container">
          <h1 className="heading">Count {number}</h1>
          <p className="Even-Odd">
            {numberType ? 'Count is Even' : 'Count is Odd'}
          </p>
          <button className="count" type="button" onClick={this.onClickButton}>
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
