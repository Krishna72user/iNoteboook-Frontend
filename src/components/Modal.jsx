import { useContext, useRef } from "react"
import NoteContext from "../context/NoteContext.jsx"
import "../App.jsx";
export default function Modal() {
    const tag = useRef(null)
    const title = useRef(null)
    const description = useRef(null)
    const { status, setStatus, editNote, openModal } = useContext(NoteContext)
    const handleCancel = (e) => {
        e.preventDefault()
        setStatus('none')
    }
    const onSubmits = (e)=>{
         e.preventDefault();
        editNote(title.current.value, description.current.value, tag.current.value); 
        openModal()
        title.current.value=""
        description.current.value=""
        tag.current.value=""
    }
    return (
        <>
            <div 
            // style={{ display: status }} 
            className={`${status==='none'?'hidden':status} w-[100vw] flex animate-fade-in flex-col py-7 fixed z-20 md:top-20  top-15 backdrop-opacity-[-2em] justify-center`}
            >
                <div className="mx-auto flex-col w-[20em] md:w-[30em] shadow-2xl bg-white p-5 flex gap-6 ">
                    <div className="text-xl font-bold">Edit Note</div>
                    <form onSubmit={onSubmits} className="flex-col flex gap-4">
                        <div className="text-md">Enter the title : </div>
                        <input ref={title}  type="text" name="etitle" maxLength={20}  className="text-md  p-2 border-1 border-blue-300 outline-0" id="etitle"minLength={5} required/>
                        <div className="text-md">Enter the tag (optional) : </div>
                        <input ref={tag} type="text" maxLength={20} className="text-md  p-2  border-1 border-blue-300 outline-0" id="etag" name="etag" />
                        <div className="text-md">Enter the description :</div>
                        <textarea type="text" id="edescription" name="edescription"minLength={7} ref={description} className="text-md resize-none p-2  h-[5em] border-1 border-blue-300 outline-0" required/>
                        <div >
                            <button className="bg-blue-500 hover:bg-blue-400 hover:cursor-pointer px-3 py-1 rounded text-white" type="submit">Save changes</button>
                            <button className="bg-gray-800 hover:bg-gray-600 hover:cursor-pointer px-3 py-1 rounded ml-4 text-white"  onClick={handleCancel} >Cancel</button>
                        </div>
                    </form>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}
