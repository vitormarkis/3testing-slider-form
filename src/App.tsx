import styled from 'styled-components';

function App() {
  return (
    <Container>
      <i>x</i>
      <header>
        <h3>
          Seja <strong>bem-vindo</strong>
        </h3>
        <dd>Faça seu registro para prosseguir</dd>
      </header>
      <div className="frame-container">
        <div className="frame">
          <div className="one">
            <input type="text" placeholder="Nome..." />
            <input type="text" placeholder="Idade..." />
          </div>

          <div className="two">
            <input type="text" placeholder="País..." />
            <input type="text" placeholder="CEP..." />
          </div>
        </div>
      </div>
      <button>Enviar</button>
    </Container>
  );
}

export default App;

const Container = styled.div`
  position: relative;
  width: 480px;
  margin-top: 20rem;
  margin-inline: auto;
  padding: 5rem;
  background-color: #071013;
  color: white;
  line-height: 1;

  i {
    font-family: Calibri;
    position: absolute;
    line-height: 1;
    cursor: pointer;
    top: 0;
    right: 0;
    padding: 1rem 4rem;
    font-style: normal;

    :hover {
      background-color: #ff0035;
    }
  }
  header {
    margin-bottom: 3rem;
    strong {
      color: #ffb20f;
      font-weight: 800;
    }
    h3 {
      font-weight: 200;
      margin-bottom: 1rem;
    }
    dd {
      font-size: 3rem;
      font-weight: 100;
      color: #757575;
    }
  }

  .frame-container {
    .frame {
      overflow-x: hidden;
      width: 100%;
      display: flex;
      gap: 5rem;

      justify-content: flex-start;

      > div {
        display: flex;
        flex-direction: column;
        gap: 5rem;
        flex: 1 0 100%;
        transition: transform 1s ease-out;
        /* transform: translateX(calc(-100% - 5rem)); */
      }
    }
  }

  input {
    background-color: #303030;
    color: #fff;
    padding: 4rem;
    width: 100%;
    border: 1px solid #757575;
  }

  button {
    color: #fff;
    margin-top: 5rem;
    cursor: pointer;
    background-color: #ff6700;
    width: 100%;
    padding: 4rem;
  }
`;
