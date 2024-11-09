import blogModel from "../models/BlogModel.js";

// mostrar los regiatros
export const getAllBlogs= async(req,res)=>{
    try{
        const blogs=blogModel.findAll()
        res.json(blogs)
    }catch(error){
        res.json({message:error.message})
    }
}


// mostrar un registro 
// vamos a necsitar guardar en algun lado el regustro ya ingresado y ya capturado hacer la consulta en la base de datos para que este 
export const getBlog = async(req,res)=>{
    try{
        const blog= await blogModel.findAll({
            where:{
                no_registro:req.params.no_registro
            }
        })
        res.json(blog[0])
    }catch(error){

        res.json({message:error.message})

    }
}
// este igual puede que se use 

export const updateblog= async(req, res)=>{

    try{
        await blogModel.update(req.body,{
            where:{no_registro: req.params.no_registro}
        })
        res.json({message:"registro actualizado correctamnete"})

    }catch(error){
        res.json({message:error.message})

    }


}






// crear unn registro
export const createBlog = async(req, res)=>{

    try{
        await blogModel.create(req.body);
        res.json({message:"registro creado correctamnte"})
    }catch(error){
        res.json({message:error.message})

    }
}


// eliminar un registro 

export const delateblog = async(req,res)=>{
    try{
        await blogModel.update(req.body,{
            where:{no_registro: req.params.no_registro}
        })
        res.json({message:"registro se ha borrado correctamnte"})
    }catch(error){
        res.json({message:error.message})

    }
}
