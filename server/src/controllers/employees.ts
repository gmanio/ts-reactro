import Router from "koa-router";
import { getConnection, Like } from "typeorm";
import { Employee } from '../entity/Employee';

const EmployeeController = new Router({
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
  // const connection = await createConnection();
  const params = ctx.query;
  console.log(params);
  let scheduleRepository = getConnection().getRepository(Employee);
  let scheduleList = await scheduleRepository.find({
    where: {
      'first_name': Like(`${params.name}%`)
    },
    take: 10
  });

  // response type : application/json
  ctx.body = scheduleList;
});

export default EmployeeController.routes();
