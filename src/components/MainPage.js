import CharBox from "./charBox/CharBox";
import "./mainPage.css";
import Post from "./posts/posts";

const MainPage = () => {
  return (
    <div className="mainCont">
      <div className="mainRCont">
        <CharBox />
      </div>
      <div className="mainLCont">
        <h2>Posts</h2>
        <Post />
      </div>
    </div>
  );
};

export default MainPage;
