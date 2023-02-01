import { useEffect, useState } from 'react';
import { Container } from './styles';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [cep, setCep] = useState('');
  const [stage, setStage] = useState(0);

  function resetFields() {
    setName('');
    setAge('');
    setCountry('');
    setCep('');
  }

  function handleActionButton() {
    switch (stage) {
      case 0:
        setStage(stage => stage + 1);
        
        break;
      case 1:
        console.log({
          name,
          age,
          country,
          cep
        })
        resetFields();
        setStage(0)
      default:
        break;
    }
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
          <div className={`one ${stage === 1 ? 'second-stage' : ''}`}>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              placeholder="Nome..."
            />
            <input
              value={age}
              onChange={e => setAge(e.target.value)}
              type="text"
              placeholder="Idade..."
            />
          </div>

          <div className={`two ${stage === 1 ? 'second-stage' : ''}`}>
            <input
              value={country}
              onChange={e => setCountry(e.target.value)}
              type="text"
              placeholder="País..."
            />
            <input
              value={cep}
              onChange={e => setCep(e.target.value)}
              type="text"
              placeholder="CEP..."
            />
          </div>
        </div>
      </div>
      <button onClick={handleActionButton}>Enviar</button>
    </Container>
  );
}

export default App;
