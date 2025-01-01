import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

// React element is equivalent to domElement

// jsx:- jsx is not html it is html or html like syntax

// jsx(transpiled before it reaches to js engine) this is done by Parcel(but it is a manager)-babel it is done by

// transpiled:- means this code is converted to the code which browser understands

// React.createElement => object =>  Html(render)
// jsx=>React.createElement => object =>  Html(render) [Babel is converting it to the jsx to react.create element]

// React Element
const ElementHeading = <h1 className="head">Hello react using jsx 🚀</h1>;
console.log(ElementHeading, "ElementHeading");

// what is react component?
// 1.Functional component
// 2.class component.
// What is react fuctional component?
// - nothing but a normal javascript function which returns some piece of jsx.

const HeaderComponent = () => {
  return (
 <>
    <h1>Hello i am functional component</h1>
    <Title/>
 </>
  )
 
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);

// ---------------------------------#-------------------------
// Functional Component

const Title = () => {
  return <h1>Hello this is title component</h1>;
};
