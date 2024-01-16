import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].displayText,
    historyContainer: [],
    transactionTypes: transactionTypeOptions,
    Balance: 0,
    Income: 0,
    Expenses: 0,
  }

  getTitle = event => {
    this.setState({title: event.target.value})
  }

  getAmount = event => {
    this.setState({amount: event.target.value})
  }

  addHistory = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newHistory = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      historyContainer: [...prevState.historyContainer, newHistory],
      title: '',
      amount: '',
    }))
  }

  render() {
    const {title, amount, type, historyContainer, transactionTypes} = this.state

    return (
      <div className="bg-con">
        <div className="name-con">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your{' '}
            <span className="high-light">Money Manager</span>
          </p>
        </div>
        <div className="case-cards">
          <MoneyDetails historyContainer={historyContainer} />
        </div>
        <div className="transaction-con">
          <form className="form-con" onSubmit={this.addHistory}>
            <h1>Add Transaction </h1>
            <div className="title-con">
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                id="title"
                placeholder="TITLE"
                value={title}
                onChange={this.getTitle}
              />
            </div>
            <div className="amount-con">
              <label htmlFor="title">AMOUNT</label>
              <input
                type="text"
                id="title"
                placeholder="AMOUNT"
                value={amount}
                onChange={this.getAmount}
              />
            </div>
            <div className="type-con">
              <label htmlFor="type">TYPE</label>
              <select id="type" name="selectOption">
                {transactionTypes.map(eachOption => (
                  <option key={eachOption.optionId} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="btn-con">
              <button type="submit">Add</button>
            </div>
          </form>
          <div className="history-con">
            <h1>History</h1>
            <ul>
              <li>
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </li>
              {historyContainer.map(eachItem => (
                <TransactionItem key={eachItem.id} transactionItem={eachItem} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
