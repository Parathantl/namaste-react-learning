// React.createElement() - Create and Render Basic Elements. 
// This is the most fundamental way to create a React element.
// It takes three arguments: type, props, and children.
// type: string, function, or React component
// props: object of properties
// children: string, array, or React component
// React.createElement() returns a React element.
// React.createElement() creates a tree of React elements.

// ReactDOM.render() renders a React element to the DOM.
// React elements are immutable. Once you create an element, you cannot change its children or attributes.
// ReactDOM.render() only updates DOM elements that have changed.
// ReactDOM.render() is only called once per element.
// React.createElement() is called multiple times per element.
// ReactDOM.render() creates a tree of DOM nodes.

// ReactElement (Object) => HTML (String) => DOM (Object) => Browser (Object)

const parent = React.createElement('div', {id: "parent"}, 
[
    React.createElement('div', {id: "child"}, 
    [React.createElement('h1', null, "I am H1 Tag!"),
    React.createElement('h2', {id: 'heading'}, "I am H2 Tag!")]),
    React.createElement('div', {id: "child2"}, 
    [React.createElement('h1', null, "I am H1 Tag!"),
    React.createElement('h2', {id: 'heading'}, "I am H2 Tag!")])
]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);

// Manipulate DOM with JavaScript - React Philosophy
// The most costly operation is to manipulate the DOM. React is fast because it does not manipulate 
// the DOM directly. 
// Instead, it uses a virtual DOM to keep track of changes and then updates the DOM accordingly. 