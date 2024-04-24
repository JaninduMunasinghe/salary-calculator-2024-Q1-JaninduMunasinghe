import React, { createContext, useReducer, useContext } from "react";

// Define types for your state
interface State {
  allowances: Allowance[];
  deductions: Deduction[];
  epfChecked: boolean;
}

// Define types for allowances and deductions
interface Allowance {
  id: number;
  name: string;
  amount: number;
}

interface Deduction {
  id: number;
  name: string;
  amount: number;
}

// Define initial state
const initialState: State = {
  allowances: [],
  deductions: [],
  epfChecked: false,
};

// Define actions
enum ActionType {
  ADD_ALLOWANCE,
  REMOVE_ALLOWANCE,
  ADD_DEDUCTION,
  REMOVE_DEDUCTION,
  TOGGLE_EPF,
}

type Action =
  | { type: ActionType.ADD_ALLOWANCE; allowance: Allowance }
  | { type: ActionType.REMOVE_ALLOWANCE; id: number }
  | { type: ActionType.ADD_DEDUCTION; deduction: Deduction }
  | { type: ActionType.REMOVE_DEDUCTION; id: number }
  | { type: ActionType.TOGGLE_EPF };

// Define reducer function
function salaryReducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.ADD_ALLOWANCE:
      return { ...state, allowances: [...state.allowances, action.allowance] };
    case ActionType.REMOVE_ALLOWANCE:
      return {
        ...state,
        allowances: state.allowances.filter(
          (allowance) => allowance.id !== action.id
        ),
      };
    case ActionType.ADD_DEDUCTION:
      return { ...state, deductions: [...state.deductions, action.deduction] };
    case ActionType.REMOVE_DEDUCTION:
      return {
        ...state,
        deductions: state.deductions.filter(
          (deduction) => deduction.id !== action.id
        ),
      };
    case ActionType.TOGGLE_EPF:
      return { ...state, epfChecked: !state.epfChecked };
    default:
      return state;
  }
}

// Create context
const SalaryContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({} as any);

interface SalaryProviderProps {
  children: React.ReactNode; // Specify children prop
}

// Create provider component
export const SalaryProvider: React.FC<SalaryProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(salaryReducer, initialState);

  return (
    <SalaryContext.Provider value={{ state, dispatch }}>
      {children}
    </SalaryContext.Provider>
  );
};

// Custom hook for consuming context
export const useSalaryContext = () => useContext(SalaryContext);
