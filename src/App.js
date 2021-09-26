import ExpenseItem from "./Components/ExpenseItem";

function App() {
  //Dummy data
  const expenses = [
    {
      id: "e1",
      title: "GTX 3090",
      amount: 4690,
      date: new Date(2021, 1, 2),
    },
    {
      id: "e2",
      title: "PS7",
      amount: 999.99,
      date: new Date(2021, 2, 14),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 300.49,
      date: new Date(2021, 3, 2),
    },
    {
      id: "e4",
      title: "Standing Desk",
      amount: 402,
      date: new Date(2021, 4, 20),
    },
  ];
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <h2>Expense Tracker</h2>
    </div>
  );
}

export default App;
