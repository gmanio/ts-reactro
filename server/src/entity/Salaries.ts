import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import { Employee } from './Employee';

@Entity('salaries')
export class Salary {
  @PrimaryColumn()
  emp_no: number;
  @Column()
  salary: number;
  @Column()
  from_date: Date;
  @Column()
  to_date: Date;

  @ManyToOne(type => Employee, employee => employee.salaries)
  employee: Employee;
}
