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

@Controller('todo')
export class TodoListController {
  constructor(private readonly todoListService: TodoListService) {}

  /**
   * 创建文章
   * @param post
   */
  @Post()
  async create(@Body() post) {
    console.log(post, 'post');
    return await this.todoListService.create(post);
  }

  /**
   * 获取所有文章
   */
  @Get()
  async findAll(@Query() query): Promise<TodoListRo> {
    return await this.todoListService.findAll(query);
  }

  /**
   * 更新文章
   * @param id
   * @param post
   */
  @Post(':id')
  async update(@Param('id') id, @Body() post) {
    return await this.todoListService.updateById(id, post);
  }

  /**
   * 删除
   * @param id
   */
  @Delete('id')
  async remove(@Param('id') id) {
    return await this.todoListService.remove(id);
  }
}
