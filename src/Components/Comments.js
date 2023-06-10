/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import ReactDOM from "react-dom/client";
import React from "react";

function Comment(props) {
  let [name, setName] = useState(props.name);
  let [comment, SetComment] = useState("How artistic!");
  let newName = props.name;
  let NewComment = comment;
  return (
    <>
      <a className="avatar">
        <img src={props.img} alt="avatar" />
      </a>
      <div className="content">
        <a className="author">{name}</a>
        <div className="metadata">
          <span className="date">Today at 5:42PM</span>
        </div>
        <div className="text">{comment}</div>
        <div className="actions" id={props.id}>
          <button
            className="reply"
            onClick={(event) => {
              const x = ReactDOM.createRoot(document.getElementById(props.id));
              x.render(
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "46%",
                    gap: "16px"
                  }}
                >
                  <div>
                    <label htmlFor={props.nameId}>Name : </label>
                    <input
                      id={props.inputId}
                      type="text"
                      onChange={(e) => {
                   
                          newName = e.target.value;
                       
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor={props.commentid}>comment : </label>
                    <input
                      id={props.commentid}
                      type="text"
                      onChange={(e) => {
                     
                          NewComment = e.target.value;
                        
                      }}
                    />
                  </div>
                  <button
                    style={{ width: "42%", alignSelf: "center" }}
                    onClick={() => {
                      setName(newName);
                      SetComment(NewComment);
                    }}
                  >
                    Edit
                  </button>
                </div>
              );
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
}

export default Comment;
