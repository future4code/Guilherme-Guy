import express from 'express'
import knex from 'knex'
import cors from 'cors'
import dotenv from 'dotenv'
import createUser from './endpoints/createUser'
import getUserById from './endpoints/getUserById'
import editUser from './endpoints/editUser'
import createTask from './endpoints/createRecipe'
import getTaskById from './endpoints/getRecipeById'
import login from './endpoints/login'
import { deleteUserById } from './endpoints/userDelete'
import { resetPassword } from './endpoints/resetPassword'
import getAllUserInfos from './data/getAllUserInfos'
import getUserInfo from './endpoints/getUserInfo'
import createRecipe from './endpoints/createRecipe'
import getRecipeById from './endpoints/getRecipeById'

dotenv.config()
export const connection = knex({
   client: 'mysql',
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 3306
   }
})
const app = express()
app.use(express.json())
app.use(cors())
app.get("/user/profile/:id",getUserById)


app.get("/user/info", getUserInfo)
app.post('/user/signup', createUser)
app.post("/user/login", login)
app.post('/user/password/reset', resetPassword)

app.delete("/user/delete/:id" , deleteUserById) 
// app.get('/user/:id', getUserById)
app.post('/user/edit', editUser)
app.put('/recipe', createRecipe)
app.get('/recipe/:id', getRecipeById)
app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})