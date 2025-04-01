import { useContext, useState,useRef } from "react"
import NoteContext from "../context/NoteContext"
import Notes from "./Notes"
import Modal from "./Modal"
export default function Navbar(){
    const {addNote,status,signS}=useContext(NoteContext)
    const title  = useRef(null)
    const description = useRef(null)
    const tag = useRef(null)


    const handleClick=(e)=>{
        e.preventDefault();
        addNote(title.current.value,description.current.value,tag.current.value)
        title.current.value=""
        description.current.value=""
        tag.current.value=""
    }
    return (
        <>
        <div className="h-14"></div>
        <Modal/>
            <div  style={status==='none'?{opacity:1}:{opacity:0.3,height:"90vh",overflowY:"hidden"}} className="w-[100vw]  flex flex-col py-7 z-0 justify-center">
                <div className="mx-auto flex-col flex gap-6 ">
                    <div className="text-3xl  font-bold">Add a Note</div>
                    <form onSubmit={handleClick} className="flex-col flex gap-4">
                        <div className="text-xl">Enter the title : </div>
                        <input ref={title} type="text" name = "title" id="title"  maxLength={20} className="text-xl  p-3 w-[70vw] border-1 border-blue-300 outline-0"required minLength={5} />
                        <div className="text-xl">Enter the tag (optional) : </div>
                        <input ref={tag} type="text"maxLength={20} className="text-xl  p-3 w-[70vw] border-1 border-blue-300 outline-0" id="tag"name="tag" />
                        <div className="text-xl">Enter the description :</div>
                        <textarea id="description" ref={description}  name="description" type="text" minLength={7} className="text-xl resize-none p-3 w-[70vw] h-[6em] border-1 border-blue-300 outline-0" required/>
                        <div>
                            <button className="bg-blue-500 hover:bg-blue-400 hover:cursor-pointer px-3 py-1 rounded text-white" type="submit">Add Note</button>
                        </div>
                    </form>
                    <div className="text-3xl font-bold">Your Notes</div>
                    <div id="notes" className="w-[70vw]">
                       {signS && <Notes/> }
                    </div>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}