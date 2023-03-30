import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { TodoListEntity } from './todolist.entity';

export interface TodoListRo {
  list: TodoListEntity[];
}
@Injectable()
export class TodoListService {
  constructor(
    @InjectRepository(TodoListEntity)
    private readonly todolistRepository: Repository<TodoListEntity>,
  ) {}

  // 创建一条Todo
  async create(post: Partial<TodoListEntity>): Promise<TodoListEntity> {
    return await this.todolistRepository.save(post);
  }

  // 获取全部Todo
  async findAll(query): Promise<TodoListRo> {
    const qb = await getRepository(TodoListEntity).createQueryBuilder('post');
    qb.where('1 = 1');
    qb.orderBy('post.create_time', 'DESC');

    const { pageNum = 1, pageSize = 10, ...params } = query;
    qb.limit(pageSize);
    qb.offset(pageSize * (pageNum - 1));

    const posts = await qb.getMany();
    return { list: posts };
  }

  // 更新文章
  async updateById(id, post): Promise<TodoListEntity> {
    const existPost = await this.todolistRepository.findOne(id);
    if (!existPost) {
      throw new HttpException(`id为${id}的文章不存在`, 401);
    }
    const updatePost = this.todolistRepository.merge(existPost, post);
    return this.todolistRepository.save(updatePost);
  }

  // 刪除文章
  async remove(id) {
    const existPost = await this.todolistRepository.findOne(id);
    if (!existPost) {
      throw new HttpException(`id为${id}的文章不存在`, 401);
    }
    return await this.todolistRepository.remove(existPost);
  }
}
