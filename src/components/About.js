import UserClass from './UserClass';
import UserContext from '../utils/UserContext';
import React, { Component } from 'react'

export default class About extends Component {

    constructor(props) {
        super(props);
        // console.log('Parent Component Constructor');
    }

    componentDidMount() {
        // console.log('Parent Component Mounted');
    }

  render() {
    // console.log('Parent Component Rendered');
    return (
        <div className="about">
        <h1>About</h1>
        <div>
          Logged In User: <UserContext.Consumer>
            {value => value.loggedInUser}
          </UserContext.Consumer>
        </div>
        <UserClass name="First" location="USA" />
        <UserClass name="Second" location="USA" />
        <UserClass name="Third" location="USA" />
    </div>
    )
  }
}