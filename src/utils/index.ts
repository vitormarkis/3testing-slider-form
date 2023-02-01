import { UserProps } from "src/myTypes/index"

export function getNewUser({ name, age, country, cep }: UserProps): UserProps {
  return { name, age, country, cep }
}

export function cleanFields(): UserProps {
  return { name: "", age: "", country: "", cep: "" }
}
