/**
 SELECT `employees`.`emp_no`,
 `employees`.`birth_date`,
 `employees`.`first_name`,
 `employees`.`last_name`,
 `employees`.`gender`,
 `employees`.`hire_date`
 FROM `employees`.`employees`;
 */

import {
  Entity,
  Column,
  PrimaryColumn, OneToOne, JoinColumn, ManyToMany, JoinTable, OneToMany, ManyToOne
} from "typeorm";

import { Salary } from './Salaries';

@Entity('employees')
export class Employee {
  @PrimaryColumn()
  emp_no: number;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column()
  gender: number;
  @Column()
  hire_date: string;

  @OneToMany(() => Salary, salary => salary.employee)
  @JoinColumn({ // todo: not yet fixed
    name: "emp_no"
  })
  public salaries: Salary[];
}
