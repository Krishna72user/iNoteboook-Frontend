import { useContext,useState,useEffect } from "react"
import NoteContext from "../context/NoteContext"
import NoteItem from "./NoteItem"

export default function Notes(){
    const {notes}= useContext(NoteContext)
    
    return(
        <>
        <div className="flex flex-wrap gap-4">
        {notes.length===0 &&<div className="font-bold">No notes to display.</div>}
        {notes.map((note)=><NoteItem key={note._id} noteId={note['_id']} title={note.title} description = {note.description} />)}
        </div>
        </>
    )
}