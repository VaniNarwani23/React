import React, { Children, use } from "react";
import Usercontext from "./usercontext";

const UserContextProvider = ({Children}) => {
    const [user , setUser]=  React.useState(null)
    return(
        <UserContextProvider value={{user,setUser}}>
            {Children}
        </UserContextProvider>
    )
}
export default UserContextProvider;