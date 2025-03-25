import React, { useState } from "react";
import User_context from "./User_Context";

const User_context_provider = ({children}) => {

    const [user , set_user] = useState(null)

    return(
        <User_context.Provider value = {{user , set_user}}>
            {children}
        </User_context.Provider>
    )
}


export default User_context_provider