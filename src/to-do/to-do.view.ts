import { ToDo } from "./to-do.model";

export class TodoView {
  form: HTMLFormElement;
  input: HTMLInputElement;
  ul: HTMLUListElement;
  constructor() {
    this.form = document.querySelector("form")!;
    this.input = document.querySelector("input")!;
    this.ul = document.querySelector("ul")!;
  }

  bindSubmit(callback: Function) {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      const todo: ToDo = { content: this.input.value, id: 0, isFinish: false };
      callback(todo);
    });
  }

  render(toDos: ToDo[]) {
    this.ul.innerHTML = "";
    toDos.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.content;
      this.ul.appendChild(li);
    });
  }
}
