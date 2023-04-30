const Box = (props) => {
  //  Write your code here.
  const { className, content } = props;
  return <div className={`commonprops ${className}`}>{content}</div>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box className="small" content="Small" />
      <Box className="medium" content="Medium" />
      <Box className="large" content="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
