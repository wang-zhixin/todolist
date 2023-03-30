import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TodoListEntity } from './todolist.entity';
import { TodoListController } from './todolist.controller';
import { TodoListService } from './todolist.service';

@Module({
  imports: [TypeOrmModule.forFeature([TodoListEntity])],
  controllers: [TodoListController],
  providers: [TodoListService],
})
export class TodoListModule {}
