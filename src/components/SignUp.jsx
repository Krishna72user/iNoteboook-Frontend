import { useRef ,useState} from "react"
import { useNavigate } from "react-router-dom"
export default function Login(){
    const host = "http://localhost:3000"
    let email = useRef(null)
    let password = useRef(null)
    let name = useRef(null)
    const [show,setShow]=useState(false)
    const [exists,setExists]=useState(false)
    const navigate = useNavigate()
    const handleSign =async (e)=>{
        e.preventDefault();
        const res = await fetch(`${host}/auth/register`, {
            method: 'POST',  // Specify POST methods
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"name":name.current.value,"email":email.current.value,"password":password.current.value,}) // Convert data to JSON string
          });
        const json = await res.json();
        if(json.success){
            setShow(false)
            localStorage.setItem('authToken',json['authToken'])
            if(!json.exists){
                navigate('/')
            }
        }
        else{
            setShow(true)
        }

        if(json.exists){
            setExists(true)
        }
        else{
            setExists(false)
        }
    }
    return(
        <>
        <div className="h-[80vh] flex items-center">
            <div className="mx-auto flex-col  shadow-2xl bg-white p-7 w-[20em] md:w-[30em] flex gap-6 ">
                    <div className="text-xl mx-auto font-bold">Register</div>
                    <form onSubmit={handleSign} className="flex-col flex gap-4">
                            <div className="text-md w-17 ">Name : </div>
                            <input ref={name}  type="etxt" name="name"className="text-sm p-2 border-1 border-blue-300 outline-0" id="name" required/>
                            <div className="text-md w-17 ">Email : </div>
                            <input ref={email}  type="email" name="email"className="text-sm p-2 border-1 border-blue-300 outline-0" id="email" required/>
                            <div className="text-md">Password : </div>
                            <input ref={password} type="text"id="pass"  className="text-sm p-2  border-1 border-blue-300 outline-0" name="pass" required minLength={5} />
                            {show && <div className="text-red-500 font-semibold">Invalid credentials.</div>}
                            {exists && <div className="text-red-500 font-semibold">A user with the same email already exists.</div>}
                            <div className="mx-auto" >
                            <button className="bg-blue-500  hover:bg-blue-400 hover:cursor-pointer px-3 py-1 rounded text-white" type="submit">Sign up</button>
                        </div>
                    </form>
                </div>
                <div>
            </div>
        </div>
        </>
    )
}