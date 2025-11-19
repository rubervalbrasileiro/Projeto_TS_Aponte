
export class Conta_Bancaria{
private _numeroConta: number;  
private _titular: string;
private _saldo: number = 0;
private _ativa: boolean = true;

constructor(numeroConta: number, titular: string, saldo: number, ativa: boolean){
    this._numeroConta = numeroConta;
    this._titular = titular;
    this._saldo = saldo;
    this._ativa = ativa;
}

depositarValor(valor: number): void{
    if(valor <= 0) {
        console.log("Insira um valor válido");
    }
}

sacarValor(valor: number): void {
    let sacar: number;
    //if(sacar > this._saldo)
}

}