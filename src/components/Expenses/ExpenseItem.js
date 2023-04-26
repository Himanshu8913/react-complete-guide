import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date = {props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
      <div className='expense-item__price'>INR {props.amount}</div>
      </div>
      <button onClick={() => {console.log('CLICKED')}}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
