import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth'
import img from '../../../images/160321_image-guide_LOOKBOOK_image_39.jpg'




const Signup = () => {
  const {user, loginWithGoogle,signupWithEmailAndPassword,error} = useAuth();
  const history = useHistory();
  const location = useLocation();

  const handleSignUpWithGoogle = () => {
    loginWithGoogle(location, history)
};

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    signupWithEmailAndPassword( data.name, data.email, data.password, history)
  };
    
    return (
      <div className="loginForm">
      <div className="row">
           <div className="col-sm-12 col-md-6 col-lg-6">
               <div className="container text-center mt-5 pt-5">
                   <h2 className="mb-3">Sign Up</h2>
                   <span>Alreday have an acoount ?</span><Link to="/login" className="text-primary ps-2">Login</Link> 
                   <div className="mt-4">
                   <form onSubmit={handleSubmit(onSubmit)}>

                   <input type="email" {...register("email")} placeholder="Email"className="input-field"/>

                   <input type="password" placeholder="Password"{...register("password")} className="input-field"/>
                   <h5 className="text-danger my-3">{error}</h5>
                   
                   <input type="submit" value="Sign up" className="submit-input rounded-pill fs-5 fw-bold"/>

                   </form>
                   </div>
                   <div className="text-center my-5">
                        <h6>Or Sign Up Using</h6>
                    </div>
                    <div className="container d-flex justify-content-center">
                        <div className="me-2">
                        <button onClick={handleSignUpWithGoogle} className="social-btn"><i class="fab fa-google"></i></button>
                        </div>
                        <div className="ms-2">
                        <button className="social-btn"><i class="fab fa-facebook-f"></i></button>
                        </div>
                    </div>
               </div>
           </div>
           <div className="col-sm-12 col-md-6 col-lg-6 login-img">
           <img className="img-fluid" src={img} alt="" />
           </div>
      </div>
   </div>
    );
};

export default Signup;