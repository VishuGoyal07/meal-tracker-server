import { getIngredients ,deleteIngredient} from "../db";

export const deleteIngredientRoute={
    method:'delete',
    path:'/ingredients/:name',
    handler:async(req,res)=>{
         const {name}=req.params;
         console.log(name);
         await deleteIngredient(name);
         const updatedIngredients=await getIngredients();
         res.status(200).json(updatedIngredients);
    }

};