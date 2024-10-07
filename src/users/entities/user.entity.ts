import { Column, Table, Model, DataType } from 'sequelize-typescript';
import { Exclude } from 'class-transformer';

@Table({
    tableName: 'users',
})
export class User extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    @Exclude()
    password: string;
}