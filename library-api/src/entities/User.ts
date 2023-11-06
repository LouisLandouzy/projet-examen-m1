// /* eslint-disable import/no-cycle */
// import {
//   BaseEntity,
//   Column,
//   Entity,
//   OneToMany,
//   PrimaryGeneratedColumn,
// } from 'typeorm';
// import { Book } from './Book';

// export type UserId = string & { __brand: 'User' };

// @Entity('Users')
// export class User extends BaseEntity {
//   @PrimaryGeneratedColumn('uuid')
//   id: UserId;

//   @Column()
//   firstName: string;

//   @Column()
//   lastName: string;

//   @Column()
//   photoUrl?: string;

//   @OneToMany(() => Book, (book) => book.user)
//   books: Book[];
// }
