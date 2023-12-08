import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => [
        logOut()
    ]

    const links = <>
        <li>
            <NavLink to='/' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>Home</NavLink>
        </li>
        <li>
            <NavLink to='/services' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>Services</NavLink>
        </li>
        {user && <li>
            <details>
                <summary>
                    Dashboard
                </summary>
                <ul className="p-2 bg-base-100">
                    <li><NavLink to='/addservice' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>Add Service</NavLink></li>
                    <li><NavLink to='/manageservice' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>Manage Service</NavLink></li>
                    <li><NavLink to='/myschedule' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>My Schedules</NavLink></li>
                </ul>
            </details>
        </li>}
    </>


    return (
        <div className="navbar max-w-screen-xl mx-auto bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyu29-8Jfnhwsc1KAG5le-4gUXjuDL_PDesL_yqP8&s" className="h-8 mr-3" alt="FlowBite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ToolLander</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <div className="flex items-center">
                    <img src={user.photoURL} className="w-8 h-8 mr-4 rounded-lg" alt="" />
                    <button onClick={handleLogOut} className="btn bg-orange-400 hover:bg-orange-500">Log Out</button>
                </div>
                    :
                    <Link to='/login' className="btn bg-orange-400 hover:bg-orange-500">Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;