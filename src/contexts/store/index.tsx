import { GlobalStoreProps, NodeChildren } from "@myTypes/index"
import { initialState, reducer } from "@reducers/index"
import { getUpdateFavoriteUserID } from "@utils/index"
import { createContext, useContext, useEffect, useReducer } from "react"

const GlobalStoreContext = createContext<GlobalStoreProps | null>(null)

export function GlobalStoreProvider({ children }: NodeChildren) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const updatedFavoriteUsersID = getUpdateFavoriteUserID(state)
    dispatch({ type: "setFavoriteUsers", payload: updatedFavoriteUsersID })
  }, [state.users])

  useEffect(() => {
    console.log(state.favoriteUsers)
  }, [state.favoriteUsers])

  return <GlobalStoreContext.Provider value={{ state, dispatch }}>{children}</GlobalStoreContext.Provider>
}

export const useGlobalStore: () => GlobalStoreProps = () => useContext(GlobalStoreContext)!
