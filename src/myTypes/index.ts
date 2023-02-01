import { ChangeEvent } from "react"

export type StageProps = 0 | 1

export type UserFields = {
  name: string
  age: string
  country: string
  cep: string
}

export type UserProps = UserFields & {
  id: number
}

export type RootState = UserFields & {
  stage: StageProps
  users: UserProps[]
  favoriteUsers: number[]
}

export type FormReducerTypes =
  | "nextStage"
  | "registerUser"
  | "setInputField"
  | "toggleFavorite"
  | "deleteUser"
  | "setFavoriteUsers"

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

export interface GlobalStoreProps {
  state: RootState
  dispatch: React.Dispatch<ActionProps<FormReducerTypes>>
}

export type NodeChildren = {
  children: React.ReactNode
}
