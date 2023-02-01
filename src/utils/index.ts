import { RootState, UserProps } from "src/myTypes/index"

export function getNewUser({ name, age, country, cep }: UserProps): UserProps {
  return { name, age, country, cep }
}

export function cleanFields(): UserProps {
  return { name: "", age: "", country: "", cep: "" }
}

export function createNewUserObject({ name, age, country, cep }: RootState): UserProps {
  return {
    name,
    age,
    country,
    cep,
  }
}
