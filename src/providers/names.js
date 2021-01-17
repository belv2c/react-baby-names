import React, { createContext, useContext } from 'react';

import { names } from '../data';

export const NamesContext = createContext();

export function NamesProvider({ children }) {
    return (
        <NamesContext.Provider value={names}>{children}</NamesContext.Provider>
    ) 
}

export function useNames() {
    const context = useContext(NamesContext);
    if (!context) {
        throw new Error('You probably forgot the <NamesProvider> context provider');
    }
    return context;
}