import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
	transactions: [
		{ id: 1, text: "cash withdrawal", amount: -300 },
		{ id: 2, text: "rent", amount: -500 },
		{ id: 3, text: "Salary", amount: 2000 },
		{ id: 4, text: "Nidhish balance", amount: 500 },
	],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
