import productModel from "../models/productModel.js";

const showProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
const deleteProduct=async(req,res)=>{
  try{
    const id=req.params.id;
    const result=req.productModel({id:id});
    res.status(200).json(result);
  }
  catch(err){
    console.log(err);
  }
}
export { showProducts };
