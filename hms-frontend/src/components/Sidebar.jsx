import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Sidebar() {

return (

<div className="sidebar">

<div className="logo-container">

<img
src={logo}
alt="MediCore Logo"
className="sidebar-logo"
/>

<div className="logo-text">

<h2>MediCore</h2>

<p>

Hospital System

</p>

</div>

</div>



<div className="menu">

<NavLink
to="/dashboard"
className={({isActive}) =>
isActive
?
"nav-link active"
:
"nav-link"
}
>

Dashboard

</NavLink>


<NavLink
to="/patients"
className={({isActive}) =>
isActive
?
"nav-link active"
:
"nav-link"
}
>

Patients

</NavLink>


<NavLink
to="/doctors"
className={({isActive}) =>
isActive
?
"nav-link active"
:
"nav-link"
}
>

Doctors

</NavLink>


<NavLink
to="/appointments"
className={({isActive}) =>
isActive
?
"nav-link active"
:
"nav-link"
}
>

Appointments

</NavLink>


<NavLink
to="/billing"
className={({isActive}) =>
isActive
?
"nav-link active"
:
"nav-link"
}
>

Billing

</NavLink>


<NavLink
to="/reports"
className={({isActive}) =>
isActive
?
"nav-link active"
:
"nav-link"
}
>

Reports

</NavLink>

</div>



<div className="profile-box">

<div>

Admin User

</div>

<button>

Logout

</button>

</div>

</div>

);

}

export default Sidebar;