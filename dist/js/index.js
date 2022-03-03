const Test = ({ text }) => {
    return createElement("h1", null, text);
};
document.querySelector("#root").appendChild(createElement(Test, { text: "haha" }));
