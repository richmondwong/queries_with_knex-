var knex = require('knex')({
  client: 'pg',
  connection: {
    "user": "development",
  "password": "development",
  "database": "test_db",
  "hostname": "localhost"
  }
});

const input = process.argv.slice(2, 5)

var newPerson = [
  {
  first_name: input[0],
  last_name:  input[1],
  birthdate: input[2]
  }
];

knex.select('*').from('famous_people').then((results) => {
  console.log('This is results', results)
  console.log("This is typeof: ", typeof results[0].birthdate)
  console.log(results[0].birthdate)
})

knex('famous_people').insert(newPerson).then(() => console.log("Data logged")).catch((err) => {console.log(err); throw err}).finally(() => {knex.destroy()});

