import { useEffect,useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Doctors(){

const [doctors,setDoctors]=useState([]);
const [editingId,setEditingId]=useState(null);

const [newDoctor,setNewDoctor]=useState({

name:"",
specialization:""

});

const [search,setSearch]=useState("");

useEffect(()=>{

fetchDoctors();

},[]);


const fetchDoctors=async()=>{

try{

const response=
await API.get("/doctors");

setDoctors(
response.data
);

}

catch(error){

console.log(error);

}

};


const addDoctor=async()=>{

try{

if(editingId){

await API.put(

`/doctors/${editingId}`,

newDoctor

);

setEditingId(null);

}

else{

await API.post(

"/doctors",

newDoctor

);

}

fetchDoctors();

setNewDoctor({

name:"",
specialization:""

});

}

catch(error){

console.log(error);

}

};


const deleteDoctor=async(id)=>{

await API.delete(

`/doctors/${id}`

);

fetchDoctors();

};


const editDoctor=(doctor)=>{

setEditingId(

doctor.id

);

setNewDoctor({

name:doctor.name,
specialization:doctor.specialization

});

};


const filteredDoctors=

doctors.filter(

(item)=>

item.name
.toLowerCase()
.includes(

search.toLowerCase()

)

);


return(

<div className="page-container">

<Sidebar/>

<div className="content">

<Navbar/>

<h1 className="page-title">

Doctor Management

</h1>


<div className="form-container">

<h2 className="section-title">

{
editingId
?
"Edit Doctor"
:
"Add Doctor"
}

</h2>


<input

placeholder="Doctor Name"

value={newDoctor.name}

onChange={(e)=>

setNewDoctor({

...newDoctor,
name:e.target.value

})

}

/>


<input

placeholder="Specialization"

value={newDoctor.specialization}

onChange={(e)=>

setNewDoctor({

...newDoctor,
specialization:e.target.value

})

}

/>


<button
onClick={addDoctor}
>

{
editingId
?
"Update Doctor"
:
"Add Doctor"
}

</button>

</div>



<div className="section">

<div style={{

display:"flex",
justifyContent:"space-between",
alignItems:"center"

}}>

<h2 className="section-title">

Doctor Records

</h2>


<input

className="search-box"

placeholder="Search doctor..."

value={search}

onChange={(e)=>

setSearch(
e.target.value
)

}

/>

</div>


<table>

<thead>

<tr>

<th>ID</th>
<th>Name</th>
<th>Specialization</th>
<th>Actions</th>

</tr>

</thead>

<tbody>

{

filteredDoctors.map(

(doctor)=>(

<tr
key={doctor.id}
>

<td>

{doctor.id}

</td>

<td>

{doctor.name}

</td>

<td>

{doctor.specialization}

</td>

<td>

<button
onClick={()=>

editDoctor(
doctor
)

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

deleteDoctor(
doctor.id
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

export default Doctors;