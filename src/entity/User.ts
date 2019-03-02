import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class User extends BaseEntity{

    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    firstName: string;

    @Field()
    @Column()
    lastName: string;

    @Field()
    @Column('text', { unique: true })
    email: string;

    @Field()
    name: string

    @Column()
    password: string;
}