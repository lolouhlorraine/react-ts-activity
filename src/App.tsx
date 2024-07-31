import { useState, useEffect } from 'react'
import { Header } from './components/Header';
import { ExpensesTable } from './components/ExpensesTable';

function App() {
  const [expenseData, setExpenseData] = useState([])

  const getExpenseData = async () => {
    try {
      const request = await fetch("https://expenses-backend-mu.vercel.app/expenses", {
        headers: {
          "Content-Type": "application/json",
          Username: "lorina.castroverde"
        }
      });
      const result = await request.json()
      setExpenseData(result)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    getExpenseData()
  }, [])

  // to do: improve styling to match UX framework
  return (
    <div id="template-text">
      <Header>Expenses</Header>
      <ExpensesTable data={expenseData} />
    </div>
  );
}

export default App;
