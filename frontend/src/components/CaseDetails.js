import { useCaseContext } from "../hooks/useCaseContext"
import { useNavigate } from 'react-router-dom';

import formatDistanceToNow from "date-fns/formatDistanceToNow"

const CaseDetails = ({ oneCase }) => {
    const { dispatch } = useCaseContext()
    const { victim, perpetrator, report, createdAt } = oneCase
    const navigate = useNavigate()
    
    const handleClick = async () => {
        const response = await fetch('http://localhost:5000/api/cases/' + oneCase._id, {
            method: 'DELETE'
        })
        const json = response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_CASE', payload: json })
            alert('Case successfully deleted.')
            navigate(0);
        }
    }

    return (
        <div className="case-details">
            <h2>{ report.category }</h2>
            <p><strong>Submitted:</strong> { formatDistanceToNow(new Date(createdAt), { addSuffix: true }) }</p>
            {/* <p><strong>ID:</strong> { oneCase._id }</p> */}
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
                <div className="flex-container">
                    <h4>Case Summary</h4>
                    <p>{report.details.length > 250 ?
                        `${report.details.substring(0, 250)}...` : report.details
                    }</p>
                </div>
            </div>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default CaseDetails