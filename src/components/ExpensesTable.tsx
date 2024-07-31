import moment from 'moment'
import './ExpensesTable.css'

type ExpensesTableProps = {
  data: {
    id: number;
    merchant: string;
    amount: number;
    description: string;
    date: string;
    category: "training" | "travel" | "meal";
    status: string;
  }[]
}

// to do: improve table items casing and styling
export const ExpensesTable = ({ data }: ExpensesTableProps) => (
  <div className="main-container">
    <div className="table-container">
      <div className="table-row heading">
        <div className="row-item">Date</div>
        <div className="row-item">Merchant</div>
        <div className="row-item">Amount</div>
        <div className="row-item">Category</div>
        <div className="row-item">Description</div>
        <div className="row-item">Status</div>
      </div>
      { data.map((item) => (
        <div className="table-row" key={item.id}>
          <div className="row-item">{moment.utc(item.date).format("MMM D")}</div>
          <div className="row-item">{item.merchant}</div>
          <div className="row-item">{item.amount}</div>
          <div className="row-item">{item.category}</div>
          <div className="row-item">{item.description}</div>
          <div className="row-item">{item.status}</div>
        </div>
      ))
      }
    </div>
  </div>
)