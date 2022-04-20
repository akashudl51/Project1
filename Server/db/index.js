const { Pool } = require('pg')


const pool = new Pool({
  // user:process.env.PGUSER
  })
  
module.exports = {
  query: (text, params) => pool.query(text, params),
}