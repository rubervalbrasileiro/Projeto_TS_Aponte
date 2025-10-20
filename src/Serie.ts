import { Titulo } from "./Titulo.js"   


export class Serie extends Titulo {
   private _temporadas: number = 0
   private _episodiosPorTemporada: number = 0
   private _ativa: boolean = false
   private _minutosPorEpisodios: number = 0

    constructor(nome: string, anoDeLancamento: number, genero: string, temporadas: number) {
              super(nome, anoDeLancamento, genero);
              this._temporadas = temporadas
    }

   get temporadas(): number {
       return this._temporadas
   }
   set temporadas(temporadas: number) {
       this._temporadas =  temporadas
   }


   get episodiosPorTemporada(): number {
       return this._episodiosPorTemporada
   }
   set episodiosPorTemporada(episodiosPorTemporada: number) {
       this._episodiosPorTemporada =  episodiosPorTemporada
   }

   get ativa(): boolean {
       return this._ativa
   }
   set ativa(ativa: boolean) {
       this._ativa =  ativa
   }


   get minutosPorEpisodios(): number {
       return this._minutosPorEpisodios
   }
   set minutosPorEpisodios(minutosPorEpisodios: number) {
       this._minutosPorEpisodios =  minutosPorEpisodios
   }

   override mostrarFicha(): void {
        console.log(`Nome da Série: ${this.nome}\nGênero: ${this.genero}\nAno de Lançamento: ${this.anoDeLancamento}\nEpsisódios: ${this.temporadas}\nAtiva: ${this.ativa}\n`)
   }
}
