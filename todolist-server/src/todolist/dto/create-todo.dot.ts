import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export class CreateTodoDto {
  @IsNumber()
  @ApiPropertyOptional({ description: '完成状态 1.已完成, 0.未完成' })
  readonly status: number;

  @IsNotEmpty({ message: '内容不能为空' })
  @IsString()
  @ApiProperty({ description: 'Todo内容' })
  readonly content: string;

  @IsBoolean()
  @ApiPropertyOptional({ description: '是否重要' })
  readonly star: boolean;

  @IsString()
  @ApiPropertyOptional({ description: '到期时间' })
  readonly expires: string;

  @IsString()
  @ApiPropertyOptional({ description: '分组' })
  readonly group: string;
}
