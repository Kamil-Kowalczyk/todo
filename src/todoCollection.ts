import {Todo} from "./todo";

export class TodoCollection{
    private _todoList : Todo [] = [];
    constructor(){}
    
    addElement(element : Todo){
        this.todoList.push(element);
    }

    get todoList() : Todo[]{
        return this._todoList;
    }
}