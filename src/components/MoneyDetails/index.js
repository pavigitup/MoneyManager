import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  render() {
    const {historyContainer} = this.props
    return (
      <>
        <div className="case-card-balance">
          <div className="img-con">
            <img
              className="img-icon"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
            />
          </div>
          <div className="your-case">
            <p>Your Balance</p>
            <p>Rs 50000</p>
          </div>
        </div>
        <div className="case-card-income">
          <div className="img-con">
            <img
              className="img-icon"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alt="income"
            />
          </div>
          <div className="your-case">
            <p>Your Income</p>
            <p>Rs 50000</p>
          </div>
        </div>
        <div className="case-card-expenses">
          <div className="img-con">
            <img
              className="img-icon"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              alt="expenses"
            />
          </div>
          <div className="your-case">
            <p>Your Expenses</p>
            <p>Rs 50000</p>
          </div>
        </div>
      </>
    )
  }
}

export default MoneyDetails
