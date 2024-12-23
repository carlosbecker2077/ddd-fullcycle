// Entidade no DDD não é a entidade de objeto-relacionamento com o banco de dados
// A entidade precisa ser autovalidável e imutável e possuír um identificador para garantir que meu sistema seja consistente
// não faz sentido um cliente existir sem id no sistema, pois ele representa algo único

import Address from "./address";

// getters e setters não dizem nada e falta de expresividade mata o meu negócio.
// alterar ou consultar são regras de negócio e devem ter nomes claros que respeitem o negócio.
// o sistema deve ser modelado orientado a negócio e não a tecnologia. Problemas de técnologia são eventuais, são problemas que o desenvolvedor introduziu não que o negócio realmente possui

export default class Customer {
    _id: string;
    _name: string;
    _address!:Address
    _active: boolean = true

    constructor(id: string, name: string){
        this._id = id;
        this._name = name;
        this.validate();
    }

    validate() {
        if (this._name.length === 0) {
            throw new Error("Name is required")
        }
        if (this._id.length === 0) {
            throw new Error("Id is required")
        }
    }
    
    changeName(name: string) {
        this._name = name
    }

    activate() {
        this._active = true;
    }

    deactivate() {
        this._active = false
    }

    set Address(address: Address) {
        this._address = address;
    }
}