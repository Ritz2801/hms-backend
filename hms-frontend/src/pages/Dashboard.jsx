import { useEffect,useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import API from "../services/api";

import {

BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
Cell

} from "recharts";

function Dashboard(){

const [patients,setPatients]=useState([]);
const [doctors,setDoctors]=useState([]);
const [appointments,setAppointments]=useState([]);
const [bills,setBills]=useState([]);

useEffect(()=>{

loadData();

},[]);


const loadData=async()=>{

try{

const p=await API.get("/patients");
const d=await API.get("/doctors");
const a=await API.get("/appointments");
const b=await API.get("/billing");

setPatients(p.data);
setDoctors(d.data);
setAppointments(a.data);
setBills(b.data);

}

catch(error){

console.log(error);

}

};


const revenue=

bills.reduce(

(sum,item)=>

sum+item.amount,

0

);


const chartData=[

{
name:"Patients",
value:patients.length
},

{
name:"Doctors",
value:doctors.length
},

{
name:"Appointments",
value:appointments.length
},

{
name:"Revenue",
value:revenue/1000
}

];


const COLORS=[

"#3b82f6", // Blue
"#10b981", // Green
"#f59e0b", // Orange
"#ef4444" // Red

];


return(

<div className="page-container">

<Sidebar/>

<div className="content">

<Navbar/>

<h1 className="page-title">

Dashboard Overview

</h1>


<div className="card-container">

<div className="card">

<h2>{patients.length}</h2>
<p>Patients</p>

</div>


<div className="card">

<h2>{doctors.length}</h2>
<p>Doctors</p>

</div>


<div className="card">

<h2>{appointments.length}</h2>
<p>Appointments</p>

</div>


<div className="card">

<h2>₹{revenue}</h2>
<p>Revenue</p>

</div>

</div>



<div className="section">

<h2 className="section-title">

Hospital Analytics

</h2>


<div style={{

width:"100%",
height:"350px"

}}>

<ResponsiveContainer>

<BarChart
data={chartData}
>

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Bar
dataKey="value"
radius={[10,10,0,0]}
>

{

chartData.map(

(entry,index)=>(

<Cell

key={`cell-${index}`}

fill={COLORS[index % COLORS.length]}

/>

)

)

}

</Bar>

</BarChart>

</ResponsiveContainer>

</div>

</div>



<div className="section">

<h2 className="section-title">

Recent Appointments

</h2>

<table>

<thead>

<tr>

<th>Patient</th>
<th>Doctor</th>
<th>Date</th>
<th>Status</th>

</tr>

</thead>

<tbody>

{

appointments.length>0 ?

appointments.slice(0,5).map(

(item)=>(

<tr key={item.id}>

<td>{item.patientName || "N/A"}</td>

<td>{item.doctorName || "N/A"}</td>

<td>{item.appointmentDate || "N/A"}</td>

<td>

<span className="badge completed">

Completed

</span>

</td>

</tr>

)

)

:

<tr>

<td colSpan="4">

No appointments found

</td>

</tr>

}

</tbody>

</table>

</div>

</div>

</div>

);

}

export default Dashboard;