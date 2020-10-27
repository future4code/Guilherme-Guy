import express, {Express,Request,Response } from "express"
import cors from "cors"
import {countries,country} from "./countries"
// import { convertTypeAcquisitionFromJson } from "typescript"



const app:Express = express()
app.use(cors())
app.get("/countries/all", (req:Request, res: Response)=> {
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
      }))
    res.status(200).send(result)
})



//  app.get('/test/hello', (req: Request, res: Response) => {
//     res.send(`Olá, mundo!`)
//    })
// app.get('/test/:number', (req: Request, res: Response) => {
//     res.send(
//     `Seu número da sorte é ${Number(req.params.number) + 3}!
//     `)
//    })
app.get("/countries/search", (req:Request, res:Response)=> {

let result: country[] = countries

if (req.query.name) {
   result = result.filter(
      country => country.name.includes(req.query.name as string)
   )
}

if (req.query.capital) {
   result = result.filter(
      country => country.capital.includes(req.query.capital as string)
   )
}

if (req.query.continent) {
   result = result.filter(
      country => country.continent.includes(req.query.continent as string)
   )
}

if(result.length) {
    res.status(200).send(result)
    
    } else {
    res.status(404).send("Not found") }

// res.status(200).send(result)
        
})



app.get("/countries/:id", (req:Request, res:Response)=>{
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    )
    if (result) {
        res.status(200).send(result)
     } else {
        res.status(404).send("Not found")
     }

    
    // res.status(200).send(result)
})

app.put("countries/edit/:id", (req:Request, res:Response)=>{
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    )
    if (result) {
        res.status(200).send(result)
     } else {
        res.status(404).send("Not found")
     }

    
    // res.status(200).send(result)
})
// app.delete("/countries/:id", (req:Request, res:Response) =>{
//     try {
//         let errorCode:number = 400
//         if(!req.headers.authorization){
//             errorCode = 401
//             throw new Error()
//         }
// const countryIndex: number = countries.findIndex(
//     (country) => country.id === Number(req.params.id)
// )
// if(countryIndex === -1) {
//     errorCode = 404
//     throw new Error()
// }
// countries.splice( result ,1)
// res.status(200).end()
//     }catch (error) {
// res.end()
//     };
// })
app.listen(3003, ()=> {
    console.log("Servidor rodando na porta 3003")
})