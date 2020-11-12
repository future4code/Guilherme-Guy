import { Request, Response } from "express";
import getUserByIdData from "../data/getUserByIdData"
export default async function getUserById(
   req: Request,
   res: Response
) {
   try {
      const user = await getUserByIdData(req.params.id)
      if (!user) {
         throw new Error("Usuário não encontrado")
      }
      if (user.role === "ADMIN") {
         throw new Error("Não autorizado")
      }
   
      res.status(200).send({
         id: user.id,
         email: user.email,
         role: user.role
      })
   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage,
         auth: req.headers.auth
      })
   }
}