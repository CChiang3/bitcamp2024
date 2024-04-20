import { useMemo } from "react";
import "./Asteroid.css";

const Asteroid = ({
  astroidVectors,
  a,
  propWidth,
  propPadding,
  propAlignSelf,
  propLeft,
  propRight,
}) => {
  const asteroid1Style = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const optionADetailsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const lStyle = useMemo(() => {
    return {
      left: propLeft,
      right: propRight,
    };
  }, [propLeft, propRight]);

  return (
    <div className="asteroid1" style={asteroid1Style}>
      <div className="option-a-details" style={optionADetailsStyle}>
        <img
          className="astroidvectors-icon"
          loading="lazy"
          alt=""
          src={astroidVectors}
        />
        <div className="b">B</div>
        <div className="a">{a}</div>
      </div>
      <div className="i">i</div>
      <div className="l" style={lStyle}>
        l
      </div>
      <div className="l1">l</div>
      <div className="spacer"> </div>
    </div>
  );
};

export default Asteroid;
