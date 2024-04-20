import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <div className="app-u-i">
      <div className="bill-list">Bill List</div>
      <div className="billlistbg-parent">
        <div className="billlistbg" />
        <img
          className="collpase-arrrows-icon"
          loading="lazy"
          alt=""
          src="/collpase-arrrows.svg"
        />
      </div>
      <div className="bill-a-bill-container">
        <ul className="bill-a-bill-b-bill-c-bill-d-bi">
          <li className="bill-a">Bill A</li>
          <li className="bill-b">Bill B</li>
          <li className="bill-c">Bill C</li>
          <li className="bill-d">Bill D</li>
          <li>Bill E</li>
        </ul>
      </div>
    </div>
  );
};

export default FrameComponent1;
