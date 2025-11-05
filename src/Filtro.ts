import type { IClassificacao } from "./IClassificacao.js";

export class Filtro {
    public filtrar(classificacao: IClassificacao) {
        if(classificacao.pegarClassificacao() >= 4) {
            return "Esta entre o preferido do momento\n";
        }else if(classificacao.pegarClassificacao() >= 2) {
            return "Muito bem avaliado no momento\n";
        }else{
            return "Acrescente a sua lista para assistir depois\n";
        }
    } 
}