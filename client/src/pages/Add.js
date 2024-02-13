import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getmovies, deletemovie, addmovie, updatemovie } from '../redux/slices/movieSlice'
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';

const Add = () => {
  const dispatch=useDispatch()
  const [updated,setupdatetask]=useState({})
 const [visible,setvisible]=useState({visibility:"hidden"})
  const handleChange=(e)=>{
   setupdatetask({...movieList,[e.target.name]:e.target.value})
   console.log(updated)
 }
  
 const { movieList, isLoading } = useSelector((state) => state.movie);
 
  // const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = data => {
  //  dispatch(addmovie(data))
  //  console.log(data)};
  // console.log(errors);
  useEffect(()=>{dispatch(getmovies())},[dispatch])
  console.log(getmovies())
  // code add safa
    // const dispatch = useDispatch();
    const [img,setImg] = useState()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
    const addData = {...data, img:data.img.trim()};
    dispatch(addmovie(data));
  }
  
  return (
    
    
    <div>
       <div className='form'>
    <form  onSubmit={handleSubmit(onSubmit)}>
    <input type="text" placeholder="text" {...register('title')}/>
    <input type="text" placeholder="desc" {...register('description')}/>
    <input type="submit" />
  </form>
  {isLoading && <p>Loading</p>}
  {Array.isArray(movieList) && movieList.map(el=>
  <div>
    <p>{el.title}</p>
    <p>{el.description}</p>


    <button onClick={()=>{(visible.visibility==="hidden")?
      setvisible({visibility:"visible"}):setvisible({visibility:"hidden"})}}>update</button>

    <div style={visible}>
    <input type='text' placeholder='add name' name='title'onChange={handleChange}></input>
   <input type='text' placeholder='add description' name='description'onChange={handleChange}></input>
   <button onClick={()=>dispatch(updatemovie({...updated,_id:el._id}))}>Updating</button>

    </div>

   
  
  <Button onClick={()=>dispatch(deletemovie(el))}>Delete</Button> 
   
  </div>
  )}
  </div>
    {/* code safa */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>ADD NEW MOVIE</h1>
      <input type="text" placeholder="title" {...register("title", {required: true})} />
      <input type="text" placeholder="desc" {...register("desc", {required: true})} />
      <input type="text" placeholder="img" {...register("img", {})} />

      <input type="submit" />
    </form>
    </div>
  )
}

export default Add
