import { useGlobalStore } from "@contexts/store"
import React from "react"

import { Container, Favorite, FavoriteBorder, UserContainer } from "./styles"

const Users: React.FC = () => {
  const { state, dispatch } = useGlobalStore()!

  const handleFavoriteClick = (userID: number) => dispatch({ type: "toggleFavorite", payload: userID })
  const handleDeleteClick = (userID: number) => dispatch({ type: "deleteUser", payload: userID })

  return (
    <Container>
      {state.users &&
        state.users.map(user => (
          <UserContainer key={user.id}>
            <p>{user.name}</p>
            <div className="buttons-container">
              <div onClick={e => handleFavoriteClick(user.id)}>
                {state.favoriteUsers.includes(user.id) ? <Favorite /> : <FavoriteBorder />}
              </div>
              <button onClick={e => handleDeleteClick(user.id)} className="favorite">
                <p>x</p>
              </button>
            </div>
          </UserContainer>
        ))}
    </Container>
  )
}

export default Users
