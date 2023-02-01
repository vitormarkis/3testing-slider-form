import { cleanFields } from "@utils/index"
import { ActionProps, FormReducerTypes, RootState } from "src/myTypes/index"

export function reducer(state: RootState, action: ActionProps<FormReducerTypes>): RootState {
  switch (action.type) {
    case "nextStage":
      return { ...state, stage: 1 }

    case "registerUser":
      const clean_fields = cleanFields()
      return { ...state, ...clean_fields, stage: 0 }

    case "setName":
      return { ...state, name: action.payload as string }

    case "setAge":
      return { ...state, age: action.payload as string }

    case "setCountry":
      return { ...state, country: action.payload as string }

    case "setCep":
      return { ...state, cep: action.payload as string }

    default:
      return state
  }
}
