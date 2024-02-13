import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import "./style.css"
// import "./login.css"


const Login = () => {
  const {errors: err, isAuth } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {console.log(data);
  
      dispatch(signin(data))}
  console.log("errors", errors);
  console.log("err",err);
useEffect(() => {
    if(isAuth) navigate('/')
}, [isAuth,navigate])

  return (
    <div>
      <p> WELCOME TO LOGIN PAGE </p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="Email" {...register("email", {required: true, max: 20, min: 10, maxLength: 29})} />
      <p className='error' >{errors.email && "email is not valid"}</p>
      <p className='error'>{err && "email does not exit, please try to register" }</p>
      <input type="password" placeholder="Password" {...register("password", {required: true, max: 20, min: 4, maxLength: 12, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i})} />
      <p className='error'>{errors.password && "password is not valid"}</p>
      <input type="submit" />
    </form>
    </div>
//     <div className="login-box">
//   <h2>Login</h2>
//   <form onSubmit={handleSubmit(onSubmit)}>
//     <div className="user-box">
//       {/* <input type="text" name="" required="" /> */}
//       <input type="email" placeholder="Email" {...register("email", {required: true, max: 20, min: 10, maxLength: 29})} />
//       <p className='error' >{errors.email && "email is not valid"}</p>
//       <p className='error'>{err && "email does not exit, please try to register" }</p>
//       <label>email</label>
//     </div>
//     <div className="user-box">
//       {/* <input type="password" name="" required="" /> */}
//       <input type="password" placeholder="Password" {...register("password", {required: true, max: 20, min: 4, maxLength: 12, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i})} />
//       <p className='error'>{errors.password && "password is not valid"}</p>
//       <label>Password</label>
//     </div>
//     <a href="#">
//       <span />
//       <span />
//       <span />
//       <span />
//       Submit
//     </a>
//   </form>
// </div>
    
  )
}

export default Login
