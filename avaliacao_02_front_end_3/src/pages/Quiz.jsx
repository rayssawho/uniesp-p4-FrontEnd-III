import React, { useState } from 'react';
import Pergunta from '../components/Pergunta';


function Quiz() {
  const [opcoesSelecionadas, setOpcoesSelecionadas] = useState({});
  const [enviando, setEnviando] = useState(false);

  const perguntas = [
    {
      id: 1,
      pergunta:  'Qual é o Pokémon inicial do tipo Fogo na região de Kanto?',
      opcoes: ['Squirtle', 'Bulbasaur', 'Pikachu', 'Charmander', 'Dragonite'],
      resposta: 'Charmander',
    },
    {
      id: 2,
      pergunta: 'Qual é o Pokémon do tipo Psíquico que é conhecido por sua habilidade de megaevolução?',
      opcoes: ['Psyduck', 'Mewtwo', 'Alakazam',  'Slowbro', 'Jolteon'],
      resposta: 'Mewtwo',
    }, 
    {
      id: 3,
      pergunta:  'Qual é o nome da organização criminosa mais famosa do universo Pokémon, composta por Jessie, James e Meowth?',
      opcoes: ['Equipe Rocket', 'Equipe Magma', 'Equipe Galactic', 'Equipe Aqua', 'Equipe Rock'],
      resposta: 'Equipe Rocket',
    },
    {
      id: 4,
      pergunta:  'Qual é o Pokémon elétrico conhecido como o mascote da franquia Pokémon?',
      opcoes: ['Raichu', 'Electabuzz', 'Pikachu', 'Squirtle', 'Rayquaza'],
      resposta: 'Pikachu',
    },
    {
      id: 5,
      pergunta:  'Quais são os três pokémons iniciais da Região de Kanto?',
      opcoes: ['Charmander, Squirtle e Pikachu', 'Squirtle, Pikachu e Mewtwo', 'Charmander, Squirtle e Bulbasaur', 'Pikachu, Bulbasaur e Charmander', 'Charmander, Squirtle e Dragonite'],
      resposta: 'Charmander, Squirtle e Bulbasaur',
    },
    {
      id: 6,
      pergunta:  'Qual é a evolução do pokémon Squirtle?',
      opcoes: ['Squirtlemon', 'Squirtless', 'Wartirle', 'O Squirtle não evolui', 'Wartortle'],
      resposta: 'Wartortle',
    },
    {
      id: 7,
      pergunta:  'Qual o nome do treinador pokémon mais conhecido da franquia?',
      opcoes: ['Josh', 'Ash Ketchum', 'James', 'Misty', 'Brock'],
      resposta: 'Ash Ketchum',
    },
    {
      id: 8,
      pergunta:  'Qual o nome do Pokémon redondo e fofo, semelhante a um balão, que tem a habilidade de cantar?',
      opcoes: ['Jigglypuff', 'Pikachu', 'Bulbasaur', 'Charmander', 'Clefairy'],
      resposta: 'Jigglypuff',
    },
    {
      id: 9,
      pergunta:  'Qual pokemon é conhecido por ser constantemente atormentado por dores de cabeça intensas, o que faz com que ele fique confuso e incapaz de controlar seus poderes?',
      opcoes: ['Caterpie', 'Pidgey', 'Psyduck', 'Clefairy', 'Machop'],
      resposta: 'Psyduck',
    },
    {
      id: 10,
      pergunta:  'Esse Pokémon passa por uma metamorfose, começando como uma pequena larva conhecida como Caterpie, que evolui para Metapod e, finalmente, para: ',
      opcoes: ['Beedrill', 'Butterfree', 'Pidgeot', 'Fearow', 'Weedle'],
      resposta: 'Butterfree',
    },
  ];

  function aoSelecionarOpcao(pergunta, opcao) {
    if (opcoesSelecionadas[pergunta]) {
      alert('Você já respondeu esta pergunta!');
      return;
    }

    setOpcoesSelecionadas((opcoesAntigas) => ({
      ...opcoesAntigas,
      [pergunta]: opcao,
    }));
  }

  function aoEnviar() {
    if (Object.keys(opcoesSelecionadas).length < perguntas.length) {
      alert('Por favor, responda todas as perguntas antes de finalizar o quiz!');
    } else {
      setEnviando(true);
    }
  }

  const respostasCorretas = perguntas.reduce((acertos, pergunta) => {
    if (opcoesSelecionadas[pergunta.id] === pergunta.resposta) {
      return acertos + 1;
    } else {
      return acertos;
    }
  }, 0);

  if (enviando) {
    alert('Você acertou ' + respostasCorretas + ' de ' + perguntas.length + ' perguntas');

  }

  return (
    <div className='estiloQuiz'>
      <h1>Quiz - Teste seus conhecimentos no universo Pokémon</h1>
      <div className='estiloRegra'>
      <h2>Regras e informações:</h2>
      <p>1 - Você só pode responder cada questão uma única vez. <br/>
        2 - Você precisa responder todas as perguntas antes de finalizar o quiz. <br/>
        3 - Ao finalizar, será exibido seu resultado. <br/>
        4 - Boa diversão!
      </p>
      </div>
      <div className='estiloPergunta'>
      {perguntas.map((pergunta) => (
        <Pergunta
          key={pergunta.id}
          pergunta={pergunta.pergunta}
          opcoes={pergunta.opcoes}
          opcaoSelecionada={opcoesSelecionadas[pergunta.id]}
          aoSelecionarOpcao={(opcao) => aoSelecionarOpcao(pergunta.id, opcao)}
        />
      ))}
      <button onClick={aoEnviar}>Finalizar</button>
      </div>
    </div>
  );
}

export default Quiz;
