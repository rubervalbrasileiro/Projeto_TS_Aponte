import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { IsEmail, Length } from "class-validator";
import { Curso } from "./Curso";

@Entity("alunos")
export class Aluno {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 70})
    @Length(3, 70)
    nome!: string;

    @Column({length: 14, unique: true})
    @Length(11, 14)
    cpf!: string;

    @Column()
    idade!: number;

    @Column({length: 100})
    @IsEmail()
    email!: string;

    @Column({length: 15, nullable: true})
    @Length(11, 15)
    telefone!: string;

    @ManyToOne(() => Curso, (curso) => curso.alunos, {eager: true})
    @JoinColumn({name: "curso_id"})
    curso!: Curso
}
