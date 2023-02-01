import { useGlobalStore } from "@contexts/store"
import React from "react"

import { Container, Favorite, FavoriteBorder, UserContainer } from "./styles"

const Users: React.FC = () => {
  const { state } = useGlobalStore()!

  return (
    <Container>
      {state.users &&
        state.users.map(user => (
          <UserContainer key={user.id}>
            <p>{user.name}</p>
            <div className="buttons-container">
              {state.favoriteUsers.includes(user.id) ? <Favorite /> : <FavoriteBorder />}
              <button className="favorite">
                <p>x</p>
              </button>
            </div>
          </UserContainer>
        ))}
    </Container>
  )
}

export default Users
