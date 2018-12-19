var knex = require('knex')({
  client: 'pg',
  connection: {
    "user": "development",
  "password": "development",
  "database": "test_db",
  "hostname": "localhost"
  }
});


const input = process.argv.slice(2).toString()

knex.select('*').from('famous_people').where('first_name', input).then((results) => {

  var counter = 1;

  console.log('Searching ...');
  console.log('Found ' + results.length + ' person(s) by the name of ' + input);
  for (var x in results){
    console.log("- " + counter + ": " + results[x]['first_name'] + " " + results[x]['last_name'] + ", born " + results[x]['birthdate'].toString().substring(0,15));
    counter ++;
  }
}).finally(() => {knex.destroy()})
