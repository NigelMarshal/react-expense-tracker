import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 2nd 2021</div>
      <div className="expense-item__description">
        <h2>Birthday Cake</h2>
        <div className="expense-item__price">420 AED</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
