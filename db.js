import {Pool} from "pg";

const pool = new Pool({
    user : "postgres",
    host : "localhost",
    database : "crud_db",
    password : "123",
    post : "5432"
})

export default pool;