import { reducer } from "@reducers/index"
import { ChangeEvent, useReducer } from "react"
import { onChangeKeys, onChangeProps, RootState } from "src/myTypes/index"
import { Container } from "./styles"

const initialState: RootState = {
  name: "",
  age: "",
  country: "",
  cep: "",
  stage: 0,
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChangeInput: onChangeProps<ChangeEvent<HTMLInputElement>> = {
    name: e => dispatch({ type: "setName", payload: e.target.value }),
    age: e => dispatch({ type: "setAge", payload: e.target.value }),
    country: e => dispatch({ type: "setCountry", payload: e.target.value }),
    cep: e => dispatch({ type: "setCep", payload: e.target.value }),
  }
  function handleActionButton() {
    if (state.stage === 0) dispatch({ type: "nextStage" })
    if (state.stage === 1) dispatch({ type: "registerUser" })
    return
  }

  return (
    <Container>
      {/* <i>x</i> */}
      <header>
        <h3>
          Seja <strong>bem-vindo</strong>
        </h3>
        <dd>Faça seu registro para prosseguir</dd>
      </header>
      <div className="frame-container">
        <div className="frame">
          <div className={`one ${state.stage === 1 ? "second-stage" : ""}`}>
            <input
              value={state.name}
              name="name"
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeInput[e.target.name as onChangeKeys](e)}
              type="text"
              placeholder="Nome..."
            />
            <input
              value={state.age}
              name="age"
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeInput[e.target.name as onChangeKeys](e)}
              type="text"
              placeholder="Idade..."
            />
          </div>

          <div className={`two ${state.stage === 1 ? "second-stage" : ""}`}>
            <input
              value={state.country}
              name="country"
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeInput[e.target.name as onChangeKeys](e)}
              type="text"
              placeholder="País..."
            />
            <input
              value={state.cep}
              name="cep"
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeInput[e.target.name as onChangeKeys](e)}
              type="text"
              placeholder="CEP..."
            />
          </div>
        </div>
      </div>
      <button onClick={handleActionButton}>Enviar</button>
    </Container>
  )
}

export default App
