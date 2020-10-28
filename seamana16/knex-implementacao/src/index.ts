import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import knex from 'knex'
import dotenv from "dotenv"
import { searchActorByName } from "./data/searchActorByName"
import { searchActorById } from "./data/searchActorById"
import { countActorsByGender } from "./data/countActorsByGender"
import { updateActorSalary } from "./data/updateActorSalary"
import { deleteActor } from "./data/deleteActor"
import { avgSalaryByGender } from "./data/avgSalaryByGender"

dotenv.config()

console.log(process.env.teste)

export const connection = knex({	// Estabelece conexão com o banco
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})



const app: Express = express();

app.use(express.json());
app.use(cors())

app.get("/actor/:id", async (req: Request, res: Response) => {
   try {
     const id = req.params.id;
     const actor = await searchActorById(id);
 
     res.status(200).send(actor)
   } catch (err) {
     res.status(400).send({
       message: err.message,
     });
   }
 });



// app.get("/pokemon/all", getAllPokemons);

// app.post("/pokemon/new", createPokemon);

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});

// searchActorByName("Solange Frazão")
// searchActorById("001")
// countActorsByGender("female")
// updateActorSalary("001", 500)
// deleteActor("001")
// avgSalaryByGender("male")


