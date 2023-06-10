
function input(nameId,inputid,newName) {
    
    return(
        <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "46%",
                    gap: "16px"
                  }}
                >
                  <div>
                    <label htmlFor={nameId}>Name : </label>
                    <input
                      id={nameId}
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
           
}