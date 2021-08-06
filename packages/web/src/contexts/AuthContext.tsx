import { 
    createContext,
    useState,
    ReactNode,
} from 'react';

import Router from 'next/router';

import { api } from '../services/api';
import Home from '../pages';
import Dashboard from '../pages/dashboard';

type signIn = {
    email: string;
    password: string;
}

interface AuthContextData {
    isAuthenticated: boolean;
    isAdmin: boolean;
    signIn({ email, password }: signIn): Promise<void>;
};

type AuthContextProviderProps = {
    children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [isAdmin, setIsAmin] = useState(false);

    async function signIn({
        email,
        password
    }: signIn) {
        const options = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        
        await api.post('/v1/login', {
            email,
            password
        }, options)
        
        .then(response => {
            const data = response.data.token;

            localStorage.setItem('token', data);

            api.defaults.headers[`Authorization`] = `Bearer ${data}`;

            setAuthenticated(true);

            Router.push('/dashboard');
        }).catch(err => {
            console.log(err);
            alert(err);
            Router.push('/');
        });
    };

    return (
        <AuthContext.Provider value={{ signIn, isAdmin, isAuthenticated }}>
            { !isAuthenticated ? <Home /> : children }
        </AuthContext.Provider>
    )
};