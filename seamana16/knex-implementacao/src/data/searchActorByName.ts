import {connection} from "../index";

export const searchActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result[0][0], console.log(result[0][0])
  }

  


