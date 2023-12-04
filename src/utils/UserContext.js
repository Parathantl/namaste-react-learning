import { createContext } from "react"

const UserContext = createContext({
    loggedInUser: 'default User'
});

export default UserContext;