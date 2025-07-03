export interface CreateTaskRequest {
  title: string;
  description?: string;
  userId: string;
  dueDate?: Date;
}

export interface UpdateTaskRequest {
  title?: string;
  description?: string;
  isCompleted?: boolean;
  dueDate?: Date;
}

export interface Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  userId: string;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface TaskForm {
  title: string;
  description: string;
  dueDate?: Date;
}
