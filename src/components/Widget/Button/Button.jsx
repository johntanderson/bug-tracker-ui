import React from 'react'
import './button.css';

export default function Button({ type }) {
  return (
      <button className={type}>{type}</button>
  )
}
