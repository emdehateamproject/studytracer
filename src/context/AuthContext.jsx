import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [authenticated, setAuthenticated] = useState(!!localStorage.getItem('userId'));
    const [loading, setLoading] = useState(true);
    const userId = localStorage.getItem('userId');
    console.log('token check', userId);

    useEffect(() => {
        const checkLoggedIn = async () => {
            const response = await fetch('http://127.0.0.1:5000/me');
            const data = await response.json();
    
            if (response) {
                setCurrentUser(data);
            }
            setLoading(false);
        };
    
        checkLoggedIn();
    }, []);

    const login = (data) => {
        console.log(data)
        localStorage.setItem('userId', JSON.stringify(data?.id));
        localStorage.setItem('userData', JSON.stringify(data));
        setCurrentUser(data);
        setAuthenticated(true);
    };
    
    console.log(currentUser)
    const logout = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('userData');
        setCurrentUser('');
        setAuthenticated(false);
    };

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                login,
                logout,
                authenticated
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// export default AuthContext;

function useAuthentication() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('Context must be used within a Provider');
    }
    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuthentication };