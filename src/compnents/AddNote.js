import React,{useContext,useState} from 'react';
import noteContext from '../context/notes/noteContext';

export default function AddNote(props) {
    const {addNote} = useContext(noteContext);
    const [note,setNote] = useState({title:"",description:"",tag:""});
    const handleChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value});
    }
    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""});
        props.showAlert("Added Sucessfully","success");
    }
  return (
    <div className="container my-3">
        <h3>Add Note</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title" name="title" minLength={5} required
              aria-describedby="emailHelp" onChange={handleChange} value = {note.title}
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor ="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control" minLength={5} required
              id="description" name = "description" onChange={handleChange} value = {note.description}
            />
          </div>          
          <div className="mb-3">
            <label htmlFor ="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control" minLength={5} required
              id="tag" name = "tag" onChange={handleChange} value = {note.tag}
            />
          </div>          
          <button disabled={note.title.length<5 || note.description.length<5}type="submit" className="btn btn-primary" onClick={handleClick}>
            Add Note
          </button>
        </form>
      </div>

  )
}
