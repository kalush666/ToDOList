import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsBoolean,
  IsDateString,
} from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsOptional()
  @IsDateString()
  dueDate?: Date;
}

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean;

  @IsOptional()
  @IsDateString()
  dueDate?: Date;
}

export class TaskResponseDto {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  userId: string;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}
