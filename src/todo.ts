export class Todo {
    private _name : string;
    private _isDone : boolean = false;

    constructor(name : string){
        this._name = name;
    }

    get name() : string{
        return this._name;
    }
    get isDone() : boolean{
        return this._isDone;
    }

    set name(name : string){
        this._name = name;
    }
    set isDone(isDone : boolean){
        this._isDone = isDone;
    }
}