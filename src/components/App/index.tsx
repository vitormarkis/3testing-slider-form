import { initialState, reducer } from "@reducers/index"
import { ChangeEvent, useEffect, useReducer } from "react"
import { Container } from "./styles"

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  // const handleChangeInput: onChangeProps<ChangeEvent<HTMLInputElement>> = {
  //   name: event => dispatch({ type: "setName", payload: event.target.value }),
  //   age: event => dispatch({ type: "setAge", payload: event.target.value }),
  //   country: event => dispatch({ type: "setCountry", payload: event.target.value }),
  //   cep: event => dispatch({ type: "setCep", payload: event.target.value }),
  // }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "setInputField",
      payload: {
        field: event.target.name,
        value: event.target.value,
      },
    })
  }

  function handleActionButton() {
    if (state.stage === 0) dispatch({ type: "nextStage" })
    if (state.stage === 1) dispatch({ type: "registerUser" })
    return
  }

  useEffect(() => {
    console.log(state)
  }, [state.users]);
  
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
            <input value={state.name} name="name" onChange={handleOnChange} type="text" placeholder="Nome..." />
            <input value={state.age} name="age" onChange={handleOnChange} type="text" placeholder="Idade..." />
          </div>

          <div className={`two ${state.stage === 1 ? "second-stage" : ""}`}>
            <input value={state.country} name="country" onChange={handleOnChange} type="text" placeholder="País..." />
            <input value={state.cep} name="cep" onChange={handleOnChange} type="text" placeholder="CEP..." />
          </div>
        </div>
      </div>
      <button onClick={handleActionButton}>Enviar</button>
    </Container>
  )
}

export default App
