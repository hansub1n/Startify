import React, { createContext, useEffect, useState } from "react";
import supabase from "../supabaseClient";

export const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const userId = "eeb6009e-5417-4da3-998e-9e611a82e4f4";
    useEffect(() => {
        const getSession = async () => {
            const userDb = await supabase.auth.getSession();
            console.log("userdb", userDb);
        };
        getSession();
    }, []);
    // useEffect(() => {
    //     const userData = async () => {
    //         const { data, error } = await supabase.from("STARTIFY_USER").select("*").eq("user_id", userId).single();
    //         if (error) {
    //             console.log(error);
    //         } else {
    //             console.log(data);
    //             setUser(data);
    //         }
    //     };
    //     userData();
    // }, [userId]);
    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

export default UserProvider;
