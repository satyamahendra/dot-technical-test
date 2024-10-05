"use client";

import { Session, User } from "@prisma/client";
import React, { useContext, createContext, ReactNode } from "react";

interface AuthContextProviderProps {
    user: Partial<User> | null;
    session: Session | null;
}

const AuthContext = createContext({} as AuthContextProviderProps);

export const AuthContextProvider = ({ children, value }: { children: ReactNode, value: AuthContextProviderProps }) => {
    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
};
