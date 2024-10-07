import { Column, Table, Model, DataType } from 'sequelize-typescript';

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
        allowNull: false,
    })
    password: string;
}