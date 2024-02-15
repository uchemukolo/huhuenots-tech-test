import { useReducer } from 'react';

// Define types and actions
interface State {
  searchQuery: string;
  strategyFilter: string[];
  assetClassFilter: (string | { options?: { value: string }[] | undefined })[];
  marketAndRegionFilter: (string | { options?: { value: string }[] | undefined })[];
  styleFilter: string[];
}

type Action =
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'SET_STRATEGY_FILTER'; payload: string[] }
  | { type: 'SET_ASSET_CLASS_FILTER'; payload: (string | { options?: { value: string }[] | undefined })[] }
  | { type: 'SET_MARKET_AND_REGION_FILTER'; payload: (string | { options?: { value: string }[] | undefined })[] }
  | { type: 'SET_STYLE_FILTER'; payload: string[] };

const initialState: State = {
  searchQuery: '',
  strategyFilter: [],
  assetClassFilter: [],
  marketAndRegionFilter: [],
  styleFilter: [],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'SET_STRATEGY_FILTER':
      return { ...state, strategyFilter: action.payload };
    case 'SET_ASSET_CLASS_FILTER':
      return { ...state, assetClassFilter: action.payload };
    case 'SET_MARKET_AND_REGION_FILTER':
      return { ...state, marketAndRegionFilter: action.payload };
    case 'SET_STYLE_FILTER':
      return { ...state, styleFilter: action.payload };
    default:
      return state;
  }
};

// Custom hook to encapsulate state management logic
const useDataTableReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};

export default useDataTableReducer;
