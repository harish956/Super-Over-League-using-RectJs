const element = (
  //   Write your code here.
  <div className="main-background-container">
    <div className="inner-container">
      <h1 className="heading">Super Over League</h1>
      <div className="image-container">
        <img
          className="rcb-image"
          src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
          alt="rcb"
        />
        <img
          className="csk-image"
          src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
          alt="csk"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
