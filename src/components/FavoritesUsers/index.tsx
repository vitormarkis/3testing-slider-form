import { useGlobalStore } from "@contexts/store"
import { getFavoriteUsersObject } from "@utils/index"
import React from "react"

import { Age, Cep, Container, Content, Country, Name } from "./styles"

const FavoritesUsers: React.FC = () => {
  const { state } = useGlobalStore()

  const favoriteUsersObject = getFavoriteUsersObject(state.users, state.favoriteUsers)

  return (
    <Container>
        {state.favoriteUsers
          ? favoriteUsersObject.map(user => (
              <Content>
                <Name>{user.name}</Name>
                <Age>{user.age}</Age>
                <Country>{user.country}</Country>
                <Cep>{user.cep}</Cep>
              </Content>
            ))
          : null}
    </Container>
  )
}

export default FavoritesUsers
