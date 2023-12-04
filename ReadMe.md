### Parcel is used to bundling the Project
- Dev Build
- Local Server
- HMR- Hot Module Replacement
- File Matching Algorithm written in C++
- Faster builds by caching
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - to support all browser based things difference bundling
- Error Handling
- HTTPs 
- Tree shaking - remove unused code
- Different dev and prod bundles

- Remove main key from package.json if you are running npm parcel build index.html
Parcel is a bundler

https://browserslist.dev/?q=bGFzdCAzIHZlcnNpb25z - To get the Browser support of our app

Parcel is doing the scene behind this to convert JSX -> HTML -> JS ENGINE (Transpiled by Parcel)

JSX transpiled before it reaches JS (PARCEL -> Babel )
React.createElement (Babel is doing this transition)=> ReactElement-JS Object => HTMLElement(render)

Transitive Dependency of Node Modules
Git & Github are different. Github is a client of Git

Package.json is a configuration for npm. Can get packages and depenedencies. Keep track of what package installed
Package.lock.json: keeps locks of the dependencies

Two types of dependencies:
1. Dev dependencies
22. Normal dev

Git should only have non-regeneratable code and files.

npm command used to install packages
npm is used to execute the package

Browserlist node package helps to select the supported browsers for the app

Bundler: Whole code needs to be compiled and cached

Read more on parcel & babel
About the algorithms used
 
 Component Composition (Puts up the component inside a component is called)

 Normal JavaScript function that return a function of JSX elements

 How JSX prevents sanitize the injections

 Can not have multiple default export
Named export is another type of exporting (to export multiple items)
Other one is (default export)
1. default export
2. Named export

Functional component at the end is JS Function
React Element -> Plain JavaScript Object

Normal JS Variable
State Variable - Super Powerful Variable (A Normal JS Function given to us by React)

# React Hooks
Normal JS Function (Written by FB Developers)
1. useState() - Super Powerful State Variables in React
2. useEffect()

Whenever a state variable updates React Re-renders the component

Diff Algorithm:
Finds out the difference between the 2 Virtual DOMs(previous & new)

In React 16 Reconciliation algorithm came
Reconciliation Algorithm: (React Fiber new way of finding the different and updating the algorithm)

React has Virtual DOM: Not an actual Dom -> is a Representation of Actual DOM

What is actual DOM: Those are Tags. Eg: <div>, <img>
React Component is the Virtual DOM

Virtual DOM is nothing but JS Object

Seperation of Concerns & Single Responsibility Principle

At the end Hook in react is JS Function

useEffect => 2 parameter
1. Callback Function
2. Dependencies array

useEffect will be called after the component has been rendered

Browsers block from one origin to another origin'
Optional Chaining (?)

whenever state variable changes, react will re-render the component and all updated values will be there. (triggers the reconciliation circle)

If No dependency array in useEffect => useEffect is called on every render
If the dependency array is empty => [] => useEffect is called on only initial Render (just once)
If dependency array is there, then react wil re-render whenever that dependency changes

## 2 types of routing in web apps
1. Client side routing
2. Server side routing



In Class Component:
- Constructor is called
- Render Method is called

componentDidMount
- When Class Component called: Constructor called, Render Called, componentDidMount called

Parent Constructor
Parent Render
Children Constructor
Children Render
Children componentDidMount
Parent componentDidMount

Once the component is mounted completely only componentDidMount will be called

componentDidMount used in calling API
- we call API inside useEfffect
- to re-render the component API called in useEffect

Render Phase is batched together and
Commit Phase is batched together <DOM Updating is very expensive>

--- Mounting -----

Constructor (dummy)
Render (dummy)
    <HTML Dummy>
Component Did Mount
    <API Calle>
    <this.setState> --> State variable is updates

So, component re-renders

--- UPDATING

    render (API DATA)
    <HTML Api Data>
    componentDidUpdate

Unmounting means: when component disappears from the HTML

Single Responsibility Principle
- Should do one thing for one component
- Modularity means breaking code into small small parts to make it testable

- Maintainable, Reusable, Testable

Hook is a utility function
- Custom Hook: We will take out some responsibility from component and make it modular

App Chunking / Code Splitting / Lazy Loading
- Lazy Loading: It will not load immediately if we used Lazy Loading implementation - On Demand Loading

Read More about Lazy Loading

HOC:
- A Component that takes an existing component and returns back a new component (by twiging)
- we get and enhance the component and return back component

----

2 layers found in React:
UI Layer is powered by Data Layer (JSX parts)
Data Layer (state, props, local variables etc...)

Uplifting state : Lifting State Up

Props Drilling

Redux Tool Kit
- When Add to Cart clicked -> dispatches an action -> then it calls a (reducer) function -> this function then internally modifies the slice in the redux store
This function is known as Reducer.
Reducer function modifies the slice of redux-store

Selector: Use Selector to read the data from store
Subscribing to the store - A component is subscribed to store through/using selector

## Redux Toolkit
    - Install @reduxjs/toolkit and react-redux
    - Build our store
    - Connect our store to our app
    - Slick (cart slice)
    - dispatch action
    - Selector

--------------------------------
Selector is nothing but Hook inside a react. A hook is a JS function

Redux Performance issue:
const store = useSelector((state) => store);
const cart = store.cart.items

This will work perfectly, but very less efficient. The component will change whenever some un-related variables changes in store.
Subscribe only to a small portion of the store.

Redux Toolkit allows to mutate the state
In previous one, we have to take a copy of the state and then add and return new state

## Types of testing (developer)
- Unit Testing
- Integration Testing
- End to End Testing - e2e Testing

## Setting up Testing in our App
- Install React Testing Library
- Installed Jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel config file to disable default Babel transpilation
- Jest configuration - npx jest --init
- Install jsdom library
- Install  @babel/preset-react - to make JSX work in Test Cases
- Include  @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom

__ => called as dunder => dunder test
Assertion should be there

