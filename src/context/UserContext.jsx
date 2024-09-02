import React, { createContext, useEffect, useState } from "react";
import supabase from "../supabaseClient";

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState();

    useEffect(() => {
        // 유저 정보 가져와서 전역상태로 사용
        const getSession = async () => {
            const response = await supabase.auth.getSession();
            setUser(response.data.session.user);
        };
        getSession();

        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            console.log("session?.user => ", session?.user);
            setUser(session?.user ? session?.user : null);
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}
