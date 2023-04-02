import { useCaseContext } from "../hooks/useCaseContext"

const CaseDetails = ({ oneCase }) => {
    const { dispatch } = useCaseContext()
    const { victim, perpetrator, report, createdAt } = oneCase
    
    const handleClick = async () => {
        const response = await fetch('http://localhost:5000/api/cases/' + oneCase._id, {
            method: 'DELETE'
        })
        const json = response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_CASE', payload: json })
            alert('Case successfully deleted. Please refresh the page.')
        }
    }

    return (
        <div className="case-details">
            <h2>{ report.category }</h2>
            <p><strong>Date submitted:</strong> { createdAt }</p>
            <p><strong>ID:</strong> { oneCase._id }</p>
            <div className="flex">
                <div className="flex-container">
                    <h4>Victim Details</h4>
                    <p>Name: { victim.name }</p>
                    <p>Age: { victim.age }</p>
                    <p>Occupation: { victim.occupation }</p>
                </div>
                <div className="flex-container">
                    <h4>Perpetrator Details</h4>
                    <p>Name: { perpetrator.name }</p>
                    <p>Occupation: { perpetrator.occupation }</p>
                    <p>Relationship: { perpetrator.relationship }</p>
                </div>
            </div>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default CaseDetails