import Router from "koa-router";
import { createQueryBuilder, getConnection, Like } from "typeorm";
import { Employee } from '../entity/Employee';
import { Salary } from '../entity/Salaries';

export const EmployeeController = new Router({
  prefix: '/api/employees'
});

// EmployeeController.get('/', async (ctx, next) => {
//   // const connection = await createConnection();
//   let scheduleRepository = getConnection().getRepository(Employee);
//   let scheduleList = await scheduleRepository.find({ take: 10 });
//
//   // response type : application/json
//   ctx.body = scheduleList;
// });

EmployeeController.get('/search', async (ctx, next) => {
  const params = ctx.query;

  let employeeRepository = getConnection().getRepository(Employee);
  // let employees = await employeeRepository.find({
  //   where: {
  //     'last_name': Like(`${params.name}%`)
  //   },
  //   take: 1
  // });

  // let employees2 = await employeeRepository
  // .createQueryBuilder()
  // .select('*')
  // .innerJoin(
  //   query => {
  //     return query
  //     .from(Salary, 'salary')
  //     .select('*')
  //   },
  //   'employees.emp_no = salaries.emp_no'
  // ).where("last_name like :name", {name: '%' + params.name + '%' }).getRawOne();


  const employeeWithSalary = await getConnection().query('SELECT employee.*, salary.salary, salary.from_date, salary.to_date FROM employees employee LEFT JOIN salaries salary ON salary.emp_no = employee.emp_no LIMIT 10');

  // response type : application/json
  ctx.body = employeeWithSalary;
});
