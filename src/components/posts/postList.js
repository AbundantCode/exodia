import { postData } from "./postData.js";
import Post from "./posts";
import "./posts.css";

const PostList = () => {
  return (
    <div className="postListCont">
      {postData.map((post) => (
        <Post key={post} date={post.date} content={post.content} />
      ))}
    </div>
  );
};

export default PostList;
