import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Login(){

const navigate=useNavigate();

const [username,setUsername]=useState("");
const [password,setPassword]=useState("");

const handleLogin=()=>{

if(

username==="admin"
&&
password==="admin"

){

navigate("/dashboard");

}

else{

alert(

"Invalid Credentials"

);

}

};


return(

<div className="login-page">

<div className="login-left">

<img

src={logo}

className="login-logo"

alt="logo"

/>

<h1>

MediCore HMS

</h1>

<p>

Hospital Management System

</p>

<div className="demo-box">

<h3>

Demo Credentials

</h3>

<p>

Username: admin

</p>

<p>

Password: admin

</p>

</div>

</div>



<div className="login-right">

<div className="login-card">

<h2>

Sign In

</h2>

<p>

Access your hospital dashboard

</p>


<input

type="text"

placeholder="Username"

value={username}

onChange={(e)=>

setUsername(

e.target.value

)

}

/>


<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>

setPassword(

e.target.value

)

}

/>


<button

onClick={handleLogin}

>

Login

</button>

</div>

</div>

</div>

);

}

export default Login;