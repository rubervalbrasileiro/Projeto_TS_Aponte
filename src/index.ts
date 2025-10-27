
/*export class Titulo {
nome: string;
anoDeLancamento: number;
genero: string;
duracaoEmMinutos: number;
incluidoNoPlano: boolean;
somaDasAvaliacoes: number;
totalDeAvaliacoes: number;

constructor (nomeFilme: string, anoDeLancamento: number, genero: string, duracaoEmMinutos: number, 
    incluidoNoPlano: boolean, somaDasAvaliacoes: number, totalDeAvaliacoes: number) {
    this.nome = nomeFilme;
    this.anoDeLancamento = anoDeLancamento;
    this.genero = genero;
    this.duracaoEmMinutos = duracaoEmMinutos;
    this.incluidoNoPlano = incluidoNoPlano;
    this.somaDasAvaliacoes = somaDasAvaliacoes;
    this.totalDeAvaliacoes = totalDeAvaliacoes;
}

}


const titulo = new Titulo("O poderoso chefão", 1970, "Drama", 180, true, 4.5, 1000);
console.log(titulo);

const titulo2 = new Titulo("Avatar", 2023, "Ficção Científica", 160, true, 4.7, 1500);
console.log(titulo2);*/


/*class Jogador {
  private _vida: number = 100;

  get vida() {
    return this._vida;
  }

  set vida(novaVida: number) {
    this._vida = novaVida;
  }
}

const j = new Jogador();
j.vida = 50;         // chama o set
console.log(j.vida); // chama o get*/


/*class ContaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  // Getter: só devolve o valor
  public getSaldo() {
    return this.saldo;
  }
}

const conta = new ContaBancaria(1000);
console.log(conta.getSaldo()); // ✅ 1000*/


/*class ContaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  public getSaldo() {
    return this.saldo;
  }

  public setSaldo(valor: number) {
    if (valor < 0) {
      console.log("Valor inválido!");
      return;
    }
    this.saldo = valor;
  }
}

const conta = new ContaBancaria(1000);
console.log(conta.getSaldo()); // 1000

conta.setSaldo(500);
console.log(conta.getSaldo()); // 500

conta.setSaldo(-100); // ❌ Valor inválido!*/


/*class ContaBancaria {
  private _saldo: number; // usamos _saldo para diferenciar do getter/setter

  constructor(saldoInicial: number) {
    this._saldo = saldoInicial;
  }

  // Getter: quando acessamos conta.saldo, ele chama isso "por baixo dos panos"
  get saldo(): number {
    return this._saldo;
  }

  // Setter: quando atribuirmos conta.saldo = valor, ele chama isso
  set saldo(valor: number) {
    if (valor < 0) {
      console.log("Valor inválido!");
      return;
    }
    this._saldo = valor;
  }
}

const conta = new ContaBancaria(1000);

// Chamando o getter
console.log(conta.saldo); // ✅ 1000

// Chamando o setter
conta.saldo = 500;
console.log(conta.saldo); // ✅ 500

// Tentando setar valor inválido
conta.saldo = -100; // ❌ "Valor inválido!"/*


/*class Pessoa {
  private _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  // Getter
  get nome(): string {
    return this._nome;
  }

  // Setter
  set nome(novoNome: string) {
    if (novoNome.length < 3) {
      throw new Error("O nome deve ter pelo menos 3 caracteres");
    }
    this._nome = novoNome;
  }
}

const p = new Pessoa("João");
console.log(p.nome);   // Usa o getter → "João"

p.nome = "Ana";        // Usa o setter
console.log(p.nome);   // → "Ana"

p.nome = "Li";         // Erro: nome curto demais*/


/*class Jogador {
  private _vida: number = 100;

  get vida() {
    return this._vida;
  }

  set vida(novaVida: number) {
    this._vida = novaVida;
  }
}

const j = new Jogador();
j.vida = 50;         // chama o set
console.log(j.vida); // chama o get*/

/*class Jogador {
  private _vida: number = 100;

  public setVida(novaVida: number) {
    this._vida = novaVida;
  }

  public getVida(): number {
    return this._vida;
  }
}

const j = new Jogador();
j.setVida(50); // aqui você chama o método "normal"
console.log(j.getVida());*/


