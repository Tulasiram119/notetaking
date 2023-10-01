import React, { useContext, useEffect,useRef ,useState} from "react";
import Noteitem from "./Noteitem";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";

export default function Notes() {
  const { notes, getNotes , editNote} = useContext(noteContext);
  
  const [note,setNote] = useState({id :"",etitle:"",edescription:"",etag:""});
  const ref = useRef(null);
  const refClose = useRef(null);
  useEffect(() => {
    getNotes();
    // enlint-disable-next-line
  }, []);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id,etitle: currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
  };  
  const handleChange = (e)=>{
    setNote({...note,[e.target.name]:e.target.value});
}
const handleClick = (e)=>{    
    editNote(note.id,note.etitle,note.edescription,note.etag);    
    refClose.current.click(); 
    
   
}
  return (
    <>
    <AddNote />
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <form>
          <div className="mb-3">
            <label htmlFor="etitle" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="etitle" name="etitle" value={note.etitle} minLength={5} required
              aria-describedby="emailHelp" onChange={handleChange}
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor ="edescription" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control" value={note.edescription}
              id="edescription" name = "edescription" onChange={handleChange} minLength={5} required
            />
          </div>          
          <div className="mb-3">
            <label htmlFor ="etag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control" value={note.etag}
              id="etag" name = "etag" onChange={handleChange} minLength={5} required
            />
          </div>         
        </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary" ref={refClose}
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button"disabled={note.etitle.length<5 || note.edescription.length<5} className="btn btn-primary" onClick={handleClick}>
                Update note
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row my-3">
        <h3>View Notes</h3>
        <div className="container mx-2">
        {notes.length === 0 && 'No Notes to diaplay'}
        </div>
        {notes.map((note) => (
          <Noteitem key={note._id} updateNote={updateNote} note={note} />
        ))}
      </div>
    </>
  );
}
