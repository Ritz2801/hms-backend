import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function GenerateReport({patients}){

const generatePDF=()=>{

const doc=new jsPDF();

doc.text(
"Hospital Management Report",
20,
20
);

autoTable(doc,{

head:[["ID","Name","Age","Disease"]],

body:patients.map((patient)=>([

patient.id,
patient.name,
patient.age,
patient.disease

]))

});

doc.save(
"HMS_Report.pdf"
);

};

return(

<button
onClick={generatePDF}
style={{
padding:"10px",
marginTop:"20px"
}}
>

Generate PDF Report

</button>

);

}

export default GenerateReport;