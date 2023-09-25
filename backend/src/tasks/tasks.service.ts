import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
  private tasksList = [];

  getTasks(): Task[] {
    return this.tasksList;
  }

  createTask(task: Task): Task {
    const newTask = {
      id: uuidv4(),
      ...task,
    };
    this.tasksList = [...this.tasksList, newTask];
    return newTask;
  }

  deleteTask(id: string): Task {
    const taskToDelete = this.tasksList.find((task) => task.id === id);
    this.tasksList = this.tasksList.filter((task) => task.id !== id);
    return taskToDelete;
  }

  updateTask(id: string, done: boolean): Task {
    this.tasksList = this.tasksList.map((task) =>
      task.id === id ? { ...task, done } : task,
    );
    return this.tasksList.find((task) => task.id === id);
  }
}
