import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    subject: string;

    @Column()
    html: string;
}
