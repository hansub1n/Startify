import React, { createContext, useEffect, useState } from "react";
import supabase from "../supabaseClient";

export const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = async () => {
            const { data, error } = await supabase.from("STARTIFY_USER").select("*").eq("user_id", "userId").single();
            if (error) {
                console.log(error);
            } else {
                console.log(data);
                setUser(data);
            }
        };
        userData();
    }, []);
    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

export default UserProvider;
