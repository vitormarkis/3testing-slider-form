import styled from 'styled-components';

function App() {
  return (
    <Container>
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
      <button>Enviar</button>
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin-top: 20rem;
  background-color: #aafc87;
  padding: 5rem;
  margin-inline: auto;
  width: 480px;

  input {
    width: 100%;
  }

  .frame {
    display: flex;
    justify-content: start;
  }

  .frame > div {
    flex: 1 0 100%;
    transition: transform .7s ease-in-out;
  }
`;
