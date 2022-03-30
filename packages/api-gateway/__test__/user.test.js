const tap = require('tap')
const HttpServer = require('../src/drivers/http/server');
const supertest = require('supertest')
const { faker } = require('@faker-js/faker');

tap.test('POST `/user` route', async (t) => {
    const userFake = {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        secondName: faker.name.firstName(),
        firstSurname: faker.name.lastName(),
        secondSurname: faker.name.lastName(),
        birthDate: faker.date.between('1900-01-01', '2000-01-01'),
        gender: "male",
        phoneNumber: faker.datatype.number({min: 1000000000})
    }
    const fastify = HttpServer
  
    t.teardown(() => fastify.close())
  
    await fastify.start()
  
    const response = await supertest(fastify.server)
      .post('/user')
      .send(userFake)
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
    t.same(response.body, userFake)
  })