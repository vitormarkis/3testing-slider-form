import FavoritesUsers from "@components/FavoritesUsers"
import Form from "@components/Form"
import Users from "@components/Users"
import { Container } from "./styles"

function App() {
  return (
    <Container>
      <FavoritesUsers />
      <Form />
      <Users />
    </Container>
  )
}

export default App
