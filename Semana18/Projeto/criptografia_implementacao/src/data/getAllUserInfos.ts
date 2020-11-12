import { connection } from "..";
export default async function getAllUserInfos(id: string): Promise <any> {
    const result = await connection
        .select("*")
        .from("User")
        .where({ id });
    return result[0];
} 