function Reply() {
  return (
    <div className="comments">
      <div className="comment">
        <a className="avatar">
          <img src="https://semantic-ui.com/images/avatar/small/jenny.jpg" />
        </a>
        <div className="content">
          <a className="author">Jenny Hess</a>
          <div className="metadata">
            <span className="date">Just now</span>
          </div>
          <div className="text">Elliot you are always so right :)</div>
          <div className="actions">
            <a className="reply">Reply</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Reply;
