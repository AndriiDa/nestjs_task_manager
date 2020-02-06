import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDTO } from "src/tasks/dto/create-task.dto";
import { GetTaskFilterDTO } from "src/tasks/dto/get-task-filter.dto";
import { TaskStatusValidationPipe } from "./pipes/task-status-validation.pipe";

@Controller("tasks")
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getTasks(@Query(ValidationPipe) filterDTO: GetTaskFilterDTO): Task[] {
  //   if (Object.keys(filterDTO).length) {
  //     console.log(filterDTO);
  //     return this.tasksService.getTaskWithFilters(filterDTO);
  //   } else {
  //     console.log(this.tasksService.getAllTasks());
  //     return this.tasksService.getAllTasks();
  //   }
  // }

  // @Get("/:id")
  // getTaskById(@Param("id") id: string) {
  //   return this.tasksService.getTaskById(id);
  // }

  // @Post()
  // @UsePipes(ValidationPipe)
  // createTask(@Body() createTaskDTO: CreateTaskDTO): Task {
  //   return this.tasksService.createTask(createTaskDTO);
  // }

  // @Delete("/:id")
  // deleteTask(@Param("id") id: string): void {
  //   this.tasksService.deleteTask(id);
  // }

  // @Patch("/:id/status")
  // updateTaskStatus(
  //   @Param("id") id: string,
  //   @Body("status", TaskStatusValidationPipe) status: TaskStatus
  // ): Task {
  //   return this.tasksService.updateTaskStatus(id, status);
  // }
}
