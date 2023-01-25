import React, { useState, useContext } from 'react'
import './expense.sass'

export default function ExpenseItem(props) {

  let {title} = props;

  return <>
    <div className="c-expense__wrapp">
      <span className="c-expense__title">{title}</span>
      <input className="input c-expense__input" type="text" name="value" placeholder="Введите сумму"/>
    </div>
  </>
}