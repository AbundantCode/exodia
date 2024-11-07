import CharBox from "./charBox/CharBox";
import "./mainPage.css";
import PostList from "./posts/postList";

const MainPage = () => {
  return (
    <div className="mainCont">
      <div className="mainRCont">
        <CharBox />
      </div>
      <div className="mainLCont">
        <h2>Posts</h2>
        <PostList />
      </div>
    </div>
  );
};

export default MainPage;
