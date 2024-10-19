import pfp from "./IMG_5003.png";
import "./charStyles.css";
import SocialButton from "./social-button";
import tg from "./tg.png";
import dex from "./dex.png";
import xW from "./xW.png";

const CharBox = () => {
  return (
    <div className="charBox">
      <img src={pfp} />
      <h2>Dominic Lopex Hedge Fund Inu</h2>
      <div className="socialBox">
        <SocialButton platform="telegram" url="" img={tg} />
        <SocialButton platform="twitter" url="" img={xW} />
        <SocialButton platform="dexscreener" url="" img={dex} />
      </div>
    </div>
  );
};

export default CharBox;
