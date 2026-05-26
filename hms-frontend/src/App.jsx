import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Doctors from "./pages/Doctors";
import Appointments from "./pages/Appointments";
import Billing from "./pages/Billing";
import Reports from "./pages/Reports";

function App(){

return(

<BrowserRouter>

<Routes>

<Route
path="/"
element={<Login/>}
/>

<Route
path="/dashboard"
element={<Dashboard/>}
/>

<Route
path="/patients"
element={<Patients/>}
/>

<Route
path="/doctors"
element={<Doctors/>}
/>

<Route
path="/appointments"
element={<Appointments/>}
/>

<Route
path="/billing"
element={<Billing/>}
/>

<Route
path="/reports"
element={<Reports/>}
/>

</Routes>

</BrowserRouter>

);

}

export default App;