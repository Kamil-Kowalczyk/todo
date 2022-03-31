import { Component, OnInit } from '@angular/core';
import { Todo } from "src/todo";
import { TodoCollection } from 'src/todoCollection';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  todo : Todo = new Todo("anything");

  addTodo(obj : Todo){

  }

  constructor() { }

  ngOnInit(): void {
  }

}
