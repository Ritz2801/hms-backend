import {useEffect,useState} from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Billing(){

const [bills,setBills]=useState([]);

const [editingId,setEditingId]=useState(null);

const [search,setSearch]=useState("");

const [newBill,setNewBill]=useState({

patientName:"",
amount:""

});


useEffect(()=>{

fetchBills();

},[]);


const fetchBills=async()=>{

const response=

await API.get(
"/billing"
);

setBills(
response.data
);

};


const addBill=async()=>{

if(editingId){

await API.put(

`/billing/${editingId}`,

{

...newBill,
amount:parseInt(
newBill.amount
)

}

);

setEditingId(null);

}

else{

await API.post(

"/billing",

{

...newBill,
amount:parseInt(
newBill.amount
)

}

);

}

fetchBills();

setNewBill({

patientName:"",
amount:""

});

};


const deleteBill=async(id)=>{

await API.delete(

`/billing/${id}`

);

fetchBills();

};


const editBill=(bill)=>{

setEditingId(

bill.id

);

setNewBill({

patientName:
bill.patientName,

amount:
bill.amount

});

};


const filteredBills=

bills.filter(

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

Billing Management

</h1>


<div className="form-container">

<h2 className="section-title">

{

editingId

?

"Edit Bill"

:

"Create Bill"

}

</h2>


<input
placeholder="Patient Name"
value={newBill.patientName}
onChange={(e)=>

setNewBill({

...newBill,
patientName:e.target.value

})

}
/>


<input
type="number"
placeholder="Amount"
value={newBill.amount}
onChange={(e)=>

setNewBill({

...newBill,
amount:e.target.value

})

}
/>


<button
onClick={addBill}
>

{

editingId

?

"Update Bill"

:

"Generate Bill"

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

Billing Records

</h2>


<input

className="search-box"

placeholder="Search bill..."

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
<th>Amount</th>
<th>Actions</th>

</tr>

</thead>


<tbody>

{

filteredBills.map(

(item)=>(

<tr key={item.id}>

<td>

{item.id}

</td>

<td>

{item.patientName}

</td>

<td>

₹{item.amount}

</td>

<td>

<button
onClick={()=>

editBill(
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

deleteBill(
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

export default Billing;