import { NavLink,useLocation } from "react-router-dom"
import NoteContext from "../context/NoteContext";
import { useContext } from "react";
export default function Navbar(){
    const {handleLogout}=useContext(NoteContext)
    
    const endP = useLocation();
    return(
        <>
        <nav className="h-14 flex justify-between items-center w-screen fixed top-0  backdrop-blur-xs bg-gray-300/50">
            <div className="text-2xl text-red-600 pl-4 font-bold">iNotebook<span className="font-extrabold">.</span></div>
            <div className="pr-4 flex gap-4 ">
            {localStorage.getItem('authToken') && <NavLink className={endP.pathname==='/'?"font-bold":""}  to='/'end>Home</NavLink>}
            {localStorage.getItem('authToken') &&  <NavLink className={endP.pathname==='/about'?"font-bold":""} to='/about'end>About</NavLink>}
            {localStorage.getItem('authToken') &&  <NavLink className={endP.pathname==='/login'?"font-bold":""}  onClick={handleLogout} to='/login'end>Logout</NavLink>}
            {!localStorage.getItem('authToken') && <NavLink className={endP.pathname==='/login'?"font-bold":""} to='/login'end>Login</NavLink>}
            {!localStorage.getItem('authToken') &&  <NavLink className={endP.pathname==='/signup'?"font-bold":""}  to='/signup'end>Sign Up</NavLink>}
            </div>
        </nav>
        </>
    )
}