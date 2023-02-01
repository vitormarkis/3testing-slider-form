import { ChangeEvent } from "react"

export type StageProps = 0 | 1

export type UserProps = {
  name: string
  age: string
  country: string
  cep: string
}

export type RootState = UserProps & {
  stage: StageProps
}

export type FormReducerTypes = "nextStage" | "registerUser" | "setName" | "setAge" | "setCountry" | "setCep"

export type ActionProps<T> = {
  type: T
  payload?: RootState | Partial<RootState> | string
}

export interface onChangeProps<T> {
  name: (e: T) => void
  age: (e: T) => void
  country: (e: T) => void
  cep: (e: T) => void
}

export type onChangeKeys = keyof onChangeProps<ChangeEvent<HTMLInputElement>>