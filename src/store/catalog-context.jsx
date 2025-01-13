import { createContext, useReducer } from "react";

const actions = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
};

export const CatalogContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

function CatalogReducer(state, action) {
  if (action.type === actions.ADD_ITEM) {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  }

  if (action.item === actions.REMOVE_ITEM) {
    return {
      ...state,
      items: [...state.items.filter((item) => item.id !== action.payload)],
    };
  }
}

export default function CatalogProvider({ children }) {
  const [catalogState, dispatch] = useReducer(CatalogReducer, {
    items: [
      { id: 1, name: "test" },
      { id: 2, name: "test2" },
    ],
  });

  function handleAddItem(item) {
    dispatch({ type: actions.ADD_ITEM, payload: item });
  }

  function handleRemoveItem(itemId) {
    dispatch({ type: actions.REMOVE_ITEM, payload: itemId });
  }

  const ctxValue = {
    items: catalogState.items,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
  };

  return (
    <CatalogContext.Provider value={ctxValue}>
      {children}
    </CatalogContext.Provider>
  );
}
