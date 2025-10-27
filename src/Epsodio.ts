import { Titulo } from "./Titulo.js"

export class Epsodio extends Titulo {
    private _nomeEpsodio: string ="";
    private _numeroDoEpsodio:  number =0;
    private _temporada: number =0;
    private _sinopseCapitulo: string ="";

    get nomeEpsodio(): string {
        return this.nomeEpsodio;
    }

    set nomeEpsodio(nomeEpsodio: string) {
        this._nomeEpsodio = nomeEpsodio;
    }

    get numeroDoEpsodio(): number {
        return this._numeroDoEpsodio;
    }

    set numeroDoEpsodio(numeroDoEpsodio: number) {
        this._numeroDoEpsodio = numeroDoEpsodio;
    }

    get temporada(): number {
        return this.temporada;
    }

    set temporada(temporada: number) {
        this._temporada = temporada;
    }
}