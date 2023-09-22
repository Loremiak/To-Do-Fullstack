import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
  private todosData = [];

  getTasks(): Task[] {
    return this.todosData;
  }

  createTask(task: Task): Task {
    const newTask = {
      id: uuidv4(),
      ...task,
    };
    this.todosData = [...this.todosData, newTask];
    return newTask;
  }

  deleteTask(id: string): Task {
    const taskToDelete = this.todosData.find((task) => task.id === id);
    this.todosData = this.todosData.filter((task) => task.id !== id);
    return taskToDelete;
  }

  updateTask(id: string, done: boolean): Task {
    this.todosData = this.todosData.map((task) =>
      task.id === id ? { ...task, done } : task,
    );
    return this.todosData.find((task) => task.id === id);
  }
}
