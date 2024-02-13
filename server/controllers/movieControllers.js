const Movie= require('../models/movie')
//@desc movie add role : user
//@methode post path:/movie/aadmovie
const addMovie = async(req,res)=>{
    try{
        const {title,desc,img}=req.body
        const userId = req.body.userId
        // console.log(userId)
        const newMovie= await Movie.create({title,desc,img,owner:userId})
        res.status(201).json({msg:"movie created",Movie:newMovie})
    }
    catch(err){
        res.status(500).json({msg:"something went wrong",err:err.message})
    }
}
//@desc movie find role : user
//@methode post path:/movie/getmovies

const getMovies = async(req,res)=>{
    try {
        const tasks= await Movie.find({owner: req.body.userId})
        res.status(200).json({msg:"get all movies",movies:movies})
    }
    catch(err){
        res.status(500).json({msg:"something went wrong",err:err.message})
    }
}
//@desc movie delete role : user
//@methode post path:/movie/getmovies


const deleteMovie = async (req,res) =>{
    try {
        const movie = await Movie.findByIdAndDelete({_id:req.params.id})
        res.status(200).json({msg: "Movie deleted",movie: movie})
    } catch (err){
        res.status(500).json({msg:"something went wrong",err:err.message})
    }
}
//@desc movie update role : user
//@methode post path:/movie/getmovies
const updateMovie =  async (req,res)  =>{
        try {
            const movie = await Movie.findByIdAndUpdate({_id:req.params.id},{...req.body})
            res.status(200).json({msg: "movie updated",movie: movie})
        } catch (err){
            res.status(500).json({msg: err.message})
        }
}



module.exports = {addMovie,getMovies,deleteMovie,updateMovie}