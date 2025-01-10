'use client'
import React, { createContext, useContext, useState } from 'react'

const QueryContext = createContext()
export const BusinessNameContext = ({ children }) => {
    const [query, setQuery] = useState(() => {
        const sessionQuery = sessionStorage.getItem('query')
        if (sessionQuery) return JSON.parse(sessionQuery)
    })

    const updateQuery = (newQuery) => {
        setQuery((prev) => {
            const newQueryData = { ...prev, ...newQuery }
            sessionStorage.setItem('query', JSON.stringify(newQueryData))
            return newQueryData
        })
    }

    return (
        <QueryContext.Provider value={{ query, updateQuery }} >
            {children}
        </QueryContext.Provider>
    )
}

// custom hook to use query  context 
export function useQueryContext() {
    return useContext(QueryContext)
}