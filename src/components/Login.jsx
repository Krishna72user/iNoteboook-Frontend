import { useRef ,useState} from "react"
import { NavLink, useNavigate } from "react-router-dom"
export default function Login(){
    const host = import.meta.env.VITE_HOSTNAME
    let email = useRef(null)
    let password = useRef(null)
    const [show,setShow]=useState(true)
    const navigate = useNavigate()
    const handleLogin =async (e)=>{
        e.preventDefault();
        const res = await fetch(`${host}/auth/login`, {
            method: 'POST',  // Specify POST methods
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"email":email.current.value,"password":password.current.value}) // Convert data to JSON string
          });
        const json = await res.json();
        if(json.success){
            setShow(true)
            localStorage.setItem('authToken',json['authToken'])
            navigate('/')
        }
        else{
            setShow(false)
        }
    }

    return(
        <>
        <div className="h-[80vh] flex items-center">
            <div className="mx-auto flex-col  shadow-2xl bg-white p-7 w-[20em] md:w-[30em] flex gap-6 ">
                    <div className="text-xl mx-auto font-bold">Login</div>
                    <form onSubmit={handleLogin} className="flex-col flex gap-4">
                            <div className="text-md w-17 ">Email : </div>
                            <input ref={email}  type="email" name="email"className="text-sm p-2 border-1 border-blue-300 outline-0" id="email" required/>
                            <div className="text-md">Password : </div>
                            <input ref={password} type="text"id="pass"  className="text-sm p-2  border-1 border-blue-300 outline-0" name="pass" />
                            {!show && <div className="text-red-500 font-semibold">Invalid credentials.</div>}
                            <div className="mx-auto flex flex-col justify-center gap-3 items-center" >
                                <button className="bg-blue-500  hover:bg-blue-400 hover:cursor-pointer px-4 py-1 rounded text-white" type="submit">Login</button>
                                <div >Don't have an account?<NavLink to="/signup" className="hover:cursor-pointer text-blue-400 underline"end> Sign up</NavLink></div>
                            </div>
                    </form>
                </div>
                <div>
            </div>
        </div>
        </>
    )
}