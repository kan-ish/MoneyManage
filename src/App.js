import "./App.css";

import Balance from "./Components/Balance";
import NewTransaction from "./Components/NewTransaction";
import IncomeExpense from "./Components/IncomeExpense";

function App() {
	return (
		<div className="App">
			<header className="App-header">Expense Tracker</header>
			<div className="container">
				<div>
					<Balance />
				</div>
				<div>
					<IncomeExpense />
				</div>
				<div>
					<NewTransaction />
				</div>
			</div>
		</div>
	);
}

export default App;
