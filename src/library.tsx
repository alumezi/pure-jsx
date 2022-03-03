const createElement = (tag, props, ...children): HTMLElement => {
  if (typeof tag === "function") {
    return tag(props, ...children);
  }
  const element = document.createElement(tag);

  const propsList = Object.entries(props || {});
  for (let index = 0; index < propsList.length; index++) {
    const [name, value] = propsList[index];
    if (name.startsWith("on") && name.toLowerCase() in window) {
      element.addEventListener(name.toLowerCase().substr(2), value);
    } else {
      if (name === "className") {
        element.setAttribute("class", value.toString());
      } else {
        element.setAttribute(name, value.toString());
      }
    }
  }

  for (let index = 0; index < children.length; ++index) {
    const child = children[index];
    appendChild(element, child);
  }
  console.log("🚀 ~ file: index.tsx ~ line 6 ~ testFn ~ element", element);
  return element;
};

const appendChild = (parent, child) => {
  if (Array.isArray(child)) {
    child.forEach((nestedChild) => appendChild(parent, nestedChild));
  } else {
    parent.appendChild(child.nodeType ? child : document.createTextNode(child));
  }
};
