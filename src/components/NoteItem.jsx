import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import NoteContext from '../context/NoteContext';
import { useContext } from 'react';

export default function NoteItem({title,description,noteId}){
    const {deleteNote,openModal,setId}=useContext(NoteContext)
    return(
        <>
            <div className="overflow-hidden flex p-3 shadow-2xl rounded-2xl shadow-gray-600 w-[20em] flex-col">
                <div className="text-xl"> {title}</div>
                <div className="text-gray-500 "> {description}</div>
                <div className='flex gap-4 pt-4 '>
                    <FontAwesomeIcon className='text-blue-600 hover:cursor-pointer' icon={faTrashCan} onClick={()=>{
                        deleteNote(noteId)
                    }} />
                    <FontAwesomeIcon className='text-blue-600 hover:cursor-pointer'onClick={()=>{window.scrollTo(0,0); openModal();setId(noteId)}} icon={faPenToSquare} />
                </div>
            </div>
        </>
    )
}
