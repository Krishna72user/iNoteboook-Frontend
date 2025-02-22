import { useEffect, useState } from "react";
import NoteContext from "./NoteContext.jsx";
import { useNavigate } from "react-router-dom";
const NoteState=(props)=>{
  const host =import.meta.env.VITE_HOSTNAME
  const navigate = useNavigate();
  const [notes,setNotes]=useState([]);
  const [status,setStatus]=useState('none')
  const [Id,setId]=useState(null)
  const getNotes=async ()=>{
    const res =await fetch(`${host}/notes/fetchAllnotes`,{
      method: 'GET',  // Specify POST methods
      headers: {
        'authtoken':localStorage.getItem('authToken'),
        'Content-Type': 'application/json',  // Tell server we're sending JSON
      }
    });
    const json = await res.json();
    setNotes(json)
    }
    useEffect(()=>{
      if(localStorage.getItem('authToken')){
        getNotes();
      }
      else{
        if (location.pathname !== "/signup") {
          navigate('/login', { replace: true });
      }
      }
    },[navigate]) 
    //Add a note
      const addNote =async (title, description,tag="General")=>{
        const res = await fetch(`${host}/notes/addnote`, {
          method: 'POST',  // Specify POST methods
          headers: {
            'authtoken':localStorage.getItem('authToken'),
            'Content-Type': 'application/json',  // Tell server we're sending JSON
          },
          body: JSON.stringify({"title":title,"description":description,"tag":tag}),  // Convert data to JSON string
        });
        getNotes();
      }
    // Delete a note
    const deleteNote =async (id)=>{
      const res = await fetch(`${host}/notes/deletenote/${id}`, {
        method: 'DELETE',  // Specify DELETE methods
        headers: {
          'authtoken':localStorage.getItem('authToken'),
          'Content-Type': 'application/json',  // Tell server we're sending JSON
        }
      });
      getNotes();
    }

    // Edit a note
    const openModal = ()=>{
      if(status==='none')
        setStatus('block')
      else
        setStatus('none')
    }
    const editNote =async(title,description,tag)=>{
        const res = await fetch(`${host}/notes/updatenote/${Id}`, {
          method: 'PUT',  // Specify PUT methods
          headers: {
            'authtoken':localStorage.getItem('authToken'),
            'Content-Type': 'application/json',  // Tell server we're sending JSON
          },
          body: JSON.stringify({"title":title,"description":description,"tag":tag}),  // Convert data to JSON string
        });
        getNotes();
    }

    return(
        <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote,status,setStatus,Id,setId,openModal}}>
            {props.children}
        </NoteContext.Provider>
    )
  }
export default NoteState