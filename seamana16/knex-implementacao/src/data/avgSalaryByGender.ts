import {connection} from "../index";



export const avgSalaryByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    return result[0].average, console.log(result[0].average,);
  };