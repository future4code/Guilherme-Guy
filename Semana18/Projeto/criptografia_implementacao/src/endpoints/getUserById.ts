import { Request, Response } from "express";
import getUserByIdData from "../data/getUserByIdData"
export default async function getUserById(
   req: Request,
   res: Response
) {
   try {
      const token: string = req.headers.authorization as string
      // const tokenData: AuthenticationData = getTokenData(token)

      const user = await getUserByIdData(req.params.id)
      if (!user) {
         throw new Error("Usuário não encontrado")
      }
      if (user.role === "ADMIN") {
         throw new Error("Não autorizado")
      }
   
      res.status(200).send({
         id: user.id,
         name: user.name,
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