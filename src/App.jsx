import React from "react";
import Router from "./shared/Router";
import { UserProvider } from "./context/UserContext";

const App = () => {
    return (
        <UserProvider>
            <Router />
        </UserProvider>
    );
};

export default App;
