import { Column, PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
class User {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column({
        length: 100
    })
    name: string

    @Column({
        length: 50
    })
    email: string

    @Column({
        length: 50
    })
    password: string

    @Column()
    age: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}

export {User}