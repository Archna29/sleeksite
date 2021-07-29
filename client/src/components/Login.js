import {React,useState} from 'react'
import { NavLink,useHistory } from 'react-router-dom';
import illustration from './illustrations/login_illustration.svg';
//This is for login page
const Login = () => {
  const [user,setUser]=useState({email:"",password:""});
  let name,value;
  const handleInputs=(e)=>{
name=e.target.name;
value=e.target.value;
setUser({...user,[name]:value});
  }
  //to post the  data for login 
  const PostData= async (e)=>{
    e.preventDefault();
const{email,password}=user;
const res= await fetch('/signin',{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    email,password
  })
});
const data=await res.json;
if(res.status===400|| !data){
  window.alert("Invalid Login");
}
else{
  window.alert("Successful login");
  history.push('/');
}
  }
  const history=useHistory();
    return (
        <>
        <div className="formContainer ">
        <div className=" m-2 mt-5 p-2">
 <figure>
  <img src={illustration} className="illustration" alt="illustration"/></figure>
  <NavLink className="text-dark " to="/signup" >Create an Account.</NavLink>
  </div>
           <form method="POST" className="form mx-3 ">
           <h1 className=" mt-5 mb-5  text-dark">Sign In</h1>
  <div className=" input-container mb-3">
 <i className="far fa-envelope"></i>
    <input type="email" name="email" className="form-control1" id="exampleInputEmail1" placeholder="Email" 
    value={user.email}
    onChange={handleInputs}
    aria-describedby="emailHelp"/>
  </div>

  <div className="input-container mb-3">
  <i class="fas fa-lock"></i>
    <input type="password" name="password" className="form-control1"
    value={user.password}
    onChange={handleInputs}
     placeholder="Password" id="exampleInputPassword1"/>
  </div> 
  <div className="w-25 mb-3">
  <button type="submit" onClick={PostData} className="btn">Login</button></div>
</form>

  </div>
        </>
    )
}

export default Login;
