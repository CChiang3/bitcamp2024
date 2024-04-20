import { useMemo } from "react";
import "./FrameComponent.css";

const FrameComponent = ({
  c,
  propWidth,
  propPadding,
  propAlignSelf,
  propPadding1,
}) => {
  const optionABackgroundStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const asteroid3Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding1,
    };
  }, [propAlignSelf, propPadding1]);

  return (
    <div className="option-a-background" style={optionABackgroundStyle}>
      <div className="asteroid3" style={asteroid3Style}>
        <img
          className="astroidvectors-icon1"
          alt=""
          src="/astroidvectors.svg"
        />
        <div className="b1">B</div>
        <div className="i1">i</div>
        <div className="l2">l</div>
        <div className="l3">l</div>
        <div className="spacer1"> </div>
        <div className="c">{c}</div>
      </div>
    </div>
  );
};

export default FrameComponent;
