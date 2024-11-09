// Classe Heroi genérica
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

   // Método que exibe a mensagem de ataque
  atacar() {
    let ataque;

     // Estrutura de decisão para determinar o tipo de ataque
    switch (this.tipo) {
      case 'Guerreiro':
        ataque = 'usou espada';
        break;
      case 'Mago':
        ataque = 'usou magia';
        break;
      case 'Assassino':
        ataque = 'usou arco e flecha';
        break;
      case 'Malandro':
        ataque = 'usou adaga';
        break;
      case 'Sacerdote':
        ataque = 'usou magia sagrada';
        break;
      default:
        ataque = 'realizou um ataque indefinido';
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de criação dos heróis e ataque
const guerreiro = new Heroi('Thorgar', 10, 'Guerreiro');
const mago = new Heroi('Eldrin', 12, 'Mago');
const assassino = new Heroi('Sombra', 15, 'Assassino');
const malandro = new Heroi('Finn', 8, 'Malandro');
const sacerdote = new Heroi('Liora', 11, 'Sacerdote');

// Testando os ataques + mensagem
guerreiro.atacar();//O Guerreiro atacou usando usou espada
mago.atacar();//O Mago atacou usando usou magia
assassino.atacar();//O Assassino atacou usando usou arco e flecha
malandro.atacar();//O Malandro atacou usando usou adaga
sacerdote.atacar();//O Sacerdote atacou usando usou magia sagrada
