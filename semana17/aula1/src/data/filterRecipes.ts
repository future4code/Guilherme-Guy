// import { connection } from "..";
// import { inputData, Recipe } from "../types/Recipe";

// export const filterRecipes = async(data: inputData): Promise<Recipe[]> => {
//     try {

//         const resuultPerPage: number = 5
//         const offset: number = resuultPerPage * (data.page - 1)

//         const result = await connection.raw(`
//         SELECT * FROM recipes_aula48
//         WHERE title LIKE "%${data.title}%"
//         ORDER BY ${data.orderBy} ${data.orderType}
//         LIMIT ${resuultPerPage}
//         OFFSET ${offset}
//         `)

//         return result[0]

//     } catch(e) {
//         throw new Error (e.sqlMessage)
//     }
// }