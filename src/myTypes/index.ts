import { ChangeEvent } from "react"

export type StageProps = 0 | 1

export type UserProps = {
  name: string
  age: string
  country: string
  cep: string
}

export type RootState = UserProps & {
  stage: StageProps,
  users: UserProps[]
}

export type FormReducerTypes = "nextStage" | "registerUser" | "setInputField"

export type ActionProps<T> = {
  type: T
  payload?: any
}

export interface onChangeProps<T> {
  name: (event: T) => void
  age: (event: T) => void
  country: (event: T) => void
  cep: (event: T) => void
}

export type onChangeKeys = keyof onChangeProps<ChangeEvent<HTMLInputElement>>