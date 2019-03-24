import Router from "koa-router";
import { getConnection, Like } from "typeorm";
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

  let scheduleRepository = getConnection().getRepository(Employee);
  let scheduleList = await scheduleRepository.find({
    relations: ['salaries'],
    where: {
      'last_name': Like(`${params.name}%`)
    },
    take: 10
  });

  // let scheduleRepository = getConnection().getRepository(Salary);
  // let scheduleList = await scheduleRepository.find({
  //   where: {
  //     'emp_no': Like(`${params.name}%`)
  //   },
  //   take: 10
  // });
  console.log(scheduleList);

  // response type : application/json
  ctx.body = scheduleList;
});
