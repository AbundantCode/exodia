import "./posts.css";

const Post = ({ date, content }) => {
  return (
    <div className="postCont">
      <div className="postHeaderCont">
        <h3>Dominic Lopez</h3>
        <p>Date: {date}</p>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Post;
