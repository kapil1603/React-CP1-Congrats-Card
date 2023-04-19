const element = (
  // Write your code here.
  <div className="bgContainer">
    <h1 className="head">Congratulations</h1>
    <div className="profileSection">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profileImage"
      />
      <h1 className="head2">KIRAN V</h1>
      <p className="para">
        Vishu Institute of computer Education Technology,Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="profileImage"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
