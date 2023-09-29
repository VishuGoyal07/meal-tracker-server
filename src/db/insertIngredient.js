import {db} from './db';
export const insertIngredient=async(ingredient)=>{
    const connection=await db.getConnection();
    await connection.collection('ingredients')
    .insertOne(ingredient);
}