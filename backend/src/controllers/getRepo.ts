import { Request, Response } from "express"

export const getRepo = async (req:Request,res:Response)=>{
    const token=req.get("Authorization")
    console.log(token)
    await fetch("https://api.github.com/user/repos",{
        method:"GET",
        headers:{
            "Authorization":` ${token}`,
            "Accept":"application/json"
        }
    }).then((response)=>response.json()).then((data)=>{
        console.log(data)
        res.json(data)
    }).catch((err)=>{
        console.log(err)
    })
  }