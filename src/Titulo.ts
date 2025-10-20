export class Titulo {
   private _nome: string;
   private _anoDeLancamento: number;
   private _genero: string;
   private _duracaoEmMinutos: number = 0
   private _incluidoNoPlano: boolean = false
   private _somaDasAvaliacoes: number = 0
   private _totalDeAvaliacoes: number = 0


   constructor(nome: string, anoDeLancamento: number, genero: string) {
           this._nome = nome;
           this._genero = genero;
           this._anoDeLancamento = anoDeLancamento;
   }


    get nome(): string {
       return this._nome
   }


    set nome(nome:string) {
       this._nome = nome
   }


    get anoDeLancamento(): number {
       return this._anoDeLancamento
    }


    set anoDeLancamento(anoDeLancamento: number) {
       this._anoDeLancamento = anoDeLancamento
   }


    get genero(): string {
       return this._genero
    }


    set genero(genero: string) {
       this._genero = genero
   }


   get duracaoEmMinutos(): number {
       return this._duracaoEmMinutos
    }


    set duracaoEmMinutos(duracaoEmMinutos: number) {
       this._duracaoEmMinutos = duracaoEmMinutos
   }


   get incluidoNoPlano(): boolean {
       return this._incluidoNoPlano
    }


   set incluidoNoPlano(incluidoNoPlano: boolean) {
       this._incluidoNoPlano = incluidoNoPlano
   }


   get somaDasAvaliacoes(): number {
       return this._somaDasAvaliacoes
    }


    set somaDasAvaliacoes(somaDasAvaliacoes: number) {
       this._somaDasAvaliacoes = somaDasAvaliacoes
   }


   get totalDeAvaliacoes(): number {
       return this._totalDeAvaliacoes
    }


    set totalDeAvaliacoes(totalDeAvaliacoes: number) {
       this._totalDeAvaliacoes = totalDeAvaliacoes
   }

   public mostrarFicha(): void {
       console.log(`Nome do Filme: ${this._nome}\nGênero: ${this._genero}\nAno de Lançamento: ${this._anoDeLancamento}`)
   }

}










