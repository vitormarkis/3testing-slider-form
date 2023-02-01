import { useGlobalStore } from "@contexts/store"
import React from "react"

import { Container, UserContainer } from "./styles"

const Users: React.FC = () => {
  const { state } = useGlobalStore()!

  return (
    <Container>
      {state.users && (
        state.users.map(user => (
          <UserContainer key={user.id}><p>{user.name}</p></UserContainer>
        ))
      )}
    </Container>
  )
}

export default Users
