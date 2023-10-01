import React,{useContext }from 'react'
import noteContext from '../context/notes/noteContext';
export default function Noteitem(props) {
    const {note,updateNote} = props; 
    const {deleteNote} = useContext(noteContext);
  return (
    <div className='col-md-3'>
      <div className="card my-3">
  
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <p className='card-text'>{note.tag}</p>
    <i className="fa fa-trash-alt mx-2" onClick={()=>deleteNote(note._id)}></i>    
    <i className="fa fa-edit mx-2" onClick={()=>updateNote(note)}></i>    
  </div>
</div>
    </div>
  )
}
