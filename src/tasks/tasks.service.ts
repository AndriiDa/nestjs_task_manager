import { Injectable, NotFoundException } from "@nestjs/common";
import { Task, TaskStatus } from "./task.model";
import * as uuid from "uuid/v1";
import { CreateTaskDTO } from "src/dto/create-task.dto";
import { GetTaskFilterDTO } from "src/dto/get-task-filter.dto";

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    console.log(this.tasks);
    return this.tasks;
  }

  getTaskWithFilters(filterDTO: GetTaskFilterDTO): Task[] {
    const { status, search } = filterDTO;

    console.log(this.getAllTasks());
    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter(task => task.status === status);
    }

    if (search) {
      console.log(tasks);
      tasks = tasks.filter(task => {
        console.log(task.title, task.description);
        return task.title.includes(search) || task.description.includes(search);
      });
    }
    return tasks;
  }

  getTaskById(id: string) {
    const found = this.tasks.find(task => task.id === id);

    if (!found) {
      new NotFoundException();
    }
    console.log(new NotFoundException(`Task with id: ${id} not found`));
    return found;
  }

  createTask(createTaskDTO: CreateTaskDTO): Task {
    const { title, description } = createTaskDTO;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN
    };

    this.tasks.push(task);
    return task;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}
