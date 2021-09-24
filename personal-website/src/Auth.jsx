import React, { useContext, useEffect, useState } from "react";
import { auth } from "./Base.js";


export const AuthContext = React.createContext();
export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [userID, setUserID] = useState(JSON.parse(localStorage.getItem('userID')) || "");
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        var ans = auth.createUserWithEmailAndPassword(email, password);
        var test = ans;
        test.then(function (data) {
            console.log(data.user.uid);
            setUserID(data.user.uid);
            localStorage.setItem('userID', JSON.stringify(data.user.uid));
        })

        return ans

    }

    function getUserID() {
        return userID;
    }

    function login(email, password) {
        var ans = auth.signInWithEmailAndPassword(email, password);
        var test = ans;
        test.then(function (data) {
            console.log(data.user.uid);
            setUserID(data.user.uid);
            localStorage.setItem('userID', JSON.stringify(data.user.uid));
        })
        return ans
    }

    function logout() {
        localStorage.setItem('userID', JSON.stringify(""));
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, []);

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        getUserID
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};