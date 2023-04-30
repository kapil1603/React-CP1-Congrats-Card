const Button = (props) => {
  //  Write your code here.
  //   console.log(props);
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="bgContainer">
    <h1 className="heading">Social Button</h1>
    <div className="commonButton">
      <Button className="like-button" buttonText="Like" />
      <Button className="comment-button" buttonText="Comment" />
      <Button className="share-button" buttonText="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
