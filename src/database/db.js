import pg from 'pg'
const { Pool } = pg
 
const pool = new Pool()
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})
 
const client = await pool.connect()
const res = await client.query('SELECT * FROM users WHERE id = $1', [1])
console.log(res.rows[0])
 
client.release()