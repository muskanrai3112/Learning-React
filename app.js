{
  /* <div id="parent">
    <div id="child1">
        <h1>I am an h1 tag</h1>
    </div>
     <div id="child2">
        <h1>I am an h1 tag</h1>
    </div>
</div>

if there will be multiple children (sibling) then we have to put it into array if only one child you can pass it without any array*/
}

// ReactElement(is Object) => Html Browser Understands

// const heading = React.createElement("h1", {id:"heading"}, "Hello this is react app")
// console.log("heading", heading) //object
// note: - we can give attribute in the Object like id or class

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

// nest in react
const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child1"}, [
        React.createElement("h1", {}, "Hello i am the h1 tag"),
        React.createElement("h2", {}, "Hello i am the h2 tag"),
      ] ),
      React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "Hello i am the h1 tag"),
        React.createElement("h2", {}, "Hello i am the h2 tag"),
      ] )
  ]
);
console.log(parent, "parent");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// 1.what is the most expensive thing is browser
// ANS:- when the putting some nod in dom or removing some dom in browser is the most expensive thing

// 2.what is React Element?
// ANS:- React Element is nothing but normal java script Element
