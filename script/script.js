const perguntas = [
  {
      pergunta: "Qual é a importância do descarte adequado de lixo eletrônico?",
      respostas: [
          "Evitar a contaminação do solo e da água por substâncias tóxicas",
          "Aumentar a produção de novos eletrônicos",
          "Reduzir o custo de reciclagem"
      ],
      correta: 0
  },
  {
      pergunta: "Quais são os componentes prejudiciais à saúde presentes nos eletrônicos?",
      respostas: [
          "Plásticos",
          "Metais preciosos",
          "Metais pesados como chumbo e mercúrio"
      ],
      correta: 2
  },
  {
      pergunta: "O que é e-waste?",
      respostas: [
          "Um novo modelo de eletrônico",
          "Um programa de reciclagem",
          "Lixo eletrônico"
      ],
      correta: 2
  },
  {
      pergunta: "Qual é o método mais seguro para descartar baterias de íon de lítio?",
      respostas: [
          "Jogá-las no lixo comum",
          "Levá-las a um ponto de coleta de lixo eletrônico",
          "Enterrá-las no jardim"
      ],
      correta: 1
  },
  {
      pergunta: "Por que é importante reciclar componentes eletrônicos?",
      respostas: [
          "Para economizar energia",
          "Para reduzir a necessidade de mineração de novos materiais",
          "Para aumentar a poluição"
      ],
      correta: 1
  },
  {
      pergunta: "O que é reciclagem de circuito fechado?",
      respostas: [
          "Um processo que envolve a reciclagem de materiais eletrônicos sem a necessidade de separação",
          "Um processo que não envolve a reciclagem de eletrônicos",
          "Um processo exclusivo para reciclagem de plásticos"
      ],
      correta: 0
  },
  {
      pergunta: "Quais são os benefícios econômicos do descarte adequado de lixo eletrônico?",
      respostas: [
          "Aumento dos custos de produção de eletrônicos",
          "Criação de empregos na indústria de reciclagem",
          "Redução do preço dos eletrônicos"
      ],
      correta: 1
  },
  {
      pergunta: "O que você deve fazer antes de descartar um dispositivo eletrônico?",
      respostas: [
          "Nada, basta jogá-lo fora",
          "Remover a bateria",
          "Desmontar completamente o dispositivo"
      ],
      correta: 1
  },
  {
      pergunta: "O que é a diretiva WEEE?",
      respostas: [
          "Uma organização de conservação ambiental",
          "Uma diretiva da União Europeia sobre o descarte de lixo eletrônico",
          "Uma empresa de reciclagem de eletrônicos"
      ],
      correta: 1
  },
  {
      pergunta: "Quais são as alternativas sustentáveis ao descarte de eletrônicos?",
      respostas: [
          "Doar eletrônicos usados",
          "Jogá-los no lixo comum",
          "Queimá-los"
      ],
      correta: 0
  }
];

/*const perguntas = [
    {
      pergunta: "Qual é a finalidade do comando 'console.log()' em JavaScript?",
      respostas: [
        "Exibir uma mensagem de erro",
        "Imprimir dados no console",
        "Criar uma variável"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em comparações em JavaScript?",
      respostas: [
        "Comparação de valores sem considerar o tipo",
        "Atribuição de valores",
        "Comparação estrita de valores e tipos"
      ],
      correta: 2
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let myVar;",
        "const myVar = 10;",
        "ambas as opções acima estão corretas"
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um bloco de código reutilizável",
        "Uma variável global"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Nenhuma, são sinônimos",
        "let é usado para valores constantes, const para variáveis",
        "let permite reatribuição, const cria variáveis imutáveis"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um método de criptografia",
        "Um modelo de objeto para manipular documentos HTML",
        "Uma linguagem de programação"
      ],
      correta: 1
    },
    {
      pergunta: "Como se realiza uma iteração sobre os elementos de um array em JavaScript?",
      respostas: [
        "Usando a estrutura 'if-else'",
        "Com a declaração 'switch'",
        "Utilizando loops como 'for' ou 'forEach'"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Um método de formatação de texto",
        "Uma linguagem de estilização",
        "Um formato de dados leve e intercambiável"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
      respostas: [
        "São iguais, usados de forma intercambiável",
        "'null' representa a ausência de valor, 'undefined' é atribuído explicitamente",
        "Ambos representam valores vazios"
      ],
      correta: 1
    },
    {
      pergunta: "Como se adiciona um evento a um elemento HTML usando JavaScript?",
      respostas: [
        "Apenas com CSS",
        "Usando o atributo 'event'",
        "Através do método 'addEventListener'"
      ],
      correta: 2
    },
  ];*/

  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')

  //Remover imagem
  const imagem = document.querySelector('.img')
  imagem.remove()

  const corretas = new Set()
  const totalDeAcertos = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDeAcertos
  
  //Loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
   
    for (let resposta of item.respostas ) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
         
        corretas.delete(item)
       if (estaCorreta) {
         corretas.add(item)
       }
       mostrarTotal.textContent = corretas.size + ' de ' + totalDeAcertos
      } 

      quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    // Coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }

  