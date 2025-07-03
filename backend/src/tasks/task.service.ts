import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schemas/task.schema';
import { CreateTaskDto, UpdateTaskDto, TaskResponseDto } from './dto/task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<TaskResponseDto> {
    const createdTask = new this.taskModel(createTaskDto);
    const savedTask = await createdTask.save();
    return this.toResponseDto(savedTask);
  }

  async findAll(): Promise<TaskResponseDto[]> {
    const tasks = await this.taskModel.find().exec();
    return tasks.map((task) => this.toResponseDto(task));
  }

  async findByUserId(userId: string): Promise<TaskResponseDto[]> {
    const tasks = await this.taskModel.find({ userId }).exec();
    return tasks.map((task) => this.toResponseDto(task));
  }

  async findOne(id: string): Promise<TaskResponseDto> {
    const task = await this.taskModel.findById(id).exec();
    if (!task) {
      throw new Error('Task not found');
    }
    return this.toResponseDto(task);
  }

  async update(
    id: string,
    updateTaskDto: UpdateTaskDto,
  ): Promise<TaskResponseDto> {
    const updatedTask = await this.taskModel
      .findByIdAndUpdate(id, updateTaskDto, { new: true })
      .exec();

    if (!updatedTask) {
      throw new Error('Task not found');
    }
    return this.toResponseDto(updatedTask);
  }

  async remove(id: string): Promise<void> {
    const result = await this.taskModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new Error('Task not found');
    }
  }

  private toResponseDto(task: TaskDocument): TaskResponseDto {
    return {
      _id: task._id?.toString() || task.id,
      title: task.title,
      description: task.description,
      completed: task.isCompleted,
      userId: task.userId,
      dueDate: task.dueDate,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,
    };
  }
}
