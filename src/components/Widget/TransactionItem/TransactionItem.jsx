import React from 'react'
import './transactionitem.css';
import Button from '../Button/Button';

export default function TransactionItem({date, name, img, amount, status}) {
  return (
    <tr className="transaction">
        <td className="transactionCustomer">
            <img src={img} alt="user avatar"  className="transactionImg"/>
            <span className="transactionName">{name}</span>
        </td>
        <td className="transactionDate">{date}</td>
        <td className="transactionAmount">{amount}</td>
        <td className="transactionStatus"><Button type={status}/></td>
    </tr>
  )
}
