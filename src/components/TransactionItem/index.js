import {Component} from 'react'
import './index.css'

class TransactionItem extends Component {
  render() {
    const {transactionItem} = this.props
    const {id, title, amount, type} = transactionItem
    return (
      <li key={id} className="listItem">
        <p>{title}</p>
        <p>{amount}</p>
        <p>{type}</p>
        <button type="button" data-testid="delete" className="delete-btn">
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </li>
    )
  }
}

export default TransactionItem
