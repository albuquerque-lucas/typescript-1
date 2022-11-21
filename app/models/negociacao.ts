export class Negociacao {

    private _quantidade;
    private _valor;
    private _data;

    constructor(data, quantidade, valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

}