import db from "../../prisma/connection";
import {request, response} from "express"

export const user_create = async(req = request, res = response)=>{
    try{
        const data = await req.body;
        const createUser = await db.users.create({
            data : data
        });
    }
    catch(error){
        
    }
}