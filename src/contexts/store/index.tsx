import { GlobalStoreProps, NodeChildren } from "@myTypes/index"
import { initialState, reducer } from "@reducers/index"
import { createContext, useContext, useReducer } from "react"

const GlobalStoreContext = createContext<GlobalStoreProps | null>(null)

export function GlobalStoreProvider({ children }: NodeChildren) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <GlobalStoreContext.Provider value={{ state, dispatch }}>{children}</GlobalStoreContext.Provider>
}

export const useGlobalStore: () => GlobalStoreProps = () => useContext(GlobalStoreContext)!
