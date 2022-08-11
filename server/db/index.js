import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: "jonnyabrams",
  host: "localhost",
  database: "yulp",
  port: 5432,
});

export default {
  query: (text, params) => pool.query(text, params),
};
