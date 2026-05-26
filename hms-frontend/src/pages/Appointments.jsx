import {useEffect,useState} from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Appointments(){

const [appointments,setAppointments]=useState([]);

const [editingId,setEditingId]=useState(null);

const [search,setSearch]=useState("");

const [newAppointment,setNewAppointment]=useState({

patientName:"",
doctorName:"",
appointmentDate:""

});


useEffect(()=>{

fetchAppointments();

},[]);


const fetchAppointments=async()=>{

const response=

await API.get(
"/appointments"
);

setAppointments(
response.data
);

};


const addAppointment=async()=>{

if(editingId){

await API.put(

`/appointments/${editingId}`,

newAppointment

);

setEditingId(null);

}

else{

await API.post(

"/appointments",

newAppointment

);

}

fetchAppointments();

setNewAppointment({

patientName:"",
doctorName:"",
appointmentDate:""

});

};


const deleteAppointment=async(id)=>{

await API.delete(

`/appointments/${id}`

);

fetchAppointments();

};


const editAppointment=(appointment)=>{

setEditingId(

appointment.id

);

setNewAppointment({

patientName:
appointment.patientName,

doctorName:
appointment.doctorName,

appointmentDate:
appointment.appointmentDate

});

};


const filteredAppointments=

appointments.filter(

(item)=>

(item.patientName || "")
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

Appointment Management

</h1>


<div className="form-container">

<h2 className="section-title">

{

editingId

?

"Edit Appointment"

:

"Add Appointment"

}

</h2>


<input
placeholder="Patient Name"
value={newAppointment.patientName}
onChange={(e)=>

setNewAppointment({

...newAppointment,
patientName:e.target.value

})

}
/>


<input
placeholder="Doctor Name"
value={newAppointment.doctorName}
onChange={(e)=>

setNewAppointment({

...newAppointment,
doctorName:e.target.value

})

}
/>


<input
type="date"
value={newAppointment.appointmentDate}
onChange={(e)=>

setNewAppointment({

...newAppointment,
appointmentDate:e.target.value

})

}
/>


<button
onClick={addAppointment}
>

{

editingId

?

"Update Appointment"

:

"Add Appointment"

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

Appointment Records

</h2>


<input
className="search-box"
placeholder="Search..."
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
<th>Patient</th>
<th>Doctor</th>
<th>Date</th>
<th>Actions</th>

</tr>

</thead>


<tbody>

{

filteredAppointments.map(

(item)=>(

<tr key={item.id}>

<td>{item.id}</td>

<td>{item.patientName}</td>

<td>{item.doctorName}</td>

<td>{item.appointmentDate}</td>

<td>

<button
onClick={()=>

editAppointment(
item
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

deleteAppointment(
item.id
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

export default Appointments;