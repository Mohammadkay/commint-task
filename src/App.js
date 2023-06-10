import "./App.css";
import Reply from "./Components/Replay";
import Comment from "./Components/Comments";

function App() {
  return (
    <div
      style={{
        border: "1px solid #00000038",
        width: "50%",
        margin: "50px auto 0 auto",
        boxShadow: " 1px 1px 14px 0px"
      }}
    >
      <div
        className="ui comments"
        style={{
          paddingLeft: "20px",
          paddingTop: "10px"
        }}
      >
        <h3 className="ui dividing header">Comments</h3>
        <div className="comment">
          <Comment
            name="Ahmed Mohsen"
            img="https://semantic-ui.com/images/avatar/small/matt.jpg"
            id="ac1"
          />
          <Reply />
        </div>
        <div className="comment">
          <Comment
            name="leith"
            img="https://semantic-ui.com/images/avatar/small/jenny.jpg"
            id="ac2"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
