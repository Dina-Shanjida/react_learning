import React from "react";
import User_Context from "./User_Context";
import { useState } from "react";

const User_Context_Provider = ({children}) => {

    const [user , set_user] = useState(null)

    return (
        <User_Context.Provider value = {{user , set_user}}>
            {children}
        </User_Context.Provider>
    )
}

export default User_Context_Provider