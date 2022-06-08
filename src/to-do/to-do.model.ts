export type ToDo = {
  id: number;
  content: string;
  isFinish: boolean;
};

export class ToDoModel {
  private storage: ToDo[] = [];
  private handleUpdate: Function = new Function();

  addToDo = (input: ToDo): void => {
    this.storage = [...this.storage, input];
    this.handleUpdate(this.storage);
  };

  bindUpdate = (callback: Function) => {
    this.handleUpdate = callback;
  };
}
