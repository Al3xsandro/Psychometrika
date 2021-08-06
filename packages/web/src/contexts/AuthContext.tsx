import { 
    createContext,
    useState,
    ReactNode,
} from 'react';

import Router from 'next/router';

import { api } from '../services/api';
import Home from '../pages';

type signIn = {
    email: string;
    password: string;
}

interface AuthContextData {
    isAuthenticated: boolean;
    isAdmin: boolean;
    isLoading: boolean;
    signIn({ email, password }: signIn): Promise<void>;
};

type AuthContextProviderProps = {
    children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [isAdmin, setIsAmin] = useState(false);
    const [isLoading, setLoading] = useState(false);

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

        setLoading(true);
        
        await api.post('/v1/login', {
            email,
            password
        }, options)
        
        .then(response => {
            const data = response.data.token;

            localStorage.setItem('token', data);

            api.defaults.headers[`Authorization`] = `Bearer ${data}`;

            setAuthenticated(true);

            setLoading(false);

            Router.push('/dashboard');
        }).catch(err => {
            console.log(err);
            alert(err);
            setLoading(false)
            Router.push('/');
        });
    };

    return (
        <AuthContext.Provider value={{ signIn, isAdmin, isLoading, isAuthenticated }}>
            { !isAuthenticated ? <Home /> : children }
        </AuthContext.Provider>
    )
};