/*class Jogador {
  private _vida: number = 100;

  get vida() {
    return this._vida;
  }

  set vida(novaVida: number) {
    this._vida = novaVida;
  }
}

const j = new Jogador();
j.vida = 50;         // aqui não é "chamar método", e sim atribuir
console.log(j.vida); // aqui não é "chamar função", e sim acessar como se fosse atributo*/


/*class Jogador {
  private _vida: number = 100;

  // getter/setter são opcionais
  get vida() {
    return this._vida;
  }

  // método comum
  ganharVida(qtd: number) {
    this._vida += qtd; // pode acessar porque está dentro da classe
  }

  // método comum
  levarDano(qtd: number) {
    this._vida -= qtd;
  }
}

const j = new Jogador();

// aqui fora, eu NÃO consigo acessar direto:
// j._vida  ❌ (erro, é privado)

// mas eu consigo chamar métodos públicos que alteram internamente:
j.ganharVida(20);
console.log(j.vida); // usa o getter => 120*/

/*class Jogador {
  private _vida: number = 100;

  ganharVida(qtd: number) {
    this._vida += qtd;
  }

  levarDano(qtd: number) {
    this._vida -= qtd;
  }

  mostrarVida() {
    return this._vida;
  }
}

const j = new Jogador();

// fora da classe eu não consigo acessar assim:
// j._vida = 200 ❌ (erro)

// mas consigo pedir para os métodos alterarem
j.ganharVida(50); 
console.log(j.mostrarVida()); // 150*/


/*class Jogador {
  private _vida: number = 100;

  get vida() {
    return this._vida;
  }

  set vida(novaVida: number) {
    this._vida = novaVida;
  }
}

const j = new Jogador();

// aqui fora, consigo alterar direto usando o SET
j.vida = 50;

// e consigo ler direto usando o GET
console.log(j.vida); // 50*/


/*export class Aluno {
  private _nome: string;
  private _idade: number;
  private _turno: string;
  private _nota: number = 0;
  private _somaDasNotas!: number;

  constructor(nome: string, idade: number, turno: string) {
    this._nome = nome;
    this._idade = idade;
    this._turno = turno;
  }

  get nome() {
    return this._nome;
  } 

  set nome(novoNome: string) {
    if (novoNome.length < 3) {
     console.log("O nome deve ter pelo menos 3 caracteres");
    }
  }

  get idade() {
    return this._idade;
  }

  set idade(novaIdade: number) {
    if (novaIdade < 0) {
       console.log("A idade não pode ser negativa");
    }
  }

  get turno() {
    return this._turno;
  } 

  set turno(novoTurno: string) {
    this._turno = novoTurno;
  }

  get nota() {    
    return this._nota;
  }

  set nota(novaNota: number) {
    if (novaNota < 0 || novaNota > 10) {
      console.log("A nota deve ser entre 0 e 10");
    }

    this._nota += novaNota;
    this._nota ++
}

get somaDasNotas() {
  return this._somaDasNotas;
}


public mediaNotas(): number {
  const media = this._nota / 3;
  return media;
}

}

const aluno = new Aluno("Luiz", 19, "Noturno");
aluno.nota = 8;
aluno.nota = 7
aluno.nota = 10

const media = aluno.mediaNotas();
console.log(`A média do aluno ${aluno.nome} é ${media}`);*/


import { Filme } from "./Filme.js"
import { Serie } from "./Serie.js"
import { Epsodio} from "./Epsodio.js"


const filme = new Filme("Alice no País das Maravilhas", 1951, "Animação", "Clyde Geronimi");
filme.duracaoEmMinutos = 120;
filme.incluidoNoPlano = true;
filme.mostrarFicha();
filme.avaliacoes(10);
filme.avaliacoes(9);
filme.avaliacoes(3);

const resultado = filme.pegarMedia().toFixed(1);
console.log(resultado);


const epsodio = new Epsodio("Chazan", 2025, "Infantil");

const serie = new Serie("American Horror Story", 2011, "Terror", 12);
serie.ativa = true;
serie.episodiosPorTemporada = 6;
serie.mostrarFicha();
epsodio.mostrarFicha();

