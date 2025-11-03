import type { IClassificacao } from "./IClassificacao.js";


export class Epsodio implements IClassificacao  {
    private _numeroDoEpisodio:  number =0;
    private _tituloDoEpsodio: string = "Ouvidos para ouvir";
    private _serie: string = "The Chose";
    private _totalDeVisualizacoes: number = 0;
    
    //private _nomeEpsodio: string ="";
    //private _temporada: number =0;
    //private _sinopseCapitulo: string ="";

    get numeroDoEpisodio(): number {
        return this._numeroDoEpisodio;
    }

    set numeroDoEpisodio(numeroDoEpisodio: number) {
        this._numeroDoEpisodio = numeroDoEpisodio;
    }

    get serie(): string {
        return this._serie;
    }

    set serie(serie: string) {
        this._serie = serie;
    }

    get totalDeVisualizacoes(): number {
        return this._totalDeVisualizacoes;
    }

    set totalDeVisualizacoes(totalDeVisualizacoes: number) {
        this._totalDeVisualizacoes = totalDeVisualizacoes;
    }

    get tituloDoEpsodio(): string {
        return this._tituloDoEpsodio;
    }

    set tituloDoEpsodio(tituloDoEpsodio: string) {
        this._tituloDoEpsodio = tituloDoEpsodio;
    }

    get temporada(): number {
        return this.temporada;
    }

    set temporada(temporada: number) {
        this.temporada = temporada;
    }

    pegarClassificacao(): number {
        if(this._totalDeVisualizacoes > 500) {
            return 4.0
        }else if(this._totalDeVisualizacoes > 200) {
            return 3.0
        } else {
            return 2.0
        }
    }
}