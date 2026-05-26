function Navbar(){

const today=new Date();

return(

<div className="navbar">

<div>

<h2>

Welcome, Admin

</h2>

<p>

{today.toDateString()}

</p>

</div>


<div className="navbar-right">

<input
className="search-box"
placeholder="Search..."
/>

<div className="notification">



</div>

<div className="profile">

Admin

</div>

</div>

</div>

);

}

export default Navbar;