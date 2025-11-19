import { useExpense } from "../context/ExpenseContext"

const TotalCost = () => {
  const { expenses } = useExpense()

  const total = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0)

  return (
    <div className="text-xl font-bold text-green-700">
      Total Expense: ${total}
    </div>
  )
}

export default TotalCost