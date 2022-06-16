import "./headBar.css";

const HeadBar = (props) => {
  return (
    <div>
      <div className="container-fluid">
        <div id="HeadBar" className="row">
          <div className="col-12">
              <p id="hb-p1">{props.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadBar;
