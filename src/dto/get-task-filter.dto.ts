import { TaskStatus } from "../tasks/task.model";

export class GetTaskFilterDTO{
    status: TaskStatus;
    search: string;
}