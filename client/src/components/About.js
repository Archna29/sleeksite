import React,{useEffect,useState} from 'react'
import {useHistory } from 'react-router-dom';
import "../About.css";
const About = () => {
  const [userData,setUserData]=useState({});
  const history=useHistory();
  const callAboutPage = async()=>{
    try{
      const res=await fetch('/about',{
        method:'GET',
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      });
      const data=await res.json();
      console.log(data)
      setUserData(data);
      if(!res.status===200){
        const error=new Error(res.error);
        throw error;
      }
    }
    catch(e){
  console.log(e);
  history.push('/login');
    }
  }

//we are using useEffect so that it first check wheather the user is authenticate .
  useEffect(() => { 
    callAboutPage();
    
   // eslint-disable-next-line react-hooks/exhaustive-deps
  } , []);
  
    return (
        <>
            <div className="AboutContainer" > 
            <form method="GET">
   <div className="card" id="card">
  <div className="card-body" id="card-body">
  <ul className="mt-3"> 
  <li>{userData.name}</li>
            <li>{userData.phone}</li>
            <li>{userData.email}</li>
            </ul>
  </div>
</div> 

<div  className="card">
  <div  className="card-body">
    <h5  className="card-title">Welcome to SleekSite </h5>
    <p  className="card-text">.This is your ABOUT ME PAGE.Here with your detailss.</p>
  </div>
</div>   
</form>

</div>

   
 
   </>
   )     
  }

export default About ;
