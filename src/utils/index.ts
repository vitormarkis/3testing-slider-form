import { RootState, UserFields, UserProps } from "src/myTypes/index"

export function getNewUser({ name, age, country, cep }: UserFields): UserFields {
  return { name, age, country, cep }
}

export function cleanFields(): UserFields {
  return { name: "", age: "", country: "", cep: "" }
}

export function createNewUserObject({ name, age, country, cep, users }: RootState): UserProps {
  const lastID = getLastID(users)
  return {
    id: 1 + lastID,
    name,
    age,
    country,
    cep,
  }
}

export function getLastID(users: UserProps[]): number {
  if (users.length === 0) return 0
  const IDs = users.map(user => user.id)
  return Math.max(...IDs)
}

export function getFavoriteUsersObject(users: UserProps[], ids: number[]): UserProps[] {
  return users.filter(user => {
    if (ids.includes(user.id)) return { ...user }
  })
}

export function toggleFavoriteUsers(favoriteUsers: number[], userID: number): number[] {
  if (favoriteUsers.includes(userID)) return favoriteUsers.filter(id => id !== userID)
  return [...favoriteUsers, userID]
}

export function getFilteredUsers(users: UserProps[], userID: number): UserProps[] {
  return users.filter(user => user.id !== userID)
}

export function getUpdateFavoriteUserID(state: RootState): number[] {
  return state.favoriteUsers.filter(id => {
    const usersID = state.users.map(user => user.id)
    if (usersID.includes(id)) return id
  })
}
