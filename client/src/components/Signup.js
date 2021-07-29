import React ,{useState} from 'react'
import { NavLink,useHistory } from 'react-router-dom';
import illustration from './illustrations/signup_illustration.svg';
const Signup = () => {
  const history=useHistory();
  const [user,setUser]=useState({
name:"", email:"", phone:"", password:"", cpassword:""
  });

  let name, value;

  const handleInputs=(e)=>{
    console.log(e);
name = e.target.name;
value = e.target.value;
setUser({...user, [name] :value});
  }

  const PostData = async (e)=>{
    e.preventDefault();
    const {name,email,phone,password,cpassword} = user;
    const res=await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        name, email, phone, password, cpassword
      })
    });

    const data=await res.json();
    if(res.status === 422 || !data)
    {
      window.alert("Invalid registeration");
      console.log("error");
    }
    else{
      window.alert("Successful registeration");
      history.push('/login');
    }
  }
    return (
        <>
        <div className="formContainer ">
           <form className="form ms-5 m-5" method="POST">
           <h1 className="  mt-3 p-2 mb-5 text-dark">Sign up</h1>
 <div className="input-container mb-3">
<i className="fas fa-user"></i>
 <input type="text" className="form-control1"  name="name"  autoComplete="off"
  value={user.name} 
  onChange={handleInputs} 
  placeholder="Your Name"  aria-label="Username"/>  
 </div>
  <div className=" input-container mb-3">
 <i className="far fa-envelope"></i>
    <input type="email" name="email" className="form-control1" id="exampleInputEmail1"  autoComplete="off"
    value={user.email} 
    onChange={handleInputs} 
    placeholder="Your Email" aria-describedby="emailHelp"/>
  </div>
  <div className=" input-container mb-3">
  <i className="fas fa-phone-volume"></i>
    <input type="number" name="phone"  autoComplete="off" className="form-control1" 
    value={user.phone} 
    onChange={handleInputs} placeholder=" Mobile Number" />
  </div> 
  <div className="input-container mb-3">
 <i className="fas fa-lock"></i>
    <input type="password" name="password"   autoComplete="off" className="form-control1" id="exampleInputPassword1"
     value={user.password}
      onChange={handleInputs}
       placeholder="Password" />
  </div> 
 
  <div className="input-container mb-3">
  <i className="far fa-check-circle"></i>
    <input type="password" className="form-control1"  autoComplete="off"
     placeholder="Confirm Password"
     name="cpassword" 
    value={user.cpassword} 
    onChange={handleInputs} />
  </div> 
 
  <div className="w-25 mb-3">
  <button type="submit" className="btn" onClick={PostData}>Register</button>
  </div> 
</form>

 <div className="m-auto p-2 ">
 <figure>
  <img src={illustration} className="illustration" alt="illustration"/></figure>
  <NavLink className="text-dark " to="/login" >I am already registered user.</NavLink>
  </div>
  </div>
        </>
    )
}

export default Signup;
