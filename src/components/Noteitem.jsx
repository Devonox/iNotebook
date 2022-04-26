import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div
        className="card my-3"
        style={{
          borderRadius: "20px",
          padding: "5px",
          boxShadow: "rgba(151, 65, 252, 0.2) 0 15px 30px -5px",
          backgroundImage:
            "linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)",
        }}
      >
        <div
          className="card-body"
          style={{
            background: "rgb(5,6,45)",
            borderRadius:"17px",
            width: "100%",
            height: "100%",
            color:"white"
          }}
        >
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
          </div>
          <p className="card-text">{note.description}</p>
          <i
            className="far fa-trash-can fa-solid mx-2"
            onClick={() => {
              deleteNote(note._id);
              props.handleAlert("Note Deleted", "success");
            }}
          ></i>
          <i
            className=" fa-pen-to-square fa-solid mx-2"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
