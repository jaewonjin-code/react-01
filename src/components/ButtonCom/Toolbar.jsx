import { handlePlay, handleStop } from "./handle";
import ButtonCom from "./ButtonCom";
import style from "./ButtonCom.module.css";
import sampleVideo from "../../assets/sample.mp4";

const Toolbar = () => {
  return (
    <>
      <nav>
        <ButtonCom
          message="videoPlayer"
          handle={handlePlay}
          style={style.myButton}
        >
          Play
        </ButtonCom>
        <ButtonCom
          message="videoPlayer"
          handle={handleStop}
          style={style.myButton}
        >
          Stop
        </ButtonCom>
      </nav>
      <br />
      <section>
        <video id="videoPlayer" src={sampleVideo} controls width="350" />
      </section>
    </>
  );
};

export default Toolbar;
