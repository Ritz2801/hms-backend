import {useEffect,useState} from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import API from "../services/api";

import jsPDF from "jspdf";

import {

PieChart,
Pie,
Cell,
Tooltip,
ResponsiveContainer,
BarChart,
Bar,
XAxis,
YAxis

} from "recharts";


function Reports(){

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



const totalRevenue=

bills.reduce(

(sum,item)=>

sum+item.amount,

0

);



const analytics=[

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
}

];



const revenueData=[

{
name:"Revenue",
value:totalRevenue
}

];



const COLORS=[

"#3b82f6",
"#10b981",
"#f59e0b"

];



const exportPDF=()=>{

const doc=new jsPDF();

doc.setFontSize(22);

doc.text(

"Hospital Management Report",

20,
20

);

doc.setFontSize(14);

doc.text(

`Total Patients: ${patients.length}`,

20,
50

);

doc.text(

`Total Doctors: ${doctors.length}`,

20,
65

);

doc.text(

`Total Appointments: ${appointments.length}`,

20,
80

);

doc.text(

`Total Revenue: ₹${totalRevenue}`,

20,
95

);

doc.save(

"Hospital_Report.pdf"

);

};



return(

<div className="page-container">

<Sidebar/>

<div className="content">

<Navbar/>

<div style={{

display:"flex",
justifyContent:"space-between",
alignItems:"center"

}}>

<h1 className="page-title">

Reports & Analytics

</h1>


<button

onClick={exportPDF}

style={{

padding:"12px 20px",
background:"#2563eb",
border:"none",
borderRadius:"10px",
color:"white",
fontWeight:"bold",
cursor:"pointer"

}}

>

Export PDF

</button>

</div>



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

<h2>₹{totalRevenue}</h2>

<p>Revenue</p>

</div>

</div>



<div className="section">

<h2 className="section-title">

Hospital Overview

</h2>


<div style={{

display:"flex",
justifyContent:"space-around",
flexWrap:"wrap"

}}>


<div style={{

width:"450px",
height:"300px"

}}>

<ResponsiveContainer>

<PieChart>

<Pie

data={analytics}

dataKey="value"

cx="50%"
cy="50%"

outerRadius={100}

label={({name,value})=>

`${name}: ${value}`

}

>

{

analytics.map(

(entry,index)=>(

<Cell

key={index}

fill={COLORS[index]}

/>

)

)

}

</Pie>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</div>



<div style={{

width:"450px",
height:"300px"

}}>

<ResponsiveContainer>

<BarChart
data={revenueData}
>

<XAxis
dataKey="name"
/>

<YAxis/>

<Tooltip/>

<Bar

dataKey="value"

fill="#10b981"

radius={[10,10,0,0]}

/>

</BarChart>

</ResponsiveContainer>

</div>

</div>

</div>



<div className="section">

<h2 className="section-title">

Summary Report

</h2>

<table>

<thead>

<tr>

<th>Metric</th>
<th>Value</th>

</tr>

</thead>

<tbody>

<tr>

<td>Total Patients</td>
<td>{patients.length}</td>

</tr>

<tr>

<td>Total Doctors</td>
<td>{doctors.length}</td>

</tr>

<tr>

<td>Total Appointments</td>
<td>{appointments.length}</td>

</tr>

<tr>

<td>Total Revenue</td>
<td>₹{totalRevenue}</td>

</tr>

</tbody>

</table>

</div>

</div>

</div>

);

}

export default Reports;