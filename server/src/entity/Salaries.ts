import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
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
  @JoinColumn({ // todo: not yet fixed
    name: "emp_no"
  })
  employee: Employee;
}
