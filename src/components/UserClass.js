import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: 'Dummy',
                location: 'Default',
                avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4'
            }
        }
        // console.log(`${this.props.name} Component Constructor`);
    }

    async componentDidMount() {
        console.log(`${this.props.name} Component Mounted`);
        const data = await fetch('https://api.github.com/users/parathantl');
        const json = await data.json();
        this.setState({ userInfo: {
            name: json.name,
            location: json.location,
            avatar_url: json.avatar_url
        } });
    }

    componentDidUpdate() {
        console.log(`${this.props.name} Component Updated`);
    }

render() {
    const { name, location } = this.state.userInfo;

    // console.log(`${name} Component Rendered`);
    return (
        <div className="user-card">
            <img src={this.state.userInfo.avatar_url} alt={name} />
            <h2>{name}</h2>
            <p>{location}</p>
        </div>
    )
}
}

export default UserClass;