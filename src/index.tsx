const Test = ({ text }) => {
  return <h1>{text}</h1>;
};

document.querySelector("#root").appendChild(<Test text="haha" />);
