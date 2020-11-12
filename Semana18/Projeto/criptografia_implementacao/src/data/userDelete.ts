import { connection } from "../index";


export const deleteUser = async (id: string): Promise<any> => {
    await connection
      .delete()
      .from("User")
      .where({ id });
  }