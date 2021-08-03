export class Contato {

    private _nome :string;
    private _telefone :number;
    private _genero : string;
    private _dataNascimento : string;

    constructor(nome : string, telefone : number, genero : string, dataNascimento : string){
        this._nome = nome;
        this._telefone = telefone;
        this._genero = genero;
        this._dataNascimento = dataNascimento;
    }

    public getNome() : string{
        return this._nome;
    }

    public getTelefone() : number{
        return this._telefone;
    }

    public getGenero() : string{
        return this._genero;
    }

    public getDataNascimento() : string{
        return this._dataNascimento;
    }

    public setNome(nome : string) : void{
        this._nome = nome;
    }

    public setTelefone(telefone : number) : void{
        this._telefone = telefone;
    }

    public setGenero(genero : string) : void{
        this._genero = genero;
    }

    public setDataNascimento(dataNascimento : string ){
        this._dataNascimento = dataNascimento;
    }
    
}
