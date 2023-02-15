import { createContext, useContext, useState } from "react"

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();


    // useEffect(() => {
    //     if (localStorage.getItem("currentUser")) {
    //         setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
    //         if (localStorage.getItem("cartItems")) {
    //             setCartItems(JSON.parse(localStorage.getItem("cartItems")));
    //         }
    //     } else {
    //         console.log("logout");
    //     }
    // }, []);

    // function loginChecker(userName, userPass) {
    //     console.log("input:", userName, userPass);
    //     users.map((user) => {
    //         if (user.username === userName && user.password === userPass) {
    //             setCurrentUser(user);
    //             localStorage.setItem("currentUser", JSON.stringify(user));
    //             // localStorage.setItem("cartItems", JSON.stringify([]));
    //         }
    //     });
    // }

    // function logOutHandler() {
    //     // localStorage.setItem("currentUser", []);
    //     localStorage.removeItem("currentUser");
    //     setCurrentUser();
    //     localStorage.removeItem("cartItems");
    //     // localStorage.setItem("cartItems", JSON.stringify([]));
    //     setCartItems([]);
    //     navigate("/login");
    // }

    function loginHadler() {
        console.log("loginHandler")
    }
    function logoutHadler() {
        console.log("logoutHadler")
    }
    return <UserContext.Provider value={{}}>
        {children}
    </UserContext.Provider>

}