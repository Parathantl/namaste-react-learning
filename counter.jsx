function App () {
    const info = {
        name: "Parathan",
        age: 26
    }
    return <Component2 {...info} />
}


function Component2 ({ name, age }) {
    return <h1>{`${name} ${age}`}</h1>
}