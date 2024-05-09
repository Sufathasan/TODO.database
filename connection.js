const mysql = require('mysql2');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 's1i2f3a4T5@',
  database: 'tododb'
})
 mysqlConnection.connect((err)=>{
  if(err) {
   console.log('Error in DB connection: '+JSON.stringify(err,undefined,2));

  } else {

console.log('DB connected successfully')
  }
})
module.exports=mysqlConnection;
