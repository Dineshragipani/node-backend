import orderModel from "../models/orderModel.js";
const newOrder=async(req,res)=>{
    try{
        const body=req.body;
        const result=orderModel.create(body);
        res(200).json()

    }catch(err){
        console.log(err)
    }
    
}
