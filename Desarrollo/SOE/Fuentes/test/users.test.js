const axios = require('axios');
const Users = require('./users');

jest.mock('axios');

test('Busca un usuario', () => {
  const listado = axios.get('/users.json');
  const users = [{
    "id": "12eb1ffb-90be-400b-b863-8f1bfdcc7376",
    "nombre": "qwe",
    "email": "qwe@gmail.com",
    "contrasenia": "$2b$10$C/jqpTuJeGGdc2VUqR08NuJ/4HNKIwHbRfyyY4QL84RuOX6GRnvi."  
  }];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);
  return Users.all().then(data => expect(data).toEqual(listado));
});