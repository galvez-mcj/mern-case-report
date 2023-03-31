import { createContext, useReducer } from 'react'

export const CaseContext = createContext()

export const casesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CASES':
            return {
                cases: action.payload
            }
        case 'CREATE_CASE':
            return {
                cases: [action.payload, ...state.cases]
            }
        default:
            return state
    }
}

export const CaseContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(casesReducer, {
        cases: null
    })


    return(
        <CaseContext.Provider value={{ ...state, dispatch }}>
            { children }
        </CaseContext.Provider>
    )
}