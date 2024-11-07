import { createContext, useReducer } from "react";

export const WatchListContext = createContext({
  watchListState: [],
  removeFromWatchList: (id) => {},
  addToWatchList: (neoObject) => {},
});

export const WatchListContextProvider = ({children}) => {
  const watchListReducer = (state, action) => {
    switch(action.type){
      case "ADD":
        return [action.payload, ...state];
      case "REMOVE":
        return state.filter((neo) => neo.id !== action.payload);
      default:
        return state
      
    }
  }

  const [watchListState, dispatch] = useReducer(watchListReducer, [])

  const addToWatchList = (neoObject) => {
    dispatch({type: "ADD", payload: neoObject})
  }
  
  const removeFromWatchList = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  
  const contextValue = {
    watchListState: watchListState,
    addToWatchList: addToWatchList,
    removeFromWatchList: removeFromWatchList
  }

  return (
    <WatchListContext.Provider value={contextValue}>
      {children}
    </WatchListContext.Provider>
  )
}