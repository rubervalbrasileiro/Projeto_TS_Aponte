import { Titulo } from "./Titulo.js"


export class Filme extends Titulo{
   private _diretor?: string

    constructor(nome: string, anoDeLancamento: number, genero: string, diretor: string,) {
        super(nome, anoDeLancamento, genero) // este sempre primeiro
        this._diretor = diretor // obedecer sempre esta ordem
    }

   get diretor(): string| undefined {
       return this._diretor
   }


   set diretor(diretor: string) {
       this._diretor = diretor
   }

   public mostrarFicha(): void {
    super.mostrarFicha()
        console.log(`Diretor: ${this.diretor}\n`)
   }

   

}


