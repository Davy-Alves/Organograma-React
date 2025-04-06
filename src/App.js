import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: '01º Semestre',
      corPrimaria: '#00CC66',
      corSecundaria: '#0A1F16'
    },
    {
      nome: '02º Semestre',
      corPrimaria: '#00FF88',
      corSecundaria: '#112921'
    },
    {
      nome: '03º Semestre',
      corPrimaria: '#39FF14',
      corSecundaria: '#162D19'
    },
    {
      nome: '04º Semestre',
      corPrimaria: '#66FFB2',
      corSecundaria: '#123326'
    },
    {
      nome: '05º Semestre',
      corPrimaria: '#33FF99',
      corSecundaria: '#1A2F25'
    },
    {
      nome: '06º Semestre',
      corPrimaria: '#00D67A',
      corSecundaria: '#0F2C22'
    },
    {
      nome: '07º Semestre',
      corPrimaria: '#00B86B',
      corSecundaria: '#08241A'
    },
    {
      nome: '08º Semestre',
      corPrimaria: '#00A65E',
      corSecundaria: '#0A261B'
    },
    {
      nome: '09º Semestre',
      corPrimaria: '#00FFCC',
      corSecundaria: '#13302C'
    }
    ,
    {
      nome: '10º Semestre',
      corPrimaria: '#33FFDD',
      corSecundaria: '#15302F'
    }
    ,
    {
      nome: 'Outro...',
      corPrimaria: '#66FFEA',
      corSecundaria: '#183132'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      
      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

      <Rodape />

    </div>
  );
}

export default App;
