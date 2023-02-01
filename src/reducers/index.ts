import { cleanFields, createNewUserObject } from "@utils/index"
import { ActionProps, FormReducerTypes, RootState, UserFields } from "src/myTypes/index"

export const initialState: RootState = {
  name: "",
  age: "",
  country: "",
  cep: "",
  stage: 0,
  favoriteUsers: [1],
  users: [
    {
      id: 1,
      name: "Rodrigo Silva",
      age: "20",
      country: "Brasil",
      cep: "748512-800",
    },
    {
      id: 2,
      name: "Cláudio Miqueias",
      age: "40",
      country: "Brasil",
      cep: "1782785-800",
    },
  ],
}

export function reducer(state: RootState, action: ActionProps<FormReducerTypes>): RootState {
  switch (action.type) {
    case "nextStage":
      return { ...state, stage: 1 }

    case "registerUser":
      const clean_fields = cleanFields()
      const newUser = createNewUserObject(state)
      return { ...state, ...clean_fields, stage: 0, users: [...state.users, newUser] }

    case "setInputField":
      const key: keyof UserFields = action.payload.field
      const value: string = action.payload.value
      return { ...state, [key]: value }

    default:
      return state
  }
}
