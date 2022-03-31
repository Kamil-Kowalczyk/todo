import { Component, OnInit } from '@angular/core';
import { TODOS } from 'src/todoList';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }
   todos = TODOS;
  ngOnInit(): void {
  }

}
