import { ToDoModel, ToDo } from "./to-do.model";
import { TodoView } from "./to-do.view";

export class ToDoController {
  constructor(private model: ToDoModel, private view: TodoView) {
    this.view.bindSubmit(this.handleToDo);
    this.model.bindUpdate(this.handleUpdate);
  }

  handleToDo = (todo: ToDo) => {
    this.model.addToDo(todo);
  };

  handleUpdate = (todos: ToDo[]) => {
    this.view.render(todos);
  };
}
