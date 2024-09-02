import React, { createContext, useEffect, useState } from "react";
import supabase from "../supabaseClient";

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState();
    const [account, setAccount] = useState();

    const fetchAccountData = async (userId) => {
        const { data, error } = await supabase
            .from("STARTIFY_USER")
            .select("userName, userIntro, profileImgUrl")
            .eq("user_id", userId)
            .single();
        if (error) {
            return null;
        }
        return data;
    };

    useEffect(() => {
        // 유저 정보 가져와서 전역상태로 사용
        const getSession = async () => {
            const response = await supabase.auth.getSession();
            setUser(response.data.session.user);

            const userInfo = await fetchAccountData(response.data.session.user.id);
            setAccount(userInfo);
        };
        getSession();

        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            console.log("session?.user => ", session?.user);
            // setUser(session?.user ? session?.user : null);
            if (session?.user) {
                setUser(session.user);

                const userInfo = fetchAccountData(session.user.id);
                setAccount(userInfo);
            } else {
                setUser(null);
                setAccount(null);
            }
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    return <UserContext.Provider value={{ user, setUser, account }}>{children}</UserContext.Provider>;
}
