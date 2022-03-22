const {createUser} = require('../index');
const { faker } = require('@faker-js/faker');


describe('prove use of the create user service', ()=>{
    
    test('working properly userServices ', () => { 
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
        expect(createUser(userFake)).toBe(userFake);
    }
    )
    test('missing or incorrect data ', () => {
        const userFakeWithoutEmail = {
            firstName: faker.name.firstName(),
            secondName: faker.name.firstName(),
            firstSurname: faker.name.lastName(),
            secondSurname: faker.name.lastName(),
            birthDate: faker.date.between('1900-01-01', '2000-01-01'),
            gender: "male",
            phoneNumber: faker.datatype.number({min: 1000000000})
        }
        const errorEmail = [
            {
              message: '"email" is required',
              path: [ 'email' ],
              type: 'any.required',
              context: { label: 'email', key: 'email' }
            }
          ]
        expect(createUser(userFakeWithoutEmail)).toEqual(errorEmail);
     })
});

