import { CreateTodoDto } from './dto/create-todo.dot';
import { TodoListService, TodoListRo } from './todolist.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Todolist')
@Controller('todo')
export class TodoListController {
  constructor(private readonly todoListService: TodoListService) {}

  /**
   * 创建Todo
   * @param post
   */
  @ApiOperation({ summary: '创建Todo' })
  @Post()
  async create(@Body() post: CreateTodoDto) {
    return await this.todoListService.create(post);
  }

  /**
   * 获取所有Todo
   */
  @ApiOperation({ summary: '获取所有Todo' })
  @Get()
  async findAll(@Query() query): Promise<TodoListRo> {
    return await this.todoListService.findAll(query);
  }

  /**
   * 更新一条Todo的状态
   * @param id
   * @param post
   */
  @ApiOperation({ summary: '根据Id更新一条Todo的状态' })
  @Post(':id')
  async update(@Param('id') id, @Body() post) {
    return await this.todoListService.updateById(id, post);
  }

  /**
   * 删除一条Todo
   * @param id
   */
  @ApiOperation({ summary: '根据Id删除Todo' })
  @Delete('id')
  async remove(@Param('id') id) {
    return await this.todoListService.remove(id);
  }
}
