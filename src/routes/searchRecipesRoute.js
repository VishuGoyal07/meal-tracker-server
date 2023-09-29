import {searchRecipes} from '../db';
export const searchRecipesRoute={
    method:'get',
    path:'/recipes',
    handler:async(req,res)=>{
       try {
            const searchString=req.query.search;
            const results=await searchRecipes(searchString);
            res.status(200).json(results);
       } catch (error) {
            console.log(error);
       }
    },

};