import FrameComponent1 from "../components/FrameComponent1";
import AsteroidList from "../components/AsteroidList";
import "./HomeGameUI.css";

const HomeGameUI = () => {
  return (
    <div className="homegame-ui">
      <FrameComponent1 />
      <section className="ledger">
        <div className="asteroid-nav">
          <AsteroidList />
          <div className="friends">
            <div className="friend-list">
              <div className="friend-list-inner">
                <div className="friend-pair-parent">
                  <div className="friend-pair">
                    <div className="friend1" />
                    <div className="friend-pair1">
                      <div className="friend2">Friend2</div>
                    </div>
                  </div>
                  <div className="friend-pair2">
                    <div className="friend11" />
                    <div className="friend1-wrapper">
                      <div className="friend12">Friend1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="create-own-label">
                <div className="user" />
                <div className="you">You</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeGameUI;
