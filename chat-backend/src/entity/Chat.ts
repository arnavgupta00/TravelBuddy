import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  room: string | undefined;

  @Column()
  username: string | undefined;

  @Column()
  message: string | undefined;

  @CreateDateColumn()
  timestamp: Date | undefined;
}
