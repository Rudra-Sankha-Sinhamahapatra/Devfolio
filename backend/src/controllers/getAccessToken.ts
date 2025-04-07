import { Request, Response } from "express"
import { clientId, clientsecret } from "../config/config"

export const getAccessToken = async(req:Request,res:Response)=>{
    console.log(req.query.code)
  
    const params = "?client_id="+clientId+"&client_secret="+clientsecret+"&code="+req.query.code
    await fetch("https://github.com/login/oauth/access_token"+params,{
        method:"POST",
        headers:{
            "Accept":"application/json"
        }
    }).then((response)=>response.json()).then((data)=>{
        console.log(data)
        res.json(data)
    })
  
  }