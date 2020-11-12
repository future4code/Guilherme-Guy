import { connection } from "..";

export default async function insertRecipe(
    id: string,
    title: string,
    description: string,
    user_id: string
    
) {
    await connection('Recipes')
        .insert({
            id,
            title,
            description,
            user_id

        })
}