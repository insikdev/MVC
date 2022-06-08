import { ToDoController } from "./to-do/to-do.controller";
import { ToDoModel } from "./to-do/to-do.model";
import { TodoView } from "./to-do/to-do.view";

new ToDoController(new ToDoModel(), new TodoView());
