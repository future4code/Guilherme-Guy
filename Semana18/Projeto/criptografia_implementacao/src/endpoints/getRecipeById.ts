import { Request, Response } from "express";
import selectRecipeById from "../data/selectRecipeById";
import selectTaskById from "../data/selectRecipeById";
import { AuthenticationData, getTokenData } from "../services/authenticator";

export default async function getRecipeById(
   req: Request,
   res: Response
) {
   try {
      const result = await selectRecipeById(req.params.id)

      const token: string = req.headers.authorization as string
      const tokenData: AuthenticationData = getTokenData(token)

      if(!tokenData) {
         res.statusCode = 401
         throw new Error ( "não autorizado")
      }

      if (!result) {
         throw new Error("Receita não encontrada")
      }

      res.status(200).send({
         id: result.id,
         title: result.title,
         description: result.description,
         createdAt: result.createdAt
        
      })

   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage
      })
   }
}