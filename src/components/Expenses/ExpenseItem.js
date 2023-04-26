import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);
  
  const clickHandler = () => {
    setTitle('Updated Title');
    console.log(title);
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date = {props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
      <div className='expense-item__price'>INR {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
