import Asteroid from "./Asteroid";
import FrameComponent from "./FrameComponent";
import "./AsteroidList.css";

const AsteroidList = () => {
  return (
    <div className="asteroid-list">
      <div className="frame-parent">
        <div className="ledger-launchpad-parent">
          <header className="ledger-launchpad">Ledger Launchpad</header>
          <div className="asteroidgroup-wrapper">
            <div className="asteroidgroup">
              <div className="bill-option-a">
                <Asteroid astroidVectors="/astroidvectors.svg" a="A" />
                <div className="bill-option-b">
                  <div className="asteroid2">
                    <div className="option-b-details">
                      <img
                        className="astroidvectors-icon2"
                        alt=""
                        src="/astroidvectors.svg"
                      />
                      <div className="b2">B</div>
                      <div className="b3">
                        <p className="b4">B</p>
                      </div>
                    </div>
                    <div className="i2">i</div>
                    <div className="l4">l</div>
                    <div className="l5">l</div>
                    <div className="content-spacer"> </div>
                  </div>
                </div>
                <FrameComponent c="C" />
              </div>
              <div className="bill-option-c">
                <div className="bill-option-d">
                  <Asteroid
                    astroidVectors="/astroidvectors-3.svg"
                    a="D"
                    propWidth="unset"
                    propPadding="var(--padding-19xl-2) var(--padding-17xl-7) var(--padding-19xl-2) var(--padding-17xl-8)"
                    propAlignSelf="unset"
                    propLeft="unset"
                    propRight="93.1px"
                  />
                  <FrameComponent
                    c="E"
                    propWidth="unset"
                    propPadding="var(--padding-8xs) 0px 0px"
                    propAlignSelf="unset"
                    propPadding1="var(--padding-19xl-4) var(--padding-17xl-7) var(--padding-19xl-4) var(--padding-17xl-8)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="calendar">
          <div className="day-display">
            <div className="day-31">Day 31</div>
            <img
              className="statusbar-icon"
              loading="lazy"
              alt=""
              src="/statusbar.svg"
            />
            <div className="day-1">Day 1</div>
          </div>
        </div>
      </div>
      <div className="status">
        <div className="status1">Status</div>
      </div>
    </div>
  );
};

export default AsteroidList;
