import { 
    createContext,
    useState,
    ReactNode,
} from 'react';

import Router from 'next/router';

import { api } from '../services/api';

import { setCookie, parseCookies } from 'nookies';
import { useEffect } from 'react';

type signIn = {
    email: string;
    password: string;
}

interface AuthContextData {
    isAdmin: boolean;
    isAuthenticated: boolean;
    isLoading: boolean;
    signIn({ email, password }: signIn): Promise<void>;
};

type User = {
    id: string;
    email: string;
}

type AuthContextProviderProps = {
    children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [isAdmin, setIsAmin] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    const isAuthenticated = !!user;

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
            const data = response.data;

            setCookie(undefined, 'psychometrika.token', data.token, {
                maxAge: 60 * 60 * 24 // 1 day
            });

            setUser({ id: data.id, email: data.email });
            
            setLoading(false);

            api.defaults.headers['Authorization'] = `Bearer ${data.token}`;

            Router.push('/dashboard');
        }).catch(err => {
            console.log(err);
            alert(err);
            setLoading(false)
            Router.push('/');
        });
    };

    return (
        <AuthContext.Provider value={{ signIn, isAdmin, isAuthenticated, isLoading }}>
            { children }
        </AuthContext.Provider>
    )
};