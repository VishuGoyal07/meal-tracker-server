import {db} from './db';


export const deleteIngredient=async(ingredientName)=>{
    const connection=await db.getConnection();
    console.log(ingredientName);
    await connection.collection('ingredients')
    .deleteOne({name:ingredientName});
}