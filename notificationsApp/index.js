const Notification = (props) => {
  //  Write your code here.
  const { className, content, image } = props;
  return (
    <div className={`commonprops ${className}`}>
      <img src={image} className="imageprops" />
      <p className="contentprops">{`${content} message`}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bgcontainer">
    <h1 className="heading"> Notifications </h1>
    <div className="messages">
      <Notification
        className="information"
        content="Information"
        image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="success"
        content="Success"
        image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="wrong"
        content="Wrong"
        image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="error"
        content="Error"
        image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
