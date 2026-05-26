import { useEffect,useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Patients(){

const [patients,setPatients]=useState([]);
const [editingId,setEditingId]=useState(null);

const [newPatient,setNewPatient]=useState({

name:"",
age:"",
disease:""

});

useEffect(()=>{

fetchPatients();

},[]);


const fetchPatients=async()=>{

try{

const response=
await API.get("/patients");

setPatients(
response.data
);

}

catch(error){

console.log(error);

}

};


const addPatient=async()=>{

try{

if(editingId){

await API.put(

`/patients/${editingId}`,

{

...newPatient,

age:parseInt(
newPatient.age
)

}

);

setEditingId(null);

}

else{

await API.post(

"/patients",

{

...newPatient,

age:parseInt(
newPatient.age
)

}

);

}

fetchPatients();

setNewPatient({

name:"",
age:"",
disease:""

});

}

catch(error){

console.log(error);

}

};


const deletePatient=async(id)=>{

await API.delete(

`/patients/${id}`

);

fetchPatients();

};


const editPatient=(patient)=>{

setEditingId(

patient.id

);

setNewPatient({

name:patient.name,
age:patient.age,
disease:patient.disease

});

};


return(

<div className="page-container">

<Sidebar/>

<div className="content">

<Navbar/>

<h1 className="page-title">

Patient Management

</h1>


<div className="form-container">

<h2 className="section-title">

{
editingId
?
"Edit Patient"
:
"Add Patient"
}

</h2>


<input
placeholder="Patient Name"
value={newPatient.name}
onChange={(e)=>

setNewPatient({

...newPatient,
name:e.target.value

})

}
/>


<input
type="number"
placeholder="Age"
value={newPatient.age}
onChange={(e)=>

setNewPatient({

...newPatient,
age:e.target.value

})

}
/>


<input
placeholder="Disease"
value={newPatient.disease}
onChange={(e)=>

setNewPatient({

...newPatient,
disease:e.target.value

})

}
/>


<button
onClick={addPatient}
>

{
editingId
?
"Update Patient"
:
"Add Patient"
}

</button>

</div>



<div className="section">

<h2 className="section-title">

Patient Records

</h2>

<table>

<thead>

<tr>

<th>ID</th>
<th>Name</th>
<th>Age</th>
<th>Disease</th>
<th>Actions</th>

</tr>

</thead>

<tbody>

{

patients.map(

(patient)=>(

<tr
key={patient.id}
>

<td>{patient.id}</td>

<td>{patient.name}</td>

<td>{patient.age}</td>

<td>{patient.disease}</td>

<td>

<button
onClick={()=>
editPatient(patient)
}
>

Edit

</button>


<button

style={{

marginLeft:"10px",
background:"#dc2626"

}}

onClick={()=>
deletePatient(
patient.id
)
}
>

Delete

</button>

</td>

</tr>

)

)

}

</tbody>

</table>

</div>

</div>

</div>

);

}

export default Patients;