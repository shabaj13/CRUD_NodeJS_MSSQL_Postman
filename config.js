const config = {
  user: 'sbj',
  password: '123456789',
  server: '127.0.0.1',
  database: 'eventmanagement',
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    instancename: 'SQLEXPRESS',  
    encrypt: false,
    trustServerCertificate: true,
  },
  port: 54334
}
module.exports = config