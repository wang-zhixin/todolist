import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todo')
export class TodoListEntity {
  @PrimaryGeneratedColumn()
  id: number; // 标记为主列，值自动生成

  // 完成状态
  @Column({ default: 0 })
  status: number;

  // todo
  @Column({ default: '' })
  content: string;

  @Column({ default: false })
  star: boolean;

  @Column({ default: '' })
  expires: string;

  @Column({ default: '' })
  group: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_time: Date;
}
