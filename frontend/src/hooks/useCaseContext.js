import { CaseContext } from "../context/CaseContext";
import { useContext } from "react"

export const useCaseContext = () => {
    const context = useContext(CaseContext)

    if (!context) {
        throw Error('useCaseContext must be used inside a CaseContextProvider')
    }

    return context
